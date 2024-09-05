import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import RegistrationPage from "../pages/auth/cadastro/RegistrationPage";
import HomePage from "../pages/home/Home";
import { AuthProvider } from "../hooks/useAuth/provider";
import  LoginPage  from "../pages/auth/login/LoginPage";

/**
 * Renders the main application routes.
 *
 * This function checks if the current path is valid. If not, it redirects to the root path.
 *
 * @return {JSX.Element} The JSX element representing the main application routes.
 */
export function RoutesApp(): JSX.Element {
  const currentPath = window.location.pathname;

  const validPaths = ["/cadastro", "/", "/login"];

  if (currentPath === undefined ||!validPaths.includes(currentPath)) {
    console.log(currentPath);
    return <Navigate to="/" replace state={{ from: currentPath }} />;
  }

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cadastro" element={<RegistrationPage />} />
          <Route path="/login" element={<LoginPage/>}/>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
