import {mockResult} from '../utils/moks/result';

class DetailService {

	loadDetailData = id => {
		try {
			return new Promise(resolve => resolve(mockResult.find(item => item.id === id)));
		} catch (e) {
			console.error(e);
			return null;
		}
	}
}

const DetailApiService = new DetailService();
export default DetailApiService;
export {DetailApiService as DetailService};
