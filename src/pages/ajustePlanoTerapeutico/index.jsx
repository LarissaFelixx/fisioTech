import Layout from "../../components/layout.jsx";
import "./styles/ajustePlanoTerapeutico.css";

export default function AjustePlanoTerapeutico() {
  return (
    <Layout>
      <div className="apt-container">
        <h1 className="apt-title">Ajuste do Plano Terapêutico</h1>

        <div className="apt-form">
          <div className="apt-group">
            <label className="apt-label">
              Após a reavaliação o fisioterapeuta define:
            </label>
            <textarea
              className="apt-textarea"
              defaultValue="Estou com dor na região lombar há cerca de duas semanas, principalmente quando fico muito tempo sentado ou quando levanto da cadeira."
            />
          </div>
        </div>

        <div className="apt-footer">
          <button className="apt-btn apt-btn-voltar">Voltar</button>
          <button className="apt-btn apt-btn-proximo">Próximo</button>
        </div>
      </div>
    </Layout>
  );
}
