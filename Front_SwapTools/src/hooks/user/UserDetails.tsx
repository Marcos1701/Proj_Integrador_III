
import { Address, AddressDetails, AddressSchema } from "../../utils/entities/address/AddressDetails";
import PhotoSchema, { Photo, PhotoDetails } from "../../utils/entities/photo/PhotoDetails";
//zod
import { z } from "zod";

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

// const UserSchema = object().shape({
// 	id: string().required(),
// 	name: string().required(),
// 	email: string().required(),
// 	passwordHash: string().required(),
// 	phone: string(),
// 	createdAt: string().required(),
// 	updatedAt: string().required(),
// 	photo: PhotoSchema.required(),
// 	address: AddressSchema.required(),
// });

const UserSchema = z.object({
	id: z.string(),
	name: z.string(),
	email: z.string(),
	passwordHash: z.string(),
	phone: z.string(),
	createdAt: z.string(),
	updatedAt: z.string(),
	photo: PhotoSchema,
	address: AddressSchema,
});

export default UserSchema;

export const UserDetails = (user: User) => {
	return (
		<div>
			<h1>{user.name}</h1>
			<p>{user.email}</p>
			<p>{user.phone}</p>
			<p>{user.createdAt}</p>
			<p>{user.updatedAt}</p>
			<PhotoDetails photo={user.photo} />
			<AddressDetails address={user.address} />
		</div>
	);
};