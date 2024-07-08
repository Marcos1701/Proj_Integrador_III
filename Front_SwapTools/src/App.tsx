
import './App.css'
import { AuthProvider } from './hooks/useAuth/provider'
import { AuthLayout } from './layouts/AuthLayout'

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
