import React from 'react';
import { } from 'react-router-dom';
import './Aplicativo.css';

function Aplicativo() {
  return (
    <>
    <div>
      <h1 id="intro">Adquira Já O app TrashFree</h1>
      <h3 id="subintro">Nós te enviaremos um link, abra-o em seu telefone para baixar o app!</h3>
    </div><div className="container1">
        <form>
          <div className="form-container">
            <label>
              <input type="radio" name="assunto" id="celular" value="celular" />
              <span className="ball-label">Celular</span>
            </label>
          </div>
          <div className="form-container">
            <label>
              <input type="radio" name="assunto" id="email" value="email" />
              <span className="ball-label">E-mail</span>
            </label>
          </div>
          <div className="form-container">
            <input type="text" id="informacao" name="informacao" placeholder="Digite a informação" />
          </div>
          <div className="form-container">
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div><div id="img2">
        <img src="./assets/Group1.png" alt="celular com o app" />
      </div><div>
        <h2 id="download">Download disponível em:</h2>
        <a id="app-store" href="https://www.apple.com/br/app-store/" target="_blank"><img src="./assets/image10.png" alt="app store" /></a>
        <a id="play-store" href="https://play.google.com/store/games?hl=pt_BR&gl=US" target="_blank"><img src="./assets/image9.png" alt="google play" /></a>
      </div>
      </>
  );
}

export default Aplicativo;