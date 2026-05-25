import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./styles/exameFisico.css";

export default function ExameFisico() {
    const navigate = useNavigate();

    return (
        <main className="exame-shell">
            <aside className="exame-sidebar">
                <div className="exame-brand">
                    <img src={logo} alt="WebFisio" />
                    <span>WebFisio</span>
                </div>

                <nav className="exame-nav" aria-label="Navegação principal">
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

                <div className="exame-user">
                    <div className="exame-avatar">
                        <img src={logo} alt="Usuário" />
                    </div>

                    <div className="exame-user-info">
                        <strong>Luiza Maria</strong>
                        <small>lumaria@fisio.com</small>
                    </div>
                </div>
            </aside>

            <section className="exame-content">
                <div className="exame-card">
                    <h1>Exame Físico</h1>

                    <form className="exame-form">
                        <div className="form-group">
                            <label>Postura:</label>
                            <textarea placeholder="Nome" />
                        </div>

                        <div className="form-group">
                            <label>Amplitude do Movimento:</label>
                            <textarea placeholder="Enter password" />
                        </div>

                        <div className="form-group">
                            <label>Palpação:</label>
                            <textarea placeholder="Enter password" />
                        </div>

                        <div className="form-group">
                            <label>Força Muscular</label>
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
