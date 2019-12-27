import {functions} from 'firebase';

class SearchService {

	search = (search = '') => {
		try {
			const searchManagers = functions().httpsCallable('search');
			return searchManagers({search});
		} catch (e) {
			console.error(e);
			return [];
		}
	};

	fetchMoreData = (search = '', lastId = '') => {
		try {
			const searchMore = functions().httpsCallable('searchMore');

			return searchMore({search, lastId});
		} catch (e) {
			console.error(e);
			return [];
		}
	}


}

const Service = new SearchService();

export default Service;
export { Service as SearchService }
