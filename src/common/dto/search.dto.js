class SearchDto {
	constructor(search = '', currentVisibleCount = 0) {
		this.search = search;
		this.currentVisibleCount = currentVisibleCount;
	}
}

export default SearchDto;
export { SearchDto };
