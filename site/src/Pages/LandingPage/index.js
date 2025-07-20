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
                    <h1>Capture os Melhores Pokémons!</h1>
                </div>
                <div className="landingpage-descricao-section">
                    <h3>Descubra nossa coleção exclusiva de Pokémons raros e lendários</h3>
                </div>
                <a className="landingpage-button-section-inicial" href="/">Ver Pokémons</a>
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