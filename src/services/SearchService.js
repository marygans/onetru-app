import {functions} from 'firebase';

import {mockResult} from '../utils/moks/result';
import {SearchDto} from '../common/dto/search.dto';

class SearchService {

	search = (data) => {
		try {
			const requestData = new SearchDto(data.search);
			const searchManagers = functions().httpsCallable('search');
			return searchManagers(requestData);
		} catch (e) {
			console.error(e);
			return [];
		}
	};

	fetchMoreData = (currentLength) => {
		try {
			return new Promise((resolve => {
				setTimeout(() => {
					resolve([...mockResult.slice(currentLength, currentLength + 2)])
				}, 1500);
			}));
		} catch (e) {
			console.error(e);
			return [];
		}
	}


}

const Service = new SearchService();

export default Service;
export { Service as SearchService }
