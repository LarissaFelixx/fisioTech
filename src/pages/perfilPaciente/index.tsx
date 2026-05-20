import logo from "../../assets/logo.png";
import "./styles/perfilPaciente.css";

export default function PerfilPaciente() {
  return (
    <main className="cadastro-shell">
      <aside className="cadastro-sidebar">
        <div className="cadastro-brand">
          <img src={logo} alt="WebFisio" />
          <span>WebFisio</span>
        </div>

        <nav className="cadastro-nav" aria-label="Navegação principal">
          <button type="button">Cadastrar</button>
          <button type="button" className="active">Pacientes</button>
          <button type="button">Clientes</button>
          <button type="button">Profissionais</button>
        </nav>

        <div className="cadastro-user">
          <div className="cadastro-avatar">LM</div>
          <div className="cadastro-user-info">
            <strong>Luiza Maria</strong>
            <span>luiza@fisio.com</span>
          </div>
        </div>
      </aside>

      <section className="cadastro-card" aria-label="Perfil do paciente">

        <div className="editar-profile-header">
          <div className="editar-avatar-wrap">
            <div className="editar-avatar-big">AC</div>
          </div>
          <div className="editar-profile-info">
            <span className="editar-profile-name">André Costa</span>
            <span className="editar-profile-crefito">andre.costa@client.com</span>
            <span className="editar-profile-esp">(85) 98888-1234</span>
          </div>
        </div>

        <p className="editar-section-label">Dados pessoais</p>
        <div className="perfil-info-grid">
          <div className="perfil-info-item">
            <span>Data de nascimento</span>
            <strong>14/07/1985</strong>
          </div>
          <div className="perfil-info-item">
            <span>Sexo</span>
            <strong>Masculino</strong>
          </div>
          <div className="perfil-info-item">
            <span>Profissão</span>
            <strong>Engenheiro</strong>
          </div>
          <div className="perfil-info-item">
            <span>Telefone</span>
            <strong>(85) 98888-1234</strong>
          </div>
        </div>

        <hr className="editar-divider" />

        <p className="editar-section-label">Endereço</p>
        <div className="perfil-info-grid">
          <div className="perfil-info-item">
            <span>Endereço</span>
            <strong>Rua das Flores, 123</strong>
          </div>
          <div className="perfil-info-item">
            <span>Bairro</span>
            <strong>Aldeota</strong>
          </div>
        </div>

        <footer className="cadastro-actions">
          <div></div>
          <div className="cadastro-actions-group">
            <button type="button" className="cadastro-btn outline">Voltar</button>
            <button type="button" className="cadastro-btn primary">Editar</button>
          </div>
        </footer>

      </section>
    </main>
  );
}