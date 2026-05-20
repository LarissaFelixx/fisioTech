import Layout from "../../components/layout.jsx";
import "./styles/adesaoExercicios.css";

export default function AdesaoExercicios() {
  return (
    <Layout>
      <div className="aex-container">
        <h1 className="aex-title">Adesão aos Exercícios</h1>

        <div className="aex-form">
          <div className="aex-group">
            <label className="aex-label">
              Você percebeu melhora após as sessões de fisioterapia?
            </label>
            <textarea className="aex-textarea" />
          </div>

          <div className="aex-group">
            <label className="aex-label">
              Algum exercício causou dor ou desconforto?
            </label>
            <textarea className="aex-textarea" />
          </div>

          <div className="aex-group">
            <label className="aex-label">
              Alguma técnica utilizada ajudou mais no alívio da dor?
            </label>
            <textarea className="aex-textarea" />
          </div>
        </div>

        <div className="aex-footer">
          <button className="aex-btn aex-btn-voltar">Voltar</button>
          <button className="aex-btn aex-btn-proximo">Próximo</button>
        </div>
      </div>
    </Layout>
  );
}
