import "./index.scss";

function CadastroUsuario() {
    return (
        <main className="cadastroUsuario-page">
            <section className="cadastroUsuario-section">
                <h1 className="cadastroUsuario-titulo">Cadastro</h1>
                <div className="cadastroUsuario-container">
                    <div className="cadastroUsuario-form">
                        <div className="cadastroUsuario-info">
                            <label>Nome:</label>
                            <input type="text" placeholder="Nome" />
                        </div>
                        <div className="cadastroUsuario-info">
                            <label>Telefone:</label>
                            <input type="tel" placeholder="Telefone" />
                        </div>
                        <div className="cadastroUsuario-info">
                            <label>Email:</label>
                            <input type="email" placeholder="Email" />
                        </div>
                    </div>
                    <div className="cadastroUsuario-form">
                        <div className="cadastroUsuario-info">
                            <label>Sobrenome:</label>
                            <input type="text" placeholder="Sobrenome" />
                        </div>
                        <div className="cadastroUsuario-info">
                            <label>Data de Nascimento:</label>
                            <input type="date" placeholder="" />
                        </div>
                        <div className="cadastroUsuario-info">
                            <label>Senha:</label>
                            <input type="password" placeholder="Senha" />
                        </div>
                    </div>
                </div>

                <div className="cadastroUsuario-cadastrar">
                    <a href="/landingpage" className="login-usuario-botao">
                        Cadastrar
                    </a>
                </div>

                <div className="cadastroUsuario-login">
                    <p>Já possui uma conta? <a href="/login" className="login-usuario-link">Fazer Login</a></p>
                </div>
            </section>

            <section className="cadastroUsuario-decoracao">
                <div className="cadastroUsuario-silhueta">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="Bulbasaur" />
                </div>
            </section>
        </main>
    );
}

export default CadastroUsuario;
