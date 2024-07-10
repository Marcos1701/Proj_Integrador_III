
import React, { useState } from "react";

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex gap-3 px-3 py-2 text-sm leading-5 bg-white rounded-lg border border-solid border-slate-200 text-slate-500"
    >
      <img
        loading="lazy"
        src="http://b.io/ext_75-"
        alt="Search icon"
        className="shrink-0 w-6 aspect-square"
      />
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Buscar por 'Furadeira'"
        className="my-auto bg-transparent outline-none"
      />
    </form>
  );
};

export default SearchBar;
