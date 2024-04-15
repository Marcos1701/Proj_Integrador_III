import { Photo } from "../user";

export interface ToolCategory {
	// Identificador único da categoria da ferramenta.
	id: string;
	// ID da ferramenta associada à categoria.
	toolId: string;
	// ID da categoria.
	categoryId: string;
	// Data e hora de criação da associação.
	createdAt: string;
	// Data e hora da última atualização da associação.
	updatedAt: string;
}

export interface ToolPhoto extends Photo {
	// ID da ferramenta à qual a foto pertence.
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

export interface Swap {
	// Identificador único da troca.
	id: string;
	// IDs dos usuários que estão trocando ferramentas.
	tradingUsersId: string;
	// Status da troca (pendente, aceito, rejeitado).
	status: string;
	// Data e hora de criação da troca.
	createdAt: string;
	// Data e hora da última atualização da troca.
	updatedAt: string;
}

export interface TradingUsers {
	// Identificador único da relação entre os usuários que estão trocando.
	id: string;
	// ID do usuário que está oferecendo a ferramenta.
	userTargetId: string;
	// ID do usuário que está recebendo a ferramenta.
	userOfferId: string;
	// ID da troca à qual a relação pertence.
	swapId: string;
}

export interface TargetTool {
	// Identificador único da ferramenta que está sendo oferecida.
	id: string;
	// ID da troca à qual a ferramenta pertence.
	swapId: string;
	// ID da ferramenta que está sendo oferecida.
	toolId: string;
}

export interface OfferTool {
	// Identificador único da ferramenta que está sendo desejada.
	id: string;
	// ID da troca à qual a ferramenta pertence.
	swapId: string;
	// ID da ferramenta que está sendo desejada.
	toolId: string;
}

// Front_SwapTools/src/Components/entities/tool/index.tsx