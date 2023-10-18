import './style.css';
import Perfil from '../assents/profile.jpg'
import React from 'react';
import JavascriptIcon from '@mui/icons-material/Javascript';

function Sobre() {
    return (
        <div>
            <div className="sobre">
                <h2>Sobre Mim</h2>
                <div className="conteudo-sobre">
                    <div className="foto">
                        <img src={Perfil} alt="Sua Foto" width="350" height="350" />
                    </div>
                    <div className="texto">
                        <p>
                            Olá, eu sou Lucas e esta é a minha breve apresentação. Eu sou desenvolvedor de sistemas Full Stack, formado em Análise e Desenvolvimento de Sistemas. Atualmente trabalho no desenvolvimento e suporte de uma Multinacional, mas sempre procurando crescer profissionalmente.
                        </p>
                        <p>
                            <strong>Experiência:</strong> 2 anos
                        </p>
                        <p>
                            <strong>Projetos Trabalhados:</strong> 32
                        </p>
                    </div>
                </div>
            </div>
            {/* <div className='skills'>
                <div className="toggle"></div>
                <div className="containerS">
                    <div className="cardS">
                        <div className="box">
                            <div className="contentS">
                                <h3>Frontend Developer</h3>
                                <h5>ReactJS</h5>
                                <div class="progress-loader">
                                    <div class="progress"></div>
                                </div>
                                <h5>HTML</h5>
                                <h5>CSS</h5>
                            </div>
                        </div>
                    </div>
                    <div className="cardS">
                        <div className="box">
                            <div className="contentS">
                                <h3>Backend Developer</h3>
                                <h5>.NET</h5>
                                <h5>CSharp</h5>
                                <h5>Node Js</h5>
                            </div>
                        </div>
                    </div>
                    <div className="cardS">
                        <div className="box">
                            <div className="contentS">
                                <h3>DataBase</h3>
                                <h5>SqlServer</h5>
                                <h5>MySql</h5>
                            </div>
                        </div>
                    </div>
                    <div className="cardS">
                        <div className="box">
                            <div className="contentS">
                                <h3>Mobile Develop</h3>
                                <h5>React Native</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default Sobre;