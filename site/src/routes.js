import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LandingPage from './Pages/LandingPage';
import LoginUsuario from './Pages/LoginUsuario';
import CadastroUsuario from './Pages/Cadastro';

export default function Index() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginUsuario />} />
                <Route path="/landingPage" element={<LandingPage />} />
                <Route path="/cadastroUsuario" element={<CadastroUsuario />} />
            </Routes>
        </BrowserRouter>
    )
}