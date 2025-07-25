import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from './Pages/LandingPage';
import LoginUsuario from './Pages/LoginUsuario';
import CadastroUsuario from './Pages/Cadastro';
import Carrinho from './Pages/Carrinho';
import LoginADM from './Pages/ADM/LoginADM';
import LandingADM from './Pages/ADM/LandingADM';

export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginUsuario />} />
                <Route path="/landingPage" element={<LandingPage />} />
                <Route path="/carrinho" element={<Carrinho />} />
                <Route path="/cadastroUsuario" element={<CadastroUsuario />} />
                <Route path="/loginADM" element={<LoginADM />} />
                <Route path="/landingADM" element={<LandingADM />} />
            </Routes>
        </BrowserRouter>
    )
}