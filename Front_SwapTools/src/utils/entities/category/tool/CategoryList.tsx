// import { object, string } from "yup";
import {z} from "zod";
import { Tool } from "../../tool/ToolDetais";

export interface ToolCategory {
	id: string;
	name: string;
	description: string;
	image: string;
	tools: Tool[];
}

// const ToolCategoryType = object().shape({
	// id: string().required(),
	// name: string().required(),
	// description: string().required(),
// 	// image: string().required(),
// });

const ToolCategoryType = z.object({
	id: z.string(),
	name: z.string(),
	description: z.string(),
	image: z.string(),
});

export default ToolCategoryType;
