import React, { useState } from 'react';
import { } from 'react-router-dom';
import './Login.css';

function Login() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
      event.preventDefault(); 
  
      // Obter os valores dos campos do formulário
      const nome = document.getElementById("nome").value;
      const email = document.getElementById("email").value;
      const senha = document.getElementById("senha").value;
      const confirmarSenha = document.getElementById("confirmar-senha").value;
      const dataNascimento = document.getElementById("data-nascimento").value;
      const concordoTermos = document.getElementById("termos").checked;
  
      // Verificar se as senhas coincidem
      if (senha !== confirmarSenha) {
        alert("As senhas não coincidem");
        return;
      }
  
      // Criar um objeto com os dados do usuário
      const usuario = {
        nome,
        email,
        senha,
        dataNascimento,
        concordoTermos,
      };
  
      // Armazenar os dados do usuário no localStorage e sessionStorage
      localStorage.setItem("usuario", JSON.stringify(usuario));
      sessionStorage.setItem("usuario", JSON.stringify(usuario));
  
      setSubmitted(true);
    };
  
    return (
        <div className="container2">
          {submitted ? (
            <p>Dados enviados com sucesso!</p>
          ) : (
            <form onSubmit={handleSubmit}>
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
        )}
        </div>
      );
    }

export default Login;