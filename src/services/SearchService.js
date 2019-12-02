
class SearchService {

	search = async () => {
		try {
			return await new Promise((resolve => resolve([])));
		} catch (e) {
			console.error(e);
			return [];
		}
	}
}

const Service = new SearchService();

export default Service;
export { Service as SearchService }
