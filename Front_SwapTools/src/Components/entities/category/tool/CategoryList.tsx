import { object, string } from "yup";
import { Tool } from "../../tool/ToolDetais";

export interface ToolCategory {
	id: string;
	name: string;
	description: string;
	image: string;
	tools: Tool[];
}

const ToolCategoryType = object().shape({
	id: string().required(),
	name: string().required(),
	description: string().required(),
	image: string().required(),
});

export default ToolCategoryType;
