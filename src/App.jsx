import { Navigate, Route, Routes } from 'react-router-dom'
import CadastroCliente from './pages/cadastroCliente'
import Login from './pages/login'
import { useState } from "react";
import './App.css';
import Pacientes from "./pages/listagemClientes/Pacientes.jsx";
import CadastroProfissional from "./pages/cadastroProfissional";
import EditarProfissional from "./pages/editarProfissional";
import EvolucaoQueixaPrincipal from "./pages/evolucaoQueixaPrincipal";
import RespostaAoTratamento from "./pages/respostaAoTratamento";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  // 👉 Se estiver logado, mostra pacientes
  if (isLogged) {
    return <Pacientes />;
  }
  // 👉 Senão, mostra login (seu código original)
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login onLogin={() => setIsLogged(true)} />} />
      <Route path="/cadastro-clientes" element={<CadastroCliente />} />
      <Route path="/editar-profissionais" element={<EditarProfissional />} />
      <Route
        path="/cadastro-profissionais"
        element={<CadastroProfissional />}
      />
      <Route path="/evolucao-queixa" element={<EvolucaoQueixaPrincipal />} />
      <Route path="/resposta-tratamento" element={<RespostaAoTratamento />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;
