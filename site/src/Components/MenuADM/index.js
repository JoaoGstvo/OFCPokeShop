import "./index.scss";

function MenuADM() {
    return (
        <main className="menuADM-page">
            <section className="menuADM-section">
                <h1 className="menuADM-titulo">PokéShop</h1>
                <div className="menuADM-options-container">

                    <div className="menuADM-options">
                        <a className="menuADM-options-texto">Pokémons</a>
                    </div>

                    <div className="menuADM-options">
                        <a className="menuADM-options-texto">Pedidos</a>
                    </div>

                    <div id="categorias"className="menuADM-options">
                        <a className="menuADM-options-texto">Categorias</a>
                    </div>
                </div>

                <div className="menuADM-options-sair">
                    <a className="menuADM-options-texto">Voltar</a>
                </div>

            </section>
        </main>
    );
}

export default MenuADM;