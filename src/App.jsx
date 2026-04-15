import { Navigate, Route, Routes } from 'react-router-dom'
import CadastroCliente from './pages/cadastroCliente'
import Login from './pages/login'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro-clientes" element={<CadastroCliente />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}

export default App
