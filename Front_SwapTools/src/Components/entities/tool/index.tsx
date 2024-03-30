import { Photo } from "../user";

export interface ToolCategory {
	id: string;
	toolId: string;
	categoryId: string;
	createdAt: string;
	updatedAt: string;
}

export interface ToolPhoto extends Photo {
	toolId: string;
}

enum ToolConditionTypes {
	NEW = "nova",
	LIKE_NEW = "semi-nova",
	GOOD = "boa",
	USED = "usada",
	REPAIRABLE = "precisa-de-reparos",
	FOR_PARTS = "para-pecas",
}

export interface Tool {
	id: string;
	userId: string;
	name: string;
	description: string;
	createdAt: string;
	updatedAt: string;
	photos: ToolPhoto[]; // a ferramenta pode ter várias fotos
	condition: ToolConditionTypes; // trata-se da condição da ferramenta.
	categories: ToolCategory[]; // a ferramenta pode ter várias categorias
	status: string; // status da ferramenta => "available", "unavailable"
}

export interface Swap {
	id: string;
	tradingUsersId: string;
	status: string; // status da troca => "pending", "accepted", "rejected"
	createdAt: string;
	updatedAt: string;
}

export interface TradingUsers {
	id: string;
	userTargetId: string;
	userOfferId: string;
	swapId: string;
}

export interface TargetTool {
	id: string;
	swapId: string;
	toolId: string;
}

export interface OfferTool {
	id: string;
	swapId: string;
	toolId: string;
}
