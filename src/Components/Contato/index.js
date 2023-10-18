import React from "react";
import './style.css'

function Contato() {
    return (
        <div class="form-container">
            <h2>Contato</h2>
            <form class="form">
                <div class="form-group">
                    <label for="email">Nome</label>
                    <input type="text" id="email" name="email" required="" />
                    <label for="email">Email</label>
                    <input type="text" id="email" name="email" required="" />
                </div>
                <div class="form-group">
                    <label for="textarea">Assunto</label>
                    <textarea name="textarea" id="textarea" rows="10" cols="50" required="">          </textarea>
                </div>
                <button class="form-submit-btn" type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Contato;