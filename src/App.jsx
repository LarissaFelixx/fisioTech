import { Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";

import CadastroCliente from "./pages/cadastroCliente";
import Login from "./pages/login";
import Pacientes from "./pages/listagemClientes/Pacientes.jsx";
import CadastroProfissional from "./pages/cadastroProfissional";
import EditarProfissional from "./pages/editarProfissional";
import EvolucaoQueixaPrincipal from "./pages/evolucaoQueixaPrincipal";
import RespostaAoTratamento from "./pages/respostaAoTratamento";
import AjustePlanoTerapeutico from "./pages/ajustePlanoTerapeutico";
import AdesaoExercicios from "./pages/adesaoExercicios";
import Home from "./pages/home/home.jsx";
import QuadroClinico from "./pages/quadroClinico/QuadroClinico.jsx";
import HabitosVida from "./pages/habitosdeVida/HabitosVida.jsx";
import ExameFisico from "./pages/exameFisico/ExameFisico.jsx";
import "./App.css";
import PerfilPaciente from "./pages/perfilPaciente";
import DiagnosticoFisioterapeutico from "./pages/diagnosticoFisioterapeutico";

function App() {
  const [isLogged, setIsLogged] = useState(true);

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
        path="/ajuste-plano-terapeutico"
        element={<AjustePlanoTerapeutico />}
      />
      <Route path="/adesao-exercicios" element={<AdesaoExercicios />} />

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

      <Route path="/perfil-paciente" element={<PerfilPaciente />} />
      <Route
        path="/diagnostico-fisioterapeutico"
        element={<DiagnosticoFisioterapeutico />}
      />

      <Route path="*" element={<Navigate to="/login" replace />} />
        <Route path="/habitos-vida" element={<HabitosVida />}/>

        <Route
            path="/exame-fisico"
            element={<ExameFisico />}
        />

        <Route path="*" element={<Navigate to="/login" replace />}

        />
    </Routes>
  );
}

export default App;
