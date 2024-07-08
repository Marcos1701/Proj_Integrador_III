// import { object, ObjectSchema, string } from "yup";
import {z} from "zod";

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

// const PhotoSchema: ObjectSchema<Photo> = object({
	// id: string().required(),
	// user_id: string().required(),
	// url: string().required(),
	// createdAt: string().required(),
	// updatedAt: string().required(),
// });

const PhotoSchema = z.object({
	id: z.string(),
	user_id: z.string(),
	url: z.string(),
	createdAt: z.string(),
	updatedAt: z.string(),
});

export default PhotoSchema;

export const PhotoDetails = ({ photo }: { photo: Photo }) => {
	return (
		<div>
			<h1>Detalhes da foto</h1>
			<p>ID: {photo.id}</p>
			<p>ID do usuário: {photo.user_id}</p>
			<p>URL: {photo.url}</p>
			<p>Data de criação: {photo.createdAt}</p>
			<p>Data de atualização: {photo.updatedAt}</p>
		</div>
	);
};
