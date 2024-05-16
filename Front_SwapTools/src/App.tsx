
import './App.css'
import { AuthProvider } from './Components/hooks/useAuth/provider'
import { AuthLayout } from './Components/layouts/AuthLayout'

function App() {


  return (
    <>
    <AuthProvider>
      <AuthLayout />
    </AuthProvider>
    </>
  )
}

export default App
