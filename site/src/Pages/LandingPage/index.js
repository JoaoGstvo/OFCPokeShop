import "./index.scss";

import Header from "../../Components/Header/index.js";
import Footer from "../../Components/Footer/index.js";
import CardPokemon from "../../Components/CardPokemon/index.js";

function LandingPage() {
    return (
        <main className="page-landing">
            <Header />

            <section className="landingpage-section-inicial">
                <div className="landingpage-titulo-section">
                    <h1>Encontre os Melhores Pokémons!</h1>
                </div>
                <div className="landingpage-descricao-section">
                    <h3>Descubra nossa coleção exclusiva de Pokémons raros e lendários</h3>
                </div>
                <a className="landingpage-button-section-inicial" href="#Pokémons">Ver Pokémons</a>
            </section>

            <div className="landingpage-titulo-pokemon">
                <h1 id="Pokémons">Pokémons</h1>
            </div>

            <section className="landingpage-section-filtro">
                <select className="landingpage-filtro-select">
                    <option value="">Filtrar por Categoria</option>
                    <option value="lendario">Lendário</option>
                    <option value="shiny">Shiny</option>
                    <option value="fundo-especial">Fundo Especial</option>
                </select>
            </section>

            <section className="landingpage-section-pokemons">
                <CardPokemon />
                <CardPokemon />
                <CardPokemon />
                <CardPokemon />
                <CardPokemon />
                <CardPokemon />
                <CardPokemon />
                <CardPokemon />
            </section>

            <Footer />
        </main>
    );
}

export default LandingPage;