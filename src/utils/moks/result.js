import {IMAGES} from '../../constants/resources';

class Item {
	constructor(
		img = '',
		name = '',
		serviceType = '',
		managementType = '',
		startingPrice = '10%',
		isCompare = false,
	) {
		this.img = img;
		this.name = name;
		this.serviceType = serviceType;
		this.managementType = managementType;
		this.startingPrice = startingPrice;
		this.isCompare = isCompare;
	}
}

export const mockResult = [
	new Item(
		IMAGES.ITEM_IMG,
		'Management Company #1',
		'Full service',
		'VRBO',
	),
	new Item(
		IMAGES.ITEM_IMG_2,
		'Management Company #2',
		'Full service',
		'VRBO',
		'$60',
		true
	),
	new Item(
		IMAGES.ITEM_IMG_3,
		'Management Company #3',
		'Full service',
		'VRBO',
		'$60',
	),
	new Item(
		IMAGES.ITEM_IMG,
		'Management Company #4',
		'Full service',
		'VRBO',
	),
	new Item(
		IMAGES.ITEM_IMG_2,
		'Management Company #5',
		'Full service',
		'VRBO',
		'$60',
	),
	new Item(
		IMAGES.ITEM_IMG_3,
		'Management Company #6',
		'Full service',
		'VRBO',
		'$60',
	),
	new Item(
		IMAGES.ITEM_IMG,
		'Management Company #7',
		'Full service',
		'VRBO',
	),
	new Item(
		IMAGES.ITEM_IMG_3,
		'Management Company #8',
		'Full service',
		'VRBO',
		'$60',
	),
	new Item(
		IMAGES.ITEM_IMG_2,
		'Management Company #9',
		'Full service',
		'VRBO',
		'$60',
	),
	new Item(
		IMAGES.ITEM_IMG,
		'Management Company #10',
		'Full service',
		'VRBO',
	),
	new Item(
		IMAGES.ITEM_IMG_3,
		'Management Company #11',
		'Full service',
		'VRBO',
		'$60',
	),
	new Item(
		IMAGES.ITEM_IMG_2,
		'Management Company #12',
		'Full service',
		'VRBO',
		'$60',
	),
];


