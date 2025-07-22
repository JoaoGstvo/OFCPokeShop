import React from "react";
import "./index.scss";

function LoginAdministrativo() {
    return (
        <main className="loginAdministrativo-pagina">
            <section className="loginAdministrativo-section">
                <h1 className="loginadm-titulo">Login Administrativo</h1>

                <div className="loginadm-form">
                    <div className="loginadm-input">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Digite seu email" />
                    </div>

                    <div className="loginadm-input">
                        <label >Senha</label>
                        <input type="password" id="password" placeholder="Digite sua senha" />
                    </div>
                    <a href="/">Entrar</a>
                </div>
                <div className="loginadm-informativo">
                    <p>Está área é específica para Administradores, por favor volte para a página inicial. </p>
                    <a href="/landingpage">Voltar</a>
                </div>
            </section>
        </main>
    );
}

export default LoginAdministrativo;
