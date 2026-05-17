import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./styles/cadastroCliente.css";

export default function CadastroCliente() {
  const navigate = useNavigate();

  return (
    <main className="cadastro-shell">
      <aside className="cadastro-sidebar">
        <div className="cadastro-brand">
          <img src={logo} alt="WebFisio" />
          <span>WebFisio</span>
        </div>

        <nav className="cadastro-nav" aria-label="Navegação principal">
          <button type="button">Cadastrar</button>

          <button type="button" className="active">
            Pacientes
          </button>

          <button type="button">Clientes</button>
        </nav>

        <div className="cadastro-user">
          <div className="cadastro-avatar">LM</div>
          <div className="cadastro-user-info">
            <strong>Luiza Maria</strong>
            <span>luiza@fisio.com</span>
          </div>
        </div>
      </aside>

      <section className="cadastro-card" aria-label="Tela de perfil">
        <header>
          <h1 className="cadastro-title">Perfil</h1>
        </header>

        <form className="cadastro-form">
          <label className="cadastro-field">
            <span>Nome:</span>
            <input type="text" placeholder="Nome" />
          </label>

          <label className="cadastro-field">
            <span>Data de nascimento:</span>
            <input type="text" placeholder="Data de nascimento" />
          </label>

          <label className="cadastro-field">
            <span>Sexo:</span>
            <input type="text" placeholder="Sexo" />
          </label>

          <label className="cadastro-field">
            <span>Profissão:</span>
            <input type="text" placeholder="Profissão" />
          </label>

          <label className="cadastro-field">
            <span>Telefone:</span>
            <input type="text" placeholder="(XX) XXXXX-XXXX" />
          </label>

          <div className="cadastro-row double">
            <label className="cadastro-field">
              <span>Endereço:</span>
              <input type="text" placeholder="Rua e complemento" />
            </label>

            <label className="cadastro-field">
              <span>Bairro:</span>
              <input type="text" placeholder="Bairro" />
            </label>
          </div>
        </form>

        <footer className="cadastro-actions">
          <button type="button" className="cadastro-btn outline">
            Cancelar
          </button>

          <div className="cadastro-actions-group">
            <button type="button" className="cadastro-btn outline">
              Cadastrar
            </button>

            <button
              type="button"
              className="cadastro-btn primary"
              onClick={() => navigate("/quadro-clinico")}
            >
              Próximo
            </button>
          </div>
        </footer>
      </section>
    </main>
  );
}
