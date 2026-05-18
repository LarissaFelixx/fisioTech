import Layout from "../../components/layout.jsx";
import "./styles/evolucaoQueixaPrincipal.css";

const ESCALA_OPCOES = ["Um", "Dois", "Três", "Quatro", "Cinco"];

export default function EvolucaoQueixaPrincipal() {
    return (
        <Layout>
            <div className="evq-container">
                <h1 className="evq-title">Evolução da Queixa Principal</h1>

                <div className="evq-form">
                    <div className="evq-group">
                        <label className="evq-label">
                            Como você está se sentindo desde a última consulta?
                        </label>
                        <textarea className="evq-textarea" />
                    </div>

                    <div className="evq-group">
                        <label className="evq-label">
                            A dor melhorou, piorou ou permaneceu igual?
                        </label>
                        <textarea className="evq-textarea" />
                    </div>

                    <div className="evq-group">
                        <label className="evq-label">
                            Em uma escala de 0 a 15, quanto está a dor atualmente?
                        </label>
                        <div className="evq-radio-row">
                            {ESCALA_OPCOES.map((opcao) => (
                                <label className="evq-radio-option" key={opcao}>
                                    <input
                                        type="radio"
                                        name="escala-dor"
                                        value={opcao}
                                    />
                                    {opcao}
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="evq-group">
                        <label className="evq-label">
                            A dor aparece em algum momento específico do dia?
                        </label>
                        <textarea className="evq-textarea" />
                    </div>
                </div>

                <div className="evq-footer">
                    <button className="evq-btn evq-btn-voltar">Voltar</button>
                    <button className="evq-btn evq-btn-proximo">Próximo</button>
                </div>
            </div>
        </Layout>
    );
}
