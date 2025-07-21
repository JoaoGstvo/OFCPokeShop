import "./index.scss";

function Login() {
    return (
        <main className="pagina-login-usuario">
            <section className="login-usuario-section">
                <div className="login-usuario-container">
                    <div className="login-usuario-conteudo">
                        <div className="login-usuario-cartao">
                            <div className="login-usuario-cabecalho">
                                <h2>Login</h2>
                            </div>

                            <form className="login-usuario-formulario">
                                <div className="login-usuario-form-grupo">
                                    <label htmlFor="email">Email</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        placeholder="Digite seu email"
                                        className="login-usuario-campo"
                                    />
                                </div>
                                
                                <div className="login-usuario-form-grupo">
                                    <label htmlFor="password">Senha</label>
                                    <input 
                                        type="password" 
                                        id="password" 
                                        placeholder="Digite sua senha"
                                        className="login-usuario-campo"
                                    />
                                </div>

                                <a href="/landingpage" className="login-usuario-botao">
                                    Entrar
                                </a>

                                <div className="login-usuario-opcoes">
                                    <a href="/" className="login-usuario-link-esqueci">Esqueceu a senha?</a>
                                </div>

                                <div className="login-usuario-redirecionamento">
                                    <p>Não tem uma conta? <a href="/cadastroUsuario" className="login-usuario-link-cadastro">Cadastre-se aqui</a></p>
                                </div>
                            </form>
                        </div>

                        <div className="login-usuario-decoracao">
                            <div className="login-usuario-silhueta">
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" alt="Pikachu" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Login;
