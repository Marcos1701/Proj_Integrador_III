import { object, string } from "yup";

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

const SwapType = object({
	id: string().required(),
	tradingUsersId: string().required(),
	status: string().required(),
	createdAt: string().required(),
	updatedAt: string().required(),
});

const TradingUsersType = object({
	id: string().required(),
	userTargetId: string().required(),
	userOfferId: string().required(),
	swapId: string().required(),
});

const TargetToolType = object({
	id: string().required(),
	swapId: string().required(),
	toolId: string().required(),
});

const OfferToolType = object({
	id: string().required(),
	swapId: string().required(),
	toolId: string().required(),
});

export default {
	SwapType,
	TradingUsersType,
	TargetToolType,
	OfferToolType,
};

export const SwapSchema = SwapType.shape({
	tradingUsersId: TradingUsersType.shape({
		userTargetId: string().required(),
		userOfferId: string().required(),
	}),
	targetTool: TargetToolType.shape({
		toolId: string().required(),
	}),
	offerTool: OfferToolType.shape({
		toolId: string().required(),
	}),
});

export const TradingUsersSchema = TradingUsersType.shape({
	userTargetId: string().required(),
	userOfferId: string().required(),
	swapId: string().required(),
});

export const TargetToolSchema = TargetToolType.shape({
	toolId: string().required(),
});

export const OfferToolSchema = OfferToolType.shape({
	toolId: string().required(),
});

export const SwapDetails = (swap: Swap) => {
	return (
		<div>
			<h1>Detalhes da troca</h1>
			<p>ID: {swap.id}</p>
			<p>Usuários envolvidos: {swap.tradingUsersId}</p>
			<p>Status: {swap.status}</p>
			<p>Data de criação: {swap.createdAt}</p>
			<p>Data de atualização: {swap.updatedAt}</p>
		</div>
	);
};
SwapDetails.propTypes = {
	swap: SwapSchema.required(),
}; // PropTypes.shape(SwapSchema).isRequired
SwapDetails.defaultProps = {
	swap: {
		id: "",
		tradingUsersId: "",
		status: "",
		createdAt: "",
		updatedAt: "",
	},
};
