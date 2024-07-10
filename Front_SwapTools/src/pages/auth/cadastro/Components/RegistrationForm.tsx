
import React from "react";
import InputField from "./InputField";
import { useAuth } from "../../../../hooks/useAuth";

const RegistrationForm: React.FC = () => {

  const auth = useAuth();

  const signInWithGoogle = async () => {
    try {
      await auth.signInWithGoogle();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form className="flex relative flex-col grow px-9 pt-8 pb-3 w-full max-w-[500px] text-sm text-black bg-white rounded-xl border border-solid shadow-2xl border-zinc-500 max-md:max-w-full max-md:px-5 max-md:py-5">
      <h1 className="text-2xl max-md:max-w-full font-Poppins tracking-wide max-md:text-xl max-md:mt-0 max-md:mb-5 font-light">Seja Bem Vindo!</h1>
      <h2 className="mt-3 text-3xl font-medium max-md:max-w-full font-Poppins">
        Cadastre-se
      </h2>

      <InputField label="Email" placeholder="Insira seu Email" type="email" />
      <InputField
        label="Nome"
        placeholder="Insira seu email"
        type="text"
      />
      <InputField
        label="Senha"
        placeholder="Insira sua Senha"
        type="password"
        showToggle
      />
      <InputField
        label="Confirme a senha"
        placeholder="Confirme a senha"
        type="password"
        showToggle
      />

      <button className="justify-center items-center py-5 mt-7 font-medium text-white whitespace-nowrap bg-black rounded-md">
        Cadastre - se
      </button>

      <p className="self-center mt-5 font-medium text-stone-600">
        ou continue com
      </p>

      <button className="flex gap-2 px-20 py-3 mt-4 mr-7 ml-8 text-xs rounded-2xl border border-violet-100 border-solid text-zinc-900 max-md:px-5 max-md:mx-2.5" onClick={signInWithGoogle}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d048ed030aae05ce9867f894c6f84a2f1cd9d5cebc756872fedd0827b4b28c28?apiKey=e659b181c3ec4be580186cc59fea34e1&"
          alt=""
          className="shrink-0 aspect-square w-[30px]"
        />
        <span className="flex-auto my-auto">
          Continuar com o G<strong>oogle</strong>
        </span>
      </button>

      <div className="self-center mt-5">
        <span className="text-zinc-500">Já possui uma conta?</span>
        <span className="font-semibold"> Realize o login</span>
      </div>
    </form>
  );
};

export default RegistrationForm;
