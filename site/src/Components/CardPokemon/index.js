import "./index.scss";

function CardPokemon() {
    return (
        <main className="card-pagina">
            <section className="card-secao">
                <div className="card-imagem">
                    <img src="/images/Lucario.jpg" alt="Imagem do produto" />
                    <span className="card-categoria">Lutador</span>
                </div>

                <div className="card-informacoes">
                    <div className="card-nome-e-preco">
                        <span className="card-nome">Lucário</span>
                        <span className="card-preco">$25.99</span>
                    </div>
                    <span className="card-cp">CP: 1600</span>
                </div>

                <div className="card-botao">Adicionar ao Carrinho </div>
            </section>
        </main>
    );
}

export default CardPokemon;
