import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./styles/habitosVida.css";

export default function HabitosVida() {
    const navigate = useNavigate();

    return (
        <main className="habitos-shell">
            <aside className="habitos-sidebar">
                <div className="habitos-brand">
                    <img src={logo} alt="WebFisio" />
                    <span>WebFisio</span>
                </div>

                <nav className="habitos-nav" aria-label="Navegação principal">
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

                <div className="habitos-user">
                    <div className="habitos-avatar">
                        <img src={logo} alt="Usuário" />
                    </div>

                    <div className="habitos-user-info">
                        <strong>Luiza Maria</strong>
                        <small>lumaria@fisio.com</small>
                    </div>
                </div>
            </aside>

            <section className="habitos-content">
                <div className="habitos-card">
                    <h1>Hábitos de Vida</h1>

                    <form className="habitos-form">
                        <div className="form-group">
                            <label>Atividade física:</label>
                            <textarea placeholder="Nome" />
                        </div>

                        <div className="form-group">
                            <label>Rotina de trabalho:</label>
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
                            <label>Tabagismo:</label>

                            <div className="radio-area">
                                <label>
                                    <input type="radio" name="tabagismo" />
                                    <span></span>
                                    Sim
                                </label>

                                <label>
                                    <input type="radio" name="tabagismo" />
                                    <span></span>
                                    Não
                                </label>
                            </div>
                        </div>

                        <div className="form-group inline-question">
                            <label>Consumo de álcool:</label>

                            <div className="radio-area">
                                <label>
                                    <input type="radio" name="alcool" />
                                    <span></span>
                                    Sim
                                </label>

                                <label>
                                    <input type="radio" name="alcool" />
                                    <span></span>
                                    Não
                                </label>
                            </div>
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
