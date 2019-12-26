import {functions} from 'firebase';

class SearchService {

	search = (data) => {
		try {
			const searchManagers = functions().httpsCallable('search');

			return searchManagers(data);
		} catch (e) {
			console.error(e);
			return [];
		}
	};

	fetchMoreData = (data) => {
		try {
			const searchMore = functions().httpsCallable('searchMore');

			return searchMore(data);
		} catch (e) {
			console.error(e);
			return [];
		}
	}


}

const Service = new SearchService();

export default Service;
export { Service as SearchService }
