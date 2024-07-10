
import React from "react";

const SearchBar: React.FC = () => {
  return (
    <div className="flex flex-row gap-5 justify-start items-center py-2 pr-3 pl-5 mx-auto text-sm leading-3 text-center bg-white rounded-lg border border-solid border-slate-200 max-w-[500px] text-slate-500 w-[498.8px] max-md:pr-9 max-md:w-auto">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7634862987388f26127a9c8274455b35c01e1eb80d1db35ed57e810aec22103b?apiKey=e659b181c3ec4be580186cc59fea34e1&"
        alt=""
        className="shrink-0 w-6 aspect-square"
      />
      <input
        type="text"
        placeholder='Buscar por "Furadeira"'
        className="my-auto bg-transparent border-none outline-none"
        aria-label="Buscar por Furadeira"
      />
    </div>
  );
};

export default SearchBar;
