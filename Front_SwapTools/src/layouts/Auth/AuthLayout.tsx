import RegistrationPage from "../../pages/auth/cadastro/RegistrationPage";
import HomePage from "../../pages/home/Home";

export const AuthLayout = () => {
  if(window.location.pathname === '/cadastro') {
    return (
      <RegistrationPage />
    )
  }

  if(window.location.pathname === '/') {
    return (
      <HomePage />
    )
  }

  // Default
  return (
    <HomePage />
  );
};
