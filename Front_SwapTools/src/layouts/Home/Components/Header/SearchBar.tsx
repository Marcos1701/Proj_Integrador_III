import type React from "react";
import { useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";

const SearchBar: React.FC = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [isEditing, setIsEditing] = useState(false);
	const handleSearch = () => {
		console.log("Aiii zé da mangaaa!");
	};

	const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter") {
			handleSearch();
		}
	};

	const handleClear = () => {
		setSearchTerm("");
		setIsEditing(false);
	};

	return (
		<div className="flex flex-row gap-5 justify-start items-center py-2 pr-3 pl-5 mx-auto text-sm leading-3 text-center bg-white rounded-lg border border-solid border-slate-200 max-w-[500px] text-slate-500 w-[498.8px] max-md:pr-9 max-md:w-auto">
			<FiSearch className="my-auto text-slate-500 w-6 h-6" aria-hidden="true" />
			<input
				type="text"
				placeholder='Buscar por "Furadeira"'
				className="my-auto bg-transparent border-none outline-none w-full"
				aria-label="Buscar por Furadeira"
				autoComplete="off"
				spellCheck="false"
				data-gramm="false"
				data-gramm_editor="false"
				onKeyDown={handleKeyPress}
				onChange={(event) => setSearchTerm(event.target.value)}
				value={searchTerm}
				onFocus={() => setIsEditing(true)}
				onBlur={() => setIsEditing(false)}
			/>

			<button
				type="button"
				onClick={handleClear}
				className={`my-auto bg-transparent border-none outline-none ${!isEditing ? "hidden" : ""}`}
				aria-label="Limpar busca"
				title="Limpar busca"
			>
				<FiX className="my-auto text-slate-500 w-6 h-6" aria-hidden="true" />
			</button>
		</div>
	);
};

export default SearchBar;
