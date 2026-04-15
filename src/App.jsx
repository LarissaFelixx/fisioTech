import { Navigate, Route, Routes } from 'react-router-dom'
import CadastroCliente from './pages/cadastroCliente'
import Login from './pages/login'
import { useState } from "react";
import logo from './assets/logo.png';
import './App.css';
import Pacientes from "./pages/Pacientes";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    // Simulação de login
    setIsLogged(true);
  };

  // 👉 Se estiver logado, mostra pacientes
  if (isLogged) {
    return <Pacientes />;
  }

  // 👉 Senão, mostra login (seu código original)
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro-clientes" element={<CadastroCliente />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
      <main className="login-shell">
        <section className="login-card" aria-label="Tela de login">
          <div className="brand">
            <img src={logo} className="brand-logo" alt="WebFisio" />
          </div>

          <form className="login-form" onSubmit={handleLogin}>
            <label className="field">
              <span>E-mail</span>
              <input type="email" placeholder="Digite seu e-mail..." />
            </label>

            <label className="field">
              <span>Senha</span>
              <input type="password" placeholder="Digite sua senha..." />
            </label>

            <label className="remember">
              <input type="checkbox" />
              <span>Lembrar de mim</span>
            </label>

            <button type="submit" className="submit">
              Entrar
            </button>
          </form>
        </section>
      </main>
  );
}

export default App;