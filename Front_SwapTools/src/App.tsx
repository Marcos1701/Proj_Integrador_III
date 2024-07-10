// import './App.css'
import { AuthProvider } from './hooks/useAuth/provider'
import { RoutesApp } from "./routes/routes.config";

function App() {


  return (
      <AuthProvider>
        <RoutesApp />
      </AuthProvider>
  )
}

export default App
