import './style.css'
import React from 'react';

function Header({ rolar }) {
    const handleClick = (event, targetId) => {
        event.preventDefault(); // Evita que a página atualize
        rolar(targetId);
    };

    return (
        <header>
            <div class="nome">Lucas Farias</div>
            <nav class="menu">
                <ul>
                    <li><a href="#" onClick={rolar}>Inicio</a></li>
                    <li><a href="#sobre" onClick={(e) => handleClick(e, "sobre")}>Sobre</a></li>
                    <li><a href="#" onClick={rolar}>Portifolio</a></li>
                    <li><a href="#" onClick={rolar}>Contato</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;