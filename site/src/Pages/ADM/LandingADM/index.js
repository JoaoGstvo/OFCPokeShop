
import "./index.scss";

import MenuADM from "../../../Components/MenuADM";

function LandingADM() {
    return (
        <main className="landingADM-page">
            <section className="landingADM-section-menu">
                <MenuADM />
            </section>
            <section className="landingADM-section">
                <h1>Bem-vindo ao Painel ADM</h1>
                <p>Aqui você pode gerenciar o conteúdo do site.</p>
            </section>
        </main>
    );
}

export default LandingADM;