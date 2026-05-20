import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import homeFisio from "../../assets/home-fisio.png";
import "./styles/home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="home-shell">
      <aside className="home-sidebar">
        <div className="home-brand">
          <img src={logo} alt="WebFisio" />
          <span>WebFisio</span>
        </div>

        <nav className="home-nav" aria-label="Navegação principal">
          <button type="button" onClick={() => navigate("/cadastro-clientes")}>
            <span className="home-nav-icon">▣</span>
            Cadastrar
          </button>

          <button type="button" onClick={() => navigate("/pacientes")}>
            <span className="home-nav-icon">👥</span>
            Pacientes
          </button>

          <button type="button">
            <span className="home-nav-icon">▤</span>
            Clientes
          </button>
        </nav>

        <div className="home-user">
          <div className="home-avatar">LM</div>

          <div className="home-user-info">
            <strong>Luiza Maria</strong>
            <span>lumaria@fisio.com</span>
          </div>
        </div>
      </aside>

      <section className="home-card">
        <div className="home-content">
          <div className="home-text">
            <h1>
              Cuidando de pessoas <br />
              com <strong>movimento,</strong> <br />
              <strong>ciência</strong> e <strong>dedicação.</strong>
            </h1>

            <p>
              Seu espaço para transformar vidas através <br />
              da fisioterapia.
            </p>

            <button
              type="button"
              className="home-primary-btn"
              onClick={() => navigate("/cadastro-clientes")}
            >
              Cadastrar paciente
            </button>
          </div>

          <div className="home-image-wrapper">
            <img
              src={homeFisio}
              alt="Montagem com atendimentos de fisioterapia"
              className="home-fisio-image"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
