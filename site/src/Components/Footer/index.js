import "./index.scss";

function Footer() {
    return (
        <footer className="footer-page">
            <section className="footer-section-flex">
                <div className="footer-div-frase">
                    <h1 className="footer-nome-loja">PokéShop</h1>
                    <p className="footer-p-titulo">A melhor loja de pokémons do mundo!</p>
                </div>

                <div className="footer-div-links">
                    <h1 className="footer-titulo">Links Úteis</h1>
                    <ul className="footer-ul-links">
                        <li className="footer-li-links">
                            <a href="/">Início</a>
                        </li>
                        <li className="footer-li-links">
                            <a href="/pokemons">Pokémons</a>
                        </li>
                        <li className="footer-li-links">
                            <a href="/contato">Como Funciona</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-div-links">

                    <h1 className="footer-titulo">Contato</h1>
                    <ul className="footer-ul-links">
                        <li className="footer-li-links">
                            <a href="/">contato@gmail.com</a>
                        </li>
                        <li className="footer-li-links">
                            <a href="/">contato@gmail.com</a>
                        </li>
                        <li className="footer-li-links">
                            <a href="/">contato@gmail.com</a>
                        </li>
                    </ul>
                </div>

                <div className="footer-adm">
                    <a className="footer-adm-botao" href="/loginADM">Administrador</a>
                </div>
            </section>

            <section className="footer-creditos">
                <p className="footer-p-creditos">
                    © 2025 PokéShop. Todos os direitos reservados.
                </p>
            </section>
        </footer>
    );
}

export default Footer;
