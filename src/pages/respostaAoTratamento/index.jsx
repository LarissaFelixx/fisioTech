import Layout from "../../components/layout.jsx";
import "./styles/respostaAoTratamento.css";

export default function RespostaAoTratamento() {
    return (
        <Layout>
            <div className="rat-container">
                <h1 className="rat-title">Resposta ao Tratamento</h1>

                <div className="rat-form">
                    <div className="rat-group">
                        <label className="rat-label">
                            Você percebeu melhora após as sessões de fisioterapia?
                        </label>
                        <textarea className="rat-textarea" />
                    </div>

                    <div className="rat-group">
                        <label className="rat-label">
                            Algum exercício causou dor ou desconforto?
                        </label>
                        <textarea className="rat-textarea" />
                    </div>

                    <div className="rat-group">
                        <label className="rat-label">
                            Alguma técnica utilizada ajudou mais no alívio da dor?
                        </label>
                        <textarea className="rat-textarea" />
                    </div>
                </div>

                <div className="rat-footer">
                    <button className="rat-btn rat-btn-voltar">Voltar</button>
                    <button className="rat-btn rat-btn-proximo">Próximo</button>
                </div>
            </div>
        </Layout>
    );
}
