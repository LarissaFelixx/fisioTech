import logo from "../../assets/logo.png";
import "./styles/editarProfissional.css";

export default function EditarProfissional() {
  return (
    <main className="cadastro-shell">
      <aside className="cadastro-sidebar">
        <div className="cadastro-brand">
          <img src={logo} alt="WebFisio" />
          <span>WebFisio</span>
        </div>

        <nav className="cadastro-nav" aria-label="Navegação principal">
          <button type="button">Cadastrar</button>
          <button type="button">Pacientes</button>
          <button type="button" className="active">
            Profissionais
          </button>
        </nav>

        <div className="cadastro-user">
          <div className="cadastro-avatar">LM</div>
          <div className="cadastro-user-info">
            <strong>Luiza Maria</strong>
            <span>luiza@fisio.com</span>
          </div>
        </div>
      </aside>

      <section
        className="cadastro-card"
        aria-label="Tela de edição de profissional"
      >
        <div className="editar-profile-header">
          <div className="editar-avatar-wrap">
            <div className="editar-avatar-big">AP</div>
            <div className="editar-avatar-badge" aria-hidden="true">
              ✎
            </div>
          </div>
          <div className="editar-profile-info">
            <span className="editar-profile-name">Ana Paula Souza</span>
            <span className="editar-profile-crefito">CREFITO-3/12345-F</span>
            <span className="editar-profile-esp">Ortopedia</span>
          </div>
        </div>

        <form className="cadastro-form">
          <p className="editar-section-label">Dados pessoais</p>

          <div className="editar-grid-2">
            <label className="cadastro-field">
              <span>Nome completo:</span>
              <input type="text" defaultValue="Ana Paula Souza" />
            </label>
            <label className="cadastro-field">
              <span>Data de nascimento:</span>
              <input type="text" defaultValue="12/03/1990" />
            </label>
          </div>

          <div className="editar-grid-2">
            <label className="cadastro-field">
              <span>Sexo:</span>
              <input type="text" defaultValue="Feminino" />
            </label>
            <label className="cadastro-field">
              <span>Telefone:</span>
              <input type="text" defaultValue="(85) 99999-0000" />
            </label>
          </div>

          <div className="editar-grid-3">
            <label className="cadastro-field">
              <span>Endereço:</span>
              <input type="text" defaultValue="Rua das Flores, 123" />
            </label>
            <label className="cadastro-field">
              <span>Bairro:</span>
              <input type="text" defaultValue="Aldeota" />
            </label>
            <label className="cadastro-field">
              <span>CEP:</span>
              <input type="text" defaultValue="60110-001" />
            </label>
          </div>

          <hr className="editar-divider" />

          <p className="editar-section-label">Dados profissionais</p>

          <div className="editar-grid-2">
            <label className="cadastro-field">
              <span>CREFITO:</span>
              <input type="text" defaultValue="CREFITO-3/12345-F" />
            </label>
            <label className="cadastro-field">
              <span>Especialidade:</span>
              <input type="text" defaultValue="Ortopedia" />
            </label>
          </div>
        </form>

        <footer className="cadastro-actions">
          <button type="button" className="cadastro-btn danger">
            Excluir
          </button>
          <div className="cadastro-actions-group">
            <button type="button" className="cadastro-btn outline">
              Cancelar
            </button>
            <button type="button" className="cadastro-btn primary">
              Salvar
            </button>
          </div>
        </footer>
      </section>
    </main>
  );
}
