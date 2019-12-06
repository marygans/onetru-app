import {mockResult} from '../utils/moks/result';

class SearchService {

	search = () => {
		try {
			return new Promise((resolve => resolve([...mockResult.slice(0, 4)])));
		} catch (e) {
			console.error(e);
			return [];
		}
	}

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
