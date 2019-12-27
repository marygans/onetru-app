class MessageService {
	messages = [];
	listeners = [];
	start = null;
	end = null;

	getMessages(chatId) {
		let ref = admin.firestore()
			.collection('chats')
			.doc(chatId)
			.collection('messages');

		ref.orderBy('createdAt', 'desc')
			.limit(50).get()
			.then((snapshots) => {
				this.start = snapshots.docs[snapshots.docs.length - 1];

				let listener = ref.orderBy('createdAt')
					.startAt(this.start)
					.onSnapshot((messages) => {

						messages.forEach((message) => {
							this.messages = this.messages.filter(x => x.id !== message.id);
							this.messages.push(message.data())
						})
					});

				this.listeners.push(listener)
			})
	}
	getMoreMessages(chatId) {
		let ref = admin.firestore()
			.collection('chats')
			.doc(chatId)
			.collection('messages');

		ref.orderBy('createdAt', 'desc')
			.startAt(this.start)
			.limit(50).get()
			.then((snapshots) => {
				this.end = this.start;
				this.start = snapshots.docs[snapshots.docs.length - 1];

				let listener = ref.orderBy('createdAt')
					.startAt(this.start).endBefore(this.end)
					.onSnapshot((messages) => {
						messages.forEach((message) => {
							this.messages = this.messages.filter(x => x.id !== message.id);
							this.messages.push(message.data())
						})
					});

				this.listeners.push(listener)
			})
	}

	// call to detach all listeners
	detachListeners() {
		this.listeners.forEach(listener => listener())
	}
}
