import {IMAGES} from '../../constants/resources';

class Item {
	constructor(
		img = '',
		name = '',
		serviceType = '',
		managementType = '',
		startingPrice = '10%',
		turnKey = false,
		flatFee = false,
		aLaCarteServices = false,
		rentCollection = false,
		taxesAndStatements = false,
		yearAndStatement = false,
		maintenance = false,
		inspections = false,
		response = false,
		screeningTenants = false,
		vacancyMarketing = false,
		eviction = false,
		tenantShowings = false,
		leasingFee = 100,
		leaseRenewals = false,
		listingsOnline = false,
		marketAnalysis = false,
	) {
		this.img = img;
		this.name = name;
		this.serviceType = serviceType;
		this.managementType = managementType;
		this.startingPrice = startingPrice;
		this.isCompare = false;
		this.isBest = false;
		this.turnKey = turnKey;
		this.flatFee = flatFee;
		this.aLaCarteServices = aLaCarteServices;
		this.rentCollection = rentCollection;
		this.taxesAndStatements = taxesAndStatements;
		this.yearAndStatement = yearAndStatement;
		this.maintenance = maintenance;
		this.inspections = inspections;
		this.response = response;
		this.screeningTenants = screeningTenants;
		this.vacancyMarketing = vacancyMarketing;
		this.eviction = eviction;
		this.tenantShowings = tenantShowings;
		this.leasingFee = leasingFee;
		this.leaseRenewals = leaseRenewals;
		this.listingsOnline = listingsOnline;
		this.marketAnalysis = marketAnalysis;
	}
}

export const mockResult = [
	new Item(
		IMAGES.ITEM_IMG,
		'Austin Landmark Prop Ser',
		'Full service',
		'MPM®',
		'$60',
		true,
		false,
		true,
		false,
		false,
		true,
		false,
		true,
		false,
		false,
		false,
		true,
		false,
		160,
		true,
		false,
		true,
	),
	new Item(
		IMAGES.ITEM_IMG_2,
		'Meer & Company, Inc.',
		'One service',
		'RMP®',
		'$60',
		false,
		false,
		true,
		true,
		true,
		true,
		false,
		true,
		false,
		false,
		false,
		true,
		false,
		180,
		true,
		false,
		false,
	),
	new Item(
		IMAGES.ITEM_IMG_3,
		'Assured Management, Inc.',
		'Full service',
		'PRO',
		'$60',
		true,
		false,
		false,
		false,
		false,
		false,
		true,
		true,
		false,
		false,
		true,
		true,
		false,
		180,
		true,
		false,
		false,
	),
	new Item(
		IMAGES.ITEM_IMG,
		'Gulf Coast Realty & Management',
		'One service',
		'CRMC®',
		'$60',
		false,
		true,
		false,
		false,
		false,
		false,
		true,
		false,
		false,
		false,
		true,
		true,
		false,
		190,
		false,
		true,
		true,
	),
	new Item(
		IMAGES.ITEM_IMG_2,
		'Pickett Property Management',
		'Full service',
		'CRMC®',
		'$60',
		true,
		false,
		true,
		true,
		false,
		true,
		true,
		true,
		false,
		false,
		false,
		true,
		false,
		130,
		true,
		false,
		false,
	),
	new Item(
		IMAGES.ITEM_IMG_3,
		'Around The Clock, Inc.',
		'Part service',
		'MPM®',
		'$60',
		true,
		false,
		true,
		true,
		false,
		true,
		false,
		true,
		true,
		false,
		false,
		true,
		false,
		150,
		true,
		false,
		true,
	),
	new Item(
		IMAGES.ITEM_IMG,
		'PRANDI Property Management',
		'Part service',
		'VRBO',
		true,
		false,
		true,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		true,
		false,
		false,
		160,
		false,
		false,
		true,
	),
	new Item(
		IMAGES.ITEM_IMG_3,
		'Rollingwood Management, Inc.',
		'Full service',
		'VRBO',
		'$60',
		true,
		true,
		true,
		false,
		false,
		true,
		false,
		false,
		false,
		false,
		false,
		true,
		true,
		160,
		true,
		true,
		true,
	),
	new Item(
		IMAGES.ITEM_IMG_2,
		'Aapex Property Management',
		'One service',
		'RMP®',
		'$60',
		true,
		true,
		true,
		true,
		false,
		true,
		false,
		false,
		false,
		false,
		false,
		true,
		false,
		110,
		true,
		false,
		true,
	),
	new Item(
		IMAGES.ITEM_IMG,
		'PineCone Properties, Inc.',
		'Full service',
		'VRBO',
		false,
		false,
		false,
		true,
		true,
		true,
		false,
		true,
		false,
		false,
		true,
		true,
		false,
		false,
		145,
		false,
		false,
		true,
	),
	new Item(
		IMAGES.ITEM_IMG_3,
		'Professional Property Services',
		'Full service',
		'RMP®',
		'$60',
		true,
		false,
		true,
		false,
		false,
		true,
		false,
		true,
		false,
		true,
		true,
		true,
		false,
		168,
		true,
		true,
		true,
	),
	new Item(
		IMAGES.ITEM_IMG_2,
		'Allegiant Management Group',
		'Part service',
		'PRO',
		'$60',
		true,
		false,
		true,
		false,
		false,
		true,
		false,
		true,
		true,
		true,
		false,
		true,
		false,
		160,
		true,
		true,
		true,
	),
];


