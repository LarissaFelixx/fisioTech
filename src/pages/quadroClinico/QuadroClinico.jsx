import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./styles/quadroClinico.css";

export default function QuadroClinico() {
  const navigate = useNavigate();

  return (
    <main className="quadro-shell">
      <aside className="quadro-sidebar">
        <div className="quadro-brand">
          <img src={logo} alt="WebFisio" />
          <span>WebFisio</span>
        </div>

        <nav className="quadro-nav" aria-label="Navegação principal">
          <button type="button" onClick={() => navigate("/cadastro-clientes")}>
            <span>▣</span>
            Cadastrar
          </button>

          <button type="button" className="active">
            <span>☷</span>
            Pacientes
          </button>

          <button type="button">
            <span>▤</span>
            Clientes
          </button>
        </nav>

        <div className="quadro-user">
          <div className="quadro-avatar">
            <img src={logo} alt="Usuário" />
          </div>

          <div className="quadro-user-info">
            <strong>Luiza Maria</strong>
            <small>lumaria@fisio.com</small>
          </div>
        </div>
      </aside>

      <section className="quadro-content">
        <div className="quadro-card">
          <h1>Quadro clínico</h1>

          <form className="quadro-form">
            <div className="form-group">
              <label>Queixa Principal</label>
              <textarea placeholder="Nome" />
            </div>

            <div className="form-group">
              <label>História da Doença Atual</label>
              <textarea placeholder="Enter password" />
            </div>

            <div className="form-group">
              <label>Histórico de Saúde</label>

              <div className="checkbox-list">
                <label>
                  <input type="checkbox" />
                  <span></span>
                  Hipertensão
                </label>

                <label>
                  <input type="checkbox" />
                  <span></span>
                  Diabetes
                </label>

                <label>
                  <input type="checkbox" />
                  <span></span>
                  Asma
                </label>

                <label>
                  <input type="checkbox" />
                  <span></span>
                  Cardiopatia
                </label>

                <label>
                  <input type="checkbox" />
                  <span></span>
                  Osteoporose
                </label>

                <label>
                  <input type="checkbox" />
                  <span></span>
                  Outros
                </label>
              </div>
            </div>

            <div className="form-group inline-question">
              <label>Cirurgias:</label>

              <div className="radio-area">
                <label>
                  <input type="radio" name="cirurgias" />
                  <span></span>
                  Sim
                </label>

                <label>
                  <input type="radio" name="cirurgias" />
                  <span></span>
                  Não
                </label>
              </div>

              <input type="text" placeholder="Quais?" />
            </div>

            <div className="form-group inline-question">
              <label>Lesões anteriores:</label>

              <div className="radio-area">
                <label>
                  <input type="radio" name="lesoes" />
                  <span></span>
                  Sim
                </label>

                <label>
                  <input type="radio" name="lesoes" />
                  <span></span>
                  Não
                </label>
              </div>

              <input type="text" placeholder="Quais?" />
            </div>

            <div className="form-group">
              <label>Medicamentos:</label>
              <textarea placeholder="Enter password" />
            </div>

            <div className="form-actions">
              <button type="button" className="btn-cancelar">
                Cancelar
              </button>

              <button type="button" className="btn-proximo">
                Próximo
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
