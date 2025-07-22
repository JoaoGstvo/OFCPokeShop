import "./index.scss";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

function Carrinho() {
    const itensCarrinhoUsuario = [
        {
            id: 1,
            nome: "Mewtwo",
            tipo: "Psíquico",
            categoria: "Lendário",
            preco: 2800.00,
            imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png",
            quantidade: 1
        },
        {
            id: 2,
            nome: "Charizard Shiny",
            tipo: "Fogo/Voador",
            categoria: "Shiny",
            preco: 1800.00,
            imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
            quantidade: 2
        },
        {
            id: 2,
            nome: "Charizard Shiny",
            tipo: "Fogo/Voador",
            categoria: "Shiny",
            preco: 1800.00,
            imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
            quantidade: 2
        },
        {
            id: 3,
            nome: "Charizard Shiny",
            tipo: "Fogo/Voador",
            categoria: "Shiny",
            preco: 1800.00,
            imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
            quantidade: 2
        },
        {
            id: 4,
            nome: "Charizard Shiny",
            tipo: "Fogo/Voador",
            categoria: "Shiny",
            preco: 1800.00,
            imagem: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
            quantidade: 2
        }
    ];

    const calcularTotalCarrinhoUsuario = () => {
        return itensCarrinhoUsuario.reduce((total, item) => total + (item.preco * item.quantidade), 0);
    };

    return (
        <main className="carrinhoUsuario-pagina">
            <Header />

            <section className="carrinhoUsuario-secao">
                <div className="carrinhoUsuario-container">
                    <div className="carrinhoUsuario-cabecalho">
                        <h1 className="carrinhoUsuario-titulo">🛒 Meu Carrinho</h1>
                        <p className="carrinhoUsuario-subtitulo">Revise seus Pokémons antes de finalizar a compra</p>
                    </div>

                    <div className="carrinhoUsuario-conteudo">
                        <div className="carrinhoUsuario-blocoItens">
                            <h2 className="carrinhoUsuario-subtituloItens">Itens no Carrinho</h2>

                            {itensCarrinhoUsuario.length === 0 ? (
                                <div className="carrinhoUsuario-vazio">
                                    <div className="carrinhoUsuario-iconeVazio">🛒</div>
                                    <h3 className="carrinhoUsuario-tituloVazio">Seu carrinho está vazio</h3>
                                    <p className="carrinhoUsuario-textoVazio">Adicione alguns Pokémons incríveis à sua coleção!</p>
                                    <a href="/" className="carrinhoUsuario-botaoExplorar">Explorar Pokémons</a>
                                </div>
                            ) : (
                                <div className="carrinhoUsuario-listaItens">
                                    {itensCarrinhoUsuario.map(item => (
                                        <div key={item.id} className="carrinhoUsuario-itemLinha">
                                            <div className="carrinhoUsuario-imagem">
                                                <img src={item.imagem} alt={item.nome} />
                                            </div>
                                            <div className="carrinhoUsuario-detalhes">
                                                <h3 className="carrinhoUsuario-nome">{item.nome}</h3>
                                                <p className="carrinhoUsuario-tipo">Tipo: {item.tipo}</p>
                                                <span className={`carrinhoUsuario-categoria ${item.categoria.toLowerCase()}-etiqueta`}>
                                                    {item.categoria}
                                                </span>
                                            </div>
                                            <div className="carrinhoUsuario-quantidade">
                                                <label className="carrinhoUsuario-labelQuantidade">Quantidade:</label>
                                                <div className="carrinhoUsuario-controleQuantidade">
                                                    <button className="carrinhoUsuario-botaoQuantidade">-</button>
                                                    <span className="carrinhoUsuario-numeroQuantidade">{item.quantidade}</span>
                                                    <button className="carrinhoUsuario-botaoQuantidade">+</button>
                                                </div>
                                            </div>
                                            <div className="carrinhoUsuario-preco">
                                                <span className="carrinhoUsuario-precoUnitario">R$ {item.preco.toFixed(2)}</span>
                                                <span className="carrinhoUsuario-precoTotal">R$ {(item.preco * item.quantidade).toFixed(2)}</span>
                                            </div>
                                            <div className="carrinhoUsuario-acoes">
                                                <button className="carrinhoUsuario-botaoRemover">🗑️</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {itensCarrinhoUsuario.length > 0 && (
                            <div className="carrinhoUsuario-resumo">
                                <h2 className="carrinhoUsuario-tituloResumo">Resumo do Pedido</h2>
                                <div className="carrinhoUsuario-detalhesResumo">
                                    <div className="carrinhoUsuario-linhaResumo">
                                        <span className="carrinhoUsuario-labelResumo">Subtotal:</span>
                                        <span className="carrinhoUsuario-valorResumo">R$ {calcularTotalCarrinhoUsuario().toFixed(2)}</span>
                                    </div>
                                    <div className="carrinhoUsuario-linhaResumo carrinhoUsuario-totalResumo">
                                        <span className="carrinhoUsuario-labelResumo">Total:</span>
                                        <span className="carrinhoUsuario-valorResumo">R$ {calcularTotalCarrinhoUsuario().toFixed(2)}</span>
                                    </div>
                                </div>

                                <div className="carrinhoUsuario-acoesResumo">
                                    <a href="/" className="carrinhoUsuario-botaoContinuar">Continuar Comprando</a>
                                    <a href="/pagamento" className="carrinhoUsuario-botaoFinalizar">Finalizar Compra</a>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}

export default Carrinho;
