export interface GeoPoint {
	// Latitude da localização.
	latitude: number;
	// Longitude da localização.
	longitude: number;
}

export interface Address {
	// Identificador único do endereço.
	id: string;
	// ID do usuário associado ao endereço.
	userId: string;
	// Nome da rua.
	street: string;
	// Número da rua.
	number: string;
	// Complemento do endereço (opcional).
	complement: string;
	// Cidade.
	city: string;
	// Estado ou província.
	state: string;
	// País.
	country: string;
	// CEP.
	zipCode: string;
	// Data e hora de criação do endereço.
	createdAt: string;
	// Data e hora da última atualização do endereço.
	updatedAt: string;
	// Ponto geográfico associado ao endereço.
	geoPoint: GeoPoint;
}

// Endereço padrão do usuário.
export interface DefaultAddress {
	// ID do usuário.
	userId: string;
	// ID do endereço padrão.
	addressId: string;
}