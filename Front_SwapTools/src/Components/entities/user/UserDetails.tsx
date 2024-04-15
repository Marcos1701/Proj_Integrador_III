import { Address } from "../address/AddressDetails";
import { Photo } from "../photo/PhotoDetails";

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
