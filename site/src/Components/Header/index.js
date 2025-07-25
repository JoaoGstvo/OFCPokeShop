import "./index.scss";

function Header() {
    return (
        <header className="cabecalho-page">
            <section className="cabecalho-section">
                <div className="cabecalho-logo">
                    <a href="/landingpage">
                        <img className="cabecalho-image" src="/images/Logo.png" alt="" />
                    </a>
                </div>
                <div className="cabecalho-busca">
                    <input className="cabecalho-input" type="text" placeholder="Buscar Pokémon..." />
                </div>
                <div className="cabecalho-opcoes">
                    <div id="div-opcoes-hover">
                        <a href="/">Como Funciona</a>
                    </div>
                    <div id="div-opcoes-hover">
                        <a href="#Pokémons">Pokémons</a>

                    </div>
                    <div className="cabecalho-div-carrinho">
                        <a href="/Carrinho">Carrinho</a>
                        <span className="cabecalho-contador-carrinho">2</span>
                    </div>
                    <div className="cabecalho-perfil">
                        <p>J</p>
                    </div>
                </div>
            </section>
        </header>
    );
}

export default Header;