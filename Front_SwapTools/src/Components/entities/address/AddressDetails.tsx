import axios, { AxiosResponse } from "axios";
import { object, string, number, date, InferType } from "yup";

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

export const AddressSchema = object().shape({
	id: string().required(),
	userId: string().required(),
	street: string().required(),
	number: string().required(),
	complement: string(),
	city: string().required(),
	state: string().required(),
	country: string().required(),
	zipCode: string().required(),
	createdAt: string().required(),
	updatedAt: string().required(),
	geoPoint: object()
		.shape({
			latitude: number().required(),
			longitude: number().required(),
		})
		.required(),
}); // serve para validar os dados de um endereço

export type AddressType = InferType<typeof AddressSchema>; // serve para inferir o tipo de um endereço

export const DefaultAddressSchema = object().shape({
	userId: string().required(),
	addressId: string().required(),
}); // serve para validar os dados de um endereço padrão

export type DefaultAddressType = InferType<typeof DefaultAddressSchema>; // serve para inferir o tipo de um endereço padrão

async function fetchAddress(addressId: string): Promise<AddressType> {
	try {
		// Busca o endereço no banco de dados.

		const response: AxiosResponse<AddressType> = await axios.get<AddressType>(
			`/addresses/${addressId}`,
		);

		if (response.status !== 200) {
			throw new Error("Failed to fetch address");
		}
		return response.data;
	} catch (error) {
		if (error instanceof Error) {
			throw new Error(
				`Failed to fetch address details: ${error.message}` || "Unknown error",
			);
		}
		throw error;
	}
}

async function getAddressDetails(addressId: string): Promise<AddressType> {
	// Busca o endereço no banco de dados.
	const address: AddressType = await fetchAddress(addressId);
	// Valida os dados do endereço.
	await AddressSchema.validate(address);
	// Retorna os dados do endereço.
	return address;
}

export const AddressDetails = ({ address }: { address: AddressType }) => {
	return (
		<div>
			<h1>{address.street}</h1>
			<p>{address.number}</p>
			<p>{address.complement}</p>
			<p>{address.city}</p>
			<p>{address.state}</p>
			<p>{address.country}</p>
			<p>{address.zipCode}</p>
			<p>{address.updatedAt}</p>
		</div>
	);
};
