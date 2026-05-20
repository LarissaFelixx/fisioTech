import { Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";

import CadastroCliente from "./pages/cadastroCliente";
import Login from "./pages/login";
import Pacientes from "./pages/listagemClientes/Pacientes.jsx";
import CadastroProfissional from "./pages/cadastroProfissional";
import EditarProfissional from "./pages/editarProfissional";
import EvolucaoQueixaPrincipal from "./pages/evolucaoQueixaPrincipal";
import RespostaAoTratamento from "./pages/respostaAoTratamento";
import Home from "./pages/home/Home.jsx";
import QuadroClinico from "./pages/quadroClinico/QuadroClinico.jsx";

import "./App.css";

function App() {
  const [isLogged, setIsLogged] = useState(false);

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

      <Route
        path="/login"
        element={
          isLogged ? (
            <Navigate to="/home" replace />
          ) : (
            <Login onLogin={() => setIsLogged(true)} />
          )
        }
      />

      <Route
        path="/home"
        element={isLogged ? <Home /> : <Navigate to="/login" replace />}
      />

      <Route
        path="/pacientes"
        element={isLogged ? <Pacientes /> : <Navigate to="/login" replace />}
      />

      <Route
        path="/cadastro-clientes"
        element={
          isLogged ? <CadastroCliente /> : <Navigate to="/login" replace />
        }
      />

      <Route
        path="/quadro-clinico"
        element={
          isLogged ? <QuadroClinico /> : <Navigate to="/login" replace />
        }
      />

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;
