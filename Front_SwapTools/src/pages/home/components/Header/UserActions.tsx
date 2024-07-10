
import React from "react";

const UserActions: React.FC = () => {
  const handleLogin = () => {
    console.log("Login clicked");
  };

  const handleSignUp = () => {
    console.log("Sign up clicked");
  };

  return (
    <div className="flex gap-5 justify-between font-semibold">
      <button
        onClick={handleLogin}
        className="justify-center px-14 py-3 text-lg leading-5 whitespace-nowrap border border-teal-100 border-solid rounded-[500px] text-neutral-900 max-md:px-5"
      >
        Entrar
      </button>
      <button
        onClick={handleSignUp}
        className="justify-center items-start self-start px-6 py-2.5 text-base leading-5 text-white bg-yellow-500 border border-orange-500 border-solid rounded-[500px]"
      >
        Crie sua conta
      </button>
    </div>
  );
};

export default UserActions;
