import "./Layout.css";
import logo from "../assets/logo.png";

// ÍCONES
import caseIcon from "../assets/icons/case.png";
import clipboardIcon from "../assets/icons/clipboard.png";
import peopleIcon from "../assets/icons/people.png";

// IMAGEM DO USUÁRIO
import userImg from "../assets/medica.jpg";

export default function Layout({ children }) {
    return (
        <div className="app-container">
            <aside className="sidebar">
                <div>
                    {/* LOGO */}
                    <div className="logo">
                        <img src={logo} alt="WebFisio" />
                    </div>

                    {/* NAV */}
                    <nav className="nav">
                        <button className="nav-item">
                            <img src={clipboardIcon} className="nav-icon" />
                            Cadastrar
                        </button>

                        <button className="nav-item active">
                            <img src={peopleIcon} className="nav-icon" />
                            Pacientes
                        </button>

                        <button className="nav-item">
                            <img src={caseIcon} className="nav-icon" />
                            Clientes
                        </button>
                    </nav>
                </div>

                {/* USER (ATUALIZADO) */}
                <div className="user">
                    <img src={userImg} alt="Usuário" className="user-avatar" />

                    <div className="user-info">
                        <strong>Luiza Maria</strong>
                        <span>lumaria@fisio.com</span>
                    </div>
                </div>
            </aside>

            <main className="content">
                <div className="header"></div>
                <div className="page">{children}</div>
            </main>
        </div>
    );
}