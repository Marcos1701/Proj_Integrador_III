export interface GeoPoint {
	latitude: number;
	longitude: number;
}

export interface Address {
	id: string;
	userId: string;
	street: string;
	number: string;
	complement: string;
	city: string;
	state: string;
	country: string;
	zipCode: string;
	createdAt: string;
	updatedAt: string;
	geoPoint: GeoPoint;
}

export interface Photo {
	id: string;
	user_id: string;
	url: string;
	createdAt: string;
	updatedAt: string;
}

export interface User {
	id: string;
	name: string;
	email: string;
	passwordHash: string;
	phone: string;
	createdAt: string;
	updatedAt: string;
	photo: Photo;
	address: Address;
}

// Path: Front_SwapTools/src/Components/entities/user/index.tsx
