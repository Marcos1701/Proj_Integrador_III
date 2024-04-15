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
