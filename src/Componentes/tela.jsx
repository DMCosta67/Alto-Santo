import React, { useState } from "react";
import '../CSS/App.css';
import FormCadastro from "./formCadastro";
import Leitura from "./leitura";
import Atualiza from "./atualiza";
import Delete from "./deletar";

function Tela() {
    const [secaoAtual, setSecaoAtual] = useState('home');

    const cliqueSecao = (secao) => {
        setSecaoAtual(secao);
    }

    return (
        <div>
            <div className="secao">
                {secaoAtual === 'home' && (
                    <>
                    <header>
                    <img src="Logo.png" alt="logo" className="logo"/>
                    <nav>
                    <ul>
                    <button onClick={() => cliqueSecao('cadastrar')} className="botao_menu">Cadastrar</button>
                    <button onClick={() => cliqueSecao('leitura')} className="botao_menu">Consultar Cadastro</button>
                    <button onClick={() => cliqueSecao('atualizar')} className="botao_menu">Atualizar Cadastro</button>
                    <button onClick={() => cliqueSecao('deletar')} className="botao_menu">Excluir Cadastro</button>
                    </ul>
                    </nav>
                    </header>                            
                    </>
                )}

                {secaoAtual === 'cadastrar' && (
                    <>
                    <FormCadastro/>
                    </>
                )}

                {secaoAtual === 'leitura' && (
                    <>
                    <Leitura/>
                    </>
                )}

                {secaoAtual === 'atualizar' && (
                    <>
                    <Atualiza/>
                    </>
                )}

                {secaoAtual === 'deletar' && (
                    <>
                    <Delete/>
                    </>
                )}
            </div>
        </div>
    );
}

export default Tela;
