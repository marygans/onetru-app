import {IMAGES} from '../../constants/resources';

class Item {
	constructor(
		img = '',
		name = '',
		serviceType = '',
		managementType = '',
		rating = 0,
		startingPrice = 10,
	) {
		this.img = img;
		this.name = name;
		this.serviceType = serviceType;
		this.managementType = managementType;
		this.rating = rating;
		this.startingPrice = startingPrice;
	}
}

export const mockResult = [
	new Item(
		IMAGES.ITEM_IMG,
		'Management Company #1',
		'Full service',
		'VRBO',
		5,
	),
	new Item(
		IMAGES.ITEM_IMG,
		'Management Company #2',
		'Full service',
		'VRBO',
		5,
		60,
	),
	new Item(
		IMAGES.ITEM_IMG,
		'Management Company #3',
		'Full service',
		'VRBO',
		5,
	),
	new Item(
		IMAGES.ITEM_IMG,
		'Management Company #4',
		'Full service',
		'VRBO',
		5,
		30,
	),
	new Item(
		IMAGES.ITEM_IMG,
		'Management Company #5',
		'Full service',
		'VRBO',
		5,
		60,
	),
];


