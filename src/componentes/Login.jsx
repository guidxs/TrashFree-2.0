import React from 'react';
import { } from 'react-router-dom';
import './Login.css';

function Login() {
  return (
    <div className="container2">
      <form>
        <div className="balao">
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="nome" required />
        </div>
        <div className="balao">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="balao">
          <label htmlFor="senha">Senha:</label>
          <input type="password" id="senha" name="senha" required />
        </div>
        <div className="balao">
          <label htmlFor="confirmar-senha">Confirmar Senha:</label>
          <input type="password" id="confirmar-senha" name="confirmar-senha" required />
        </div>
        <div className="balao">
          <label htmlFor="data-nascimento">Data de Nascimento:</label>
          <input type="date" id="data-nascimento" name="data-nascimento" required />
        </div>
        <div className="balao checkbox-container">
          <input type="checkbox" id="termos" name="termos" required />
          <label htmlFor="termos">Eu concordo com os termos de serviço</label>
        </div>
        <button type="submit">Confirmar</button>
      </form>
    </div>
  );
}

export default Login;