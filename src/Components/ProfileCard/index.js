import React from 'react';
import './style.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LinkIcon from '@mui/icons-material/Link';
import Perfil from '../assents/profile.jpg'

function ProfileCard() {
    return (
        <div className="content">
            <div className='linkss'>
                <div className='redes'>
                    <a href='linketree'>
                        <LinkIcon />
                    </a>
                    <a href='https://www.linkedin.com/in/lucas-farias-85a07b117/'>
                        <LinkedInIcon />
                    </a>
                    <a href='github'>
                        <GitHubIcon />
                    </a>
                </div>
            </div>
            <div className='conteudo'>
                <div className='conteudo--img'>
                    <img src={Perfil} alt="Sua Foto" />
                </div>
                <div className='conteudo--sobre'>
                    <h2>Lucas de Farias</h2>
                    <h4>Full Stack Systems Develope</h4>
                    <ul className="chips">
                        <li className="chip">React.js</li>
                        <li className="chip">CSharp</li>
                        <li className="chip">SQLServer</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;