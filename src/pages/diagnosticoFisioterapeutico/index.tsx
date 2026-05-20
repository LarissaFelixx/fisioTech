import logo from "../../assets/logo.png";
import "./styles/diagnosticoFisioterapeutico.css";

export default function DiagnosticoFisioterapeutico() {
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

      <section className="cadastro-card" aria-label="Diagnóstico fisioterapêutico">

        <header>
          <h1 className="cadastro-title">Diagnóstico Fisioterapêutico</h1>
          <p className="diag-sub">Paciente: André Costa</p>
        </header>

        <form className="cadastro-form">
          <p className="editar-section-label">Avaliação clínica</p>

          <label className="cadastro-field">
            <span>Queixa principal:</span>
            <textarea className="diag-textarea" placeholder="Descreva a queixa principal do paciente..." />
          </label>

          <div className="editar-grid-2">
            <label className="cadastro-field">
              <span>Início dos sintomas:</span>
              <input type="text" placeholder="DD/MM/AAAA" />
            </label>
            <label className="cadastro-field">
              <span>Intensidade da dor (0-10):</span>
              <input type="number" placeholder="0 a 10" min="0" max="10" />
            </label>
          </div>

          <label className="cadastro-field">
            <span>Histórico clínico relevante:</span>
            <textarea className="diag-textarea" placeholder="Cirurgias anteriores, doenças crônicas, medicamentos..." />
          </label>

          <hr className="editar-divider" />

          <p className="editar-section-label">Diagnóstico</p>

          <div className="editar-grid-2">
            <label className="cadastro-field">
              <span>Diagnóstico médico:</span>
              <input type="text" placeholder="CID informado pelo médico" />
            </label>
            <label className="cadastro-field">
              <span>Diagnóstico fisioterapêutico:</span>
              <input type="text" placeholder="Avaliação do fisioterapeuta" />
            </label>
          </div>

          <label className="cadastro-field">
            <span>Objetivos do tratamento:</span>
            <textarea className="diag-textarea" placeholder="Metas a serem atingidas com a fisioterapia..." />
          </label>
        </form>

        <footer className="cadastro-actions">
          <div></div>
          <div className="cadastro-actions-group">
            <button type="button" className="cadastro-btn outline">Cancelar</button>
            <button type="button" className="cadastro-btn primary">Salvar</button>
          </div>
        </footer>

      </section>
    </main>
  );
}