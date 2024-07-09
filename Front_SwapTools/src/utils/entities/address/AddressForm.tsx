import axios from "axios";
import { useEffect, useState } from "react";
import { InferType, object, string, ValidationError } from "yup";

export interface InsertAddressProps {
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
}

export const InsertAddressSchema = object().shape({
	street: string()
		.required("A rua é obrigatória.")
		.min(3, "A rua deve ter pelo menos 3 caracteres."),
	number: string()
		.required("O número é obrigatório.")
		.min(1, "O número deve ter pelo menos 1 dígito.")
		.max(5, "O número deve ter no máximo 5 dígitos.")
		.matches(/^[0-9]{1,5}$/g), // valida o número da rua
	complement: string(),
	city: string()
		.required("A cidade é obrigatória.")
		.min(3, "A cidade deve ter pelo menos 3 caracteres."),
	state: string()
		.required("O estado é obrigatório.")
		.min(2, "O estado deve ter pelo menos 2 caracteres."),
	country: string()
		.required("O país é obrigatório.")
		.min(3, "O país deve ter pelo menos 3 caracteres."),
	zipCode: string()
		.required("O CEP é obrigatório.")
		.min(8, "Insira um CEP válido")
		.max(8, "Insira um CEP válido")
		.matches(/^[0-9]{8}$/g), // valida o CEP
});

export type InsertAddressType = InferType<typeof InsertAddressSchema>;

interface InputError {
	input: HTMLInputElement;
	message: string;
}

// componente para renderizar o formulário de endereço
export const AddressForm = () => {
	// useState para armazenar os dados do formulário
	const [Data, setData] = useState<InsertAddressType>({
		street: "",
		number: "",
		complement: "",
		city: "",
		state: "",
		country: "",
		zipCode: "",
	});

	// useState para armazenar o estado de validação do formulário
	const [IsValid, setIsValid] = useState(false);

		// useState para armazenar os erros de validação do formulário
	const [Errors, setErrors] = useState<InputError[]>([]);

	// completar o endereço ao inserir o CEP
	const [Cep, setCep] = useState("");
	useEffect(() => {
		async () => {
			if (Cep.length === 8) {
				const response = await axios.get(`https://viacep.com.br/ws/${Cep}/json/`);
				if (response.data.erro) {
					return;
				}
				setData({
					...Data,
					street: response.data.logradouro,
					city: response.data.localidade,
					state: response.data.uf,
					country: response.data.pais,
				});
			}
		};
	}, [Cep, Data]);


	// função para exibir os erros de validação do formulário
	const displayErrors = (errors: ValidationError[]): void => {
		if (errors.length === 0) return;
		// limpa os erros de validação do formulário
		for (const error of Errors) {
			error.input.setCustomValidity(""); // remove a mensagem de erro do campo
		}
		// limpa os erros de validação do formulário
		setErrors([]);

		const reportedErrors: InputError[] = [];

		for (const error of errors) {
			const input = document.querySelector(
				`#${error.path}.input`,
			) as HTMLInputElement;
			reportedErrors.push({
				input,
				message: error.message,
			});
		}
		// limpa os erros de validação do formulário

		setErrors(reportedErrors);

		for (const error of Errors) {
			error.input.setCustomValidity(error.message); // informa ao navegador que o campo está inválido
			error.input.reportValidity(); // informa ao navegador que o campo está inválido
		}
		setIsValid(false); // informa que o formulário não está válido
		return;
	};

	async function ValidateForm(): Promise<void> {
		// valida o formulário
		await InsertAddressSchema.validate(Data, { abortEarly: false })
			.then(
				async () => setIsValid(true), // informa que o formulário está válido e pode ser enviado para a API
			)
			.catch((errors: ValidationError[]) => {
				displayErrors(errors);
			});
		return;
	}


	// função para salvar o endereço na API
	async function saveAddress(): Promise<void> {
		// verifica se o formulário está válido
		await ValidateForm();
		// se o formulário estiver válido, salva o endereço na API
		if (!IsValid) return;

		// salva o endereço na API)

		// realiza as verificações básicas e realiza a chamada à API.
	}


	return (
		<form
			onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
				// recebe os dados do formulário
				e.preventDefault();

				try {
					await saveAddress();
				} catch (error) {
					if (error instanceof Error) console.log(error.message);
					return;
				}
			}}
		>
			<div>
				<h1>Endereço</h1>
			</div>

			<div>
				<label htmlFor="street">Rua</label>
				<input
					type="text"
					id="street"
					name="street"
					placeholder="Rua"
					onChange={(e) => setData({ ...Data, street: e.target.value })}
					value={Data.street}
				/>
			</div>

			<div>
				<label htmlFor="number">Número</label>
				<input
					type="text"
					id="number"
					name="number"
					placeholder="Número"
					onChange={(e) => setData({ ...Data, number: e.target.value })}
					value={Data.number}
				/>
			</div>

			<div>
				<label htmlFor="complement">Complemento</label>
				<input
					type="text"
					id="complement"
					name="complement"
					placeholder="Complemento"
					onChange={(e) => setData({ ...Data, complement: e.target.value })}
					disabled={!Data.street || !Data.number} // desabilita o campo se a rua ou o número não estiverem preenchidos
					value={Data.complement}
				/>
			</div>

			<div>
				<label htmlFor="city">Cidade</label>
				<input
					type="text"
					id="city"
					name="city"
					placeholder="Cidade"
					onChange={(e) => setData({ ...Data, city: e.target.value })}
					value={Data.city}
				/>
			</div>

			<div>
				<label htmlFor="state">Estado</label>
				<input
					type="text"
					id="state"
					name="state"
					placeholder="Estado"
					onChange={(e) => setData({ ...Data, state: e.target.value })}
					value={Data.state}
				/>
			</div>

			<div>
				<label htmlFor="country">País</label>
				<input
					type="text"
					id="country"
					name="country"
					placeholder="País"
					onChange={(e) => setData({ ...Data, country: e.target.value })}
					value={Data.country}
				/>
			</div>

			<div>
				<label htmlFor="zipCode">CEP</label>
				<input
					type="text"
					id="zipCode"
					name="zipCode"
					placeholder="CEP"
					onChange={(e) => {
						setData({ ...Data, zipCode: e.target.value });
						setCep(e.target.value);
					}}
					disabled={Data.street && Data.number ? true : false} // desabilita o campo se a rua ou o número estiverem preenchidos
					value={Data.zipCode}
				/>
			</div>

			<div>
				<button type="submit">Salvar</button>
			</div>
		</form>
	);
};
