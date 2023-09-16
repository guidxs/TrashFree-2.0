import React, { useState } from 'react';
import { } from 'react-router-dom';
import './Projeto.css';

function Projeto() {
  const [donationAmount, setDonationAmount] = useState(0);
  const [showThankYouMessage, setShowThankYouMessage] = useState(false);

  // Função para aumentar o valor
  const increaseAmount = () => {
    setDonationAmount(donationAmount + 1);
  };

  // Função para diminuir o valor
  const decreaseAmount = () => {
    if (donationAmount > 0) {
      setDonationAmount(donationAmount - 1);
    }
  };

  // Função para lidar com a mudança no input
  const handleInputChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    if (!isNaN(newValue)) {
      setDonationAmount(newValue);
    }
  };

  const handleDonationClick = () => {
    setShowThankYouMessage(true);
  };

  return (
    <div>
      <div className="projeto">
        <h1>Bem-vindo ao projeto TrashFree!</h1>
        <p><br /><br />Nós somos uma startup comprometida em tornar a coleta de lixo mais eficiente, sustentável e conveniente para as cidades e seus moradores.<br />
          Nosso objetivo é criar soluções inteligentes e inovadoras para reduzir o impacto ambiental do lixo e melhorar a qualidade de vida nas cidades.<br />
          Nós acreditamos que a tecnologia pode ajudar a transformar a coleta de lixo e estamos trabalhando duro para criar soluções inteligentes para esse problema.<br />
          Nosso aplicativo permite que os moradores informem quando há lixo para ser coletado em suas ruas e, com base nessas informações,<br />
          geramos a melhor rota para os caminhões de lixo, economizando tempo e combustível, assim emitindo menos CO2.<br />
          <br />
          Além disso, estamos constantemente buscando novas soluções para melhorar ainda mais a coleta de lixo. Um exemplo disso é o nosso produto inovador,<br />
          um lixo que abre a tampa automaticamente por sensor, evitando que os moradores precisem tocar na tampa suja do lixo e tornando o processo de descarte mais higiênico.</p>
      </div>
      <div className="panel">
        <h3>APOIE #TrashFree!</h3>
        <div>
        <button className="button" onClick={increaseAmount}>Aumentar</button>
        <button className="button" onClick={decreaseAmount}>Diminuir</button>
      </div>

        <div>
          <button className="button">5 Reais</button>
          <button className="button">10 Reais</button>
        </div>
        <div>
          <button className="button">25 Reais</button>
          <button className="button">50 Reais</button>
        </div>
        <div>
        <input
          type="number"
          placeholder="Outro valor :)"
          value={donationAmount}
          onChange={handleInputChange}
        />
        </div>
        <div>
          <button className="button-enviar" onClick={handleDonationClick}>DOAR!</button>
        </div>
        {showThankYouMessage && (
        <div>
          <p>Obrigado por doar!</p>
        </div>
        )}
      </div>
      <div className="txtlateral">
        <h3>Faça parte da revolução da coleta de lixo com a TrashFree!</h3>
        <p>Precisamos da sua ajuda para tornar nossos projetos uma realidade.<br />
          Estamos lançando uma campanha de crowdfunding para arrecadar fundos para o desenvolvimento de nossas<br />
          soluções inteligentes para a coleta de lixo. Com sua doação, poderemos investir em pesquisa,<br />
          desenvolvimento e produção de nossas soluções,<br />
          permitindo-nos expandir nosso trabalho para mais cidades e comunidades.</p>
        <h3>Ao apoiar a TrashFree, você está ajudando a criar um futuro mais sustentável e saudável para todos.<br />
          Com sua doação, podemos:</h3>
        <p> - Expandir a implementação de nosso aplicativo de coleta de lixo inteligente,<br />
          permitindo que mais cidades reduzam seus custos de coleta de lixo e tornem o processo mais eficiente e sustentável.<br />
          - Investir em pesquisa e desenvolvimento de novas soluções para a coleta de lixo,<br />
          como o nosso lixo que abre a tampa automaticamente por sensor.<br />
          - Aumentar nossa presença em mais cidades e comunidades,<br />
          permitindo que mais pessoas se beneficiem de nossas soluções inteligentes e sustentáveis.<br />
        </p>
        <h3>Não importa o valor da sua doação, toda contribuição é valiosa e faz a diferença.<br />
          Junte-se a nós na nossa missão de transformar a coleta de lixo nas cidades e ajude-nos a criar<br />
          um futuro mais sustentável para todos. Juntos, podemos tornar o mundo um lugar mais limpo,<br />
          saudável e sustentável.</h3>
      </div>
    </div>
  );
}

export default Projeto;
