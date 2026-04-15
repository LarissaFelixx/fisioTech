import "./Pacientes.css";
import Layout from "src/components/layout.jsx";

const pacientesMock = [
    { nome: "André Costa", email: "andre.costa@client.com" },
    { nome: "Julia Maria", email: "julia.maria@client.com" },
    { nome: "Aline Souza", email: "aline.souza@client.com" },
    { nome: "Marcelo Andrade", email: "marcelo.andrade@client.com" },
    { nome: "Suzane Moura", email: "suzane.moura@client.com" },
];

function getInitials(nome) {
    const partes = nome.split(" ");
    if (partes.length < 2) return partes[0][0];
    return partes[0][0] + partes[1][0];
}

export default function Pacientes() {
    return (
        <Layout>
            <div className="page-container">
                <h1 className="page-title">Pacientes</h1>

                <div className="table">
                    <div className="table-header">
                        <span>Nome</span>
                        <span>E-mail</span>
                        <span></span>
                    </div>

                    {pacientesMock.map((p, index) => (
                        <div className="table-row" key={index}>
                            <div className="user-info">
                                <div className="avatar">{getInitials(p.nome)}</div>
                                <span>{p.nome}</span>
                            </div>

                            <span className="email">{p.email}</span>

                            <div className="actions">
                                <button className="btn delete">🗑</button>
                                <button className="btn edit">✏️</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
}