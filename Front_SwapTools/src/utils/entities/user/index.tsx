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

export interface Photo {
	// Identificador único da foto.
	id: string;
	// ID do usuário que carregou a foto.
	user_id: string;
	// URL ou caminho da foto.
	url: string;
	// Data e hora de criação da foto.
	createdAt: string;
	// Data e hora da última atualização da foto.
	updatedAt: string;
}

export interface User {
	// Identificador único do usuário.
	id: string;
	// Nome completo do usuário.
	name: string;
	// Endereço de email do usuário.
	email: string;
	// Senha do usuário criptografada.
	passwordHash: string;
	// Número de telefone do usuário (opcional).
	phone: string;
	// Data e hora de criação do usuário.
	createdAt: string;
	// Data e hora da última atualização do usuário.
	updatedAt: string;
	// Foto de perfil do usuário.
	photo: Photo;
	// Endereço do usuário.
	address: Address;
}

// Path: Front_SwapTools/src/Components/entities/user/index.tsx
