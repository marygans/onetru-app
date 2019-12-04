class SelectorUtils {
	
	static isBoolean = (value) => {
		return typeof value === "boolean"
	};
	
	static getItemsWithBest = data => {
		const keys = data.length ? Object.keys(data[0]) : [];
		const bestItems = data.map((item, i) => {
			let count = 0;

			keys.forEach((key) => {
				if (SelectorUtils.isBoolean(item[key]) && item[key] === true) count += 1;
			});

			return { ...item, count };
		});

		let bestItem = {};

		bestItems.reduce((prev, curr) => {

			if (!!prev) {
				if (prev.count > curr.count) {
					bestItem = prev;
				} else if (prev.count === curr.count) {
					if (prev.leasingFee < curr.leasingFee) {
						bestItem = prev;
					} else {
						bestItem = curr;
					}
				} else {
					bestItem = curr;
				}
			} else {
				if (bestItem) {
					if (bestItem.count < curr.count) {
						bestItem = curr;
					} else if (bestItem.count === curr.count) {
						if (bestItem.leasingFee > curr.leasingFee) {
							bestItem = curr;
						}
					}
				}
			}

			return bestItem;

		});

		const newData = data.map((item) => {
			if (item.name === bestItem.name) {
				return {
					...item,
					isBest: true,
				};
			}

			return item;
		});

		return newData;
	}
}

export default SelectorUtils;
export { SelectorUtils };
