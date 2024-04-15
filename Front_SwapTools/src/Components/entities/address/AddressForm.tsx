// import { Address } from "./AddressDetails";

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

async function saveAddress(address: InsertAddressProps): Promise<void> {
	// realiza as verificações básicas e realiza a chamada à API.
}

export const AddressForm = () => {
	return (
		<form
			onSubmit={async (e: React.FormEvent<HTMLFormElement>) => {
				// recebe os dados do formulário
				e.preventDefault();
				const form: HTMLFormElement = e.target as HTMLFormElement;
				const data: FormData = new FormData(form); // pega os dados do formulário
				const address: InsertAddressProps = {
					street: data.get("street") as string,
					number: data.get("number") as string,
					complement: data.get("complement") as string,
					city: data.get("city") as string,
					state: data.get("state") as string,
					country: data.get("country") as string,
					zipCode: data.get("zipCode") as string,
				};
				await saveAddress(address);
			}}
		>
			<div>
				<h1>Endereço</h1>
			</div>

			<div>
				<label htmlFor="street">Rua</label>
				<input type="text" id="street" name="street" placeholder="Rua" />
			</div>

			<div>
				<label htmlFor="number">Número</label>
				<input type="text" id="number" name="number" placeholder="Número" />
			</div>

			<div>
				<label htmlFor="complement">Complemento</label>
				<input
					type="text"
					id="complement"
					name="complement"
					placeholder="Complemento"
				/>
			</div>

			<div>
				<label htmlFor="city">Cidade</label>
				<input type="text" id="city" name="city" placeholder="Cidade" />
			</div>

			<div>
				<label htmlFor="state">Estado</label>
				<input type="text" id="state" name="state" placeholder="Estado" />
			</div>

			<div>
				<label htmlFor="country">País</label>
				<input type="text" id="country" name="country" placeholder="País" />
			</div>

			<div>
				<label htmlFor="zipCode">CEP</label>
				<input type="text" id="zipCode" name="zipCode" placeholder="CEP" />
			</div>

			<div>
				<button type="submit">Salvar</button>
			</div>
		</form>
	);
};
