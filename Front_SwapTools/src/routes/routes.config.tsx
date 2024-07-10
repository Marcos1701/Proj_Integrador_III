import { BrowserRouter, Navigate, Route, Routes, useNavigation } from "react-router-dom";
import RegistrationPage from "../pages/auth/cadastro/RegistrationPage";
import HomePage from "../pages/home/Home";
import { AuthProvider } from "../hooks/useAuth/provider";

/**
 * Renders the main application routes.
 *
 * This function checks if the current path is valid. If not, it redirects to the root path.
 *
 * @return {JSX.Element} The JSX element representing the main application routes.
 */
export function RoutesApp(): JSX.Element {
  const navigation = useNavigation();
  const currentPath = navigation.location?.pathname;

  const validPaths = ["/cadastro", "/"];

  if (currentPath === undefined ||!validPaths.includes(currentPath)) {
    return <Navigate to="/" replace state={{ from: currentPath }} />;
  }

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cadastro" element={<RegistrationPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
