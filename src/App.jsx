import logo from './assets/logo.png'
import './App.css'

function App() {
  return (
    <main className="login-shell">
      <section className="login-card" aria-label="Tela de login">
        <div className="brand">
          <img src={logo} className="brand-logo" alt="WebFisio" />
        </div>

        <form className="login-form">
          <label className="field">
            <span>E-mail</span>
            <input type="email" placeholder="Digite seu e-mail..." />
          </label>

          <label className="field">
            <span>Senha</span>
            <input type="password" placeholder="Digite sua senha..." />
          </label>

          <label className="remember">
            <input type="checkbox" />
            <span>Lembrar de mim</span>
          </label>

          <button type="submit" className="submit">
            Entrar
          </button>
        </form>
      </section>
    </main>
  )
}

export default App
