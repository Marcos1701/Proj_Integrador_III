
import React from "react";

type InputFieldProps = {
  label: string;
  placeholder: string;
  type: string;
  showToggle?: boolean;
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  type,
  showToggle,
}) => {

  const [showPassword, setShowPassword] = React.useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  }

  return (
    <div>
      <label
        htmlFor={`input-${label}`}
        className="mt-5 block max-md:max-w-full"
      >
        {label}
      </label>
      {/* adicionar efeito de sombra ao passar o mouse em cima da div*/}
      <div className="flex gap-5 px-7 py-4 mt-2 text-sm bg-white rounded-md border border-solid border-zinc-800 text-neutral-400 max-md:flex-wrap max-md:px-5 max-md:max-w-full hover:shadow-md focus-within:shadow-md">
        <input
          type={
            type === "password" && showPassword ? "text" : type
          }
          id={`input-${label}`}
          placeholder={placeholder}
          // input deve preencher todo o espaço da div
          // o texto digitado deve ser destacado
          // o tamanho do texto deve ser 16px
          className="flex-auto bg-transparent outline-none placeholder-neutral-400 text-neutral-800 text-base"
        />
        {showToggle && (
          <button
            type="button"
            // botão deve ser do mesmo tamanho do input
            className="flex items-center justify-center bg-transparent border-none outline-none cursor-pointer"
            onClick={handleTogglePassword}
          >
            {/* Icone de olho */}
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee37ca083ce79e088b4fa8823ecb39d072b3c4ece6c11e4b6a3ec0869c17bf5e?apiKey=e659b181c3ec4be580186cc59fea34e1&"
            alt=""
            className="shrink-0 aspect-square w-[21px]"
          />
          </button>
        )}
      </div>
    </div>
  );
};

export default InputField;
