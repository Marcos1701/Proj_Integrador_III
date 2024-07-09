// import { array, object, string } from "yup";
import {z} from "zod";
import PhotoSchema, { Photo } from "../photo/PhotoDetails";
import ToolCategoryType, { ToolCategory } from "../category/tool/CategoryList";

enum ToolConditionTypes {
	NEW = "nova",
	LIKE_NEW = "semi-nova",
	GOOD = "boa",
	USED = "usada",
	REPAIRABLE = "precisa-de-reparos",
	FOR_PARTS = "para-pecas",
}

export interface ToolPhoto extends Photo {
	// ID da ferramenta à qual a foto pertence.
	toolId: string;
}

export interface Tool {
	// Identificador único da ferramenta.
	id: string;
	// ID do usuário que possui a ferramenta.
	userId: string;
	// Nome da ferramenta.
	name: string;
	// Descrição da ferramenta.
	description: string;
	// Data e hora de criação da ferramenta.
	createdAt: string;
	// Data e hora da última atualização da ferramenta.
	updatedAt: string;
	// Fotos da ferramenta.
	photos: ToolPhoto[];
	// Condição da ferramenta.
	condition: ToolConditionTypes;
	// Categorias associadas à ferramenta.
	categories: ToolCategory[];
	// Status da ferramenta (disponível, indisponível).
	status: string;
}

// const ToolPhotoSchema = PhotoSchema.shape({
	// toolId: string().required(),
// });

// const ToolSchema = object().shape({
	// id: string().required(),
	// userId: string().required(),
	// name: string().required(),
	// description: string().required(),
	// createdAt: string().required(),
	// updatedAt: string().required(),
	// photos: array().of(ToolPhotoSchema).required(),
	// condition: string().required(),
	// categories: array().of(ToolCategoryType).required(),
	// status: string()
		// .required()
		// .oneOf([
			// ToolConditionTypes.NEW,
			// ToolConditionTypes.LIKE_NEW,
			// ToolConditionTypes.GOOD,
			// ToolConditionTypes.USED,
			// ToolConditionTypes.REPAIRABLE,
			// ToolConditionTypes.FOR_PARTS,
		// ]),
// });

const ToolSchema = z.object({
	id: z.string(),
	userId: z.string(),
	name: z.string(),
	description: z.string(),
	createdAt: z.string(),
	updatedAt: z.string(),
	photos: z.array(PhotoSchema),
	condition: z.string(),
	categories: z.array(ToolCategoryType),
	status: z.enum([
		ToolConditionTypes.NEW,
		ToolConditionTypes.LIKE_NEW,
		ToolConditionTypes.GOOD,
		ToolConditionTypes.USED,
		ToolConditionTypes.REPAIRABLE,
		ToolConditionTypes.FOR_PARTS,
	], { message: "Status inválido" })
});

export default ToolSchema;
