import React from 'react';
import { } from 'react-router-dom';
import './Sobre.css';

function Sobre() {
  return (
    <div className="sobre">
      <h1>SOBRE NÓS<br /><br /></h1>
      <p>A TrashFree é uma startup inovadora que tem como objetivo transformar a forma como o lixo é coletado nas cidades.<br />
        A empresa criou um aplicativo que permite que os moradores informem quando há lixo para ser coletado em suas ruas e,<br />
        com base nessa informação, o aplicativo gera a melhor rota para o caminhão de lixo,<br />
        economizando tempo e combustível.<br /></p>

      <p>Com a TrashFree, as cidades podem reduzir significativamente os custos de coleta de lixo, além de tornar o processo mais eficiente e sustentável.<br />
        Isso também beneficia os moradores, que têm um serviço de coleta mais rápido e eficiente, reduzindo o tempo que o lixo permanece nas ruas e melhorando a qualidade de vida.<br />
      </p>

      <p>Além disso, a TrashFree está sempre buscando novas soluções para melhorar ainda mais a coleta de lixo. Um exemplo disso é o seu produto, um lixo que abre a tampa automaticamente por sensor,<br />
        evitando que os moradores precisem tocar na tampa suja do lixo e tornando o processo de descarte mais higiênico.<br />
      </p>

      <p>A equipe por trás da TrashFree é formada por profissionais altamente qualificados e motivados, que estão comprometidos em criar soluções sustentáveis e eficientes para o futuro das cidades.<br />
        Ajudando a tornar o mundo um lugar mais limpo e saudável.<br />
      </p>

      <p>Com a TrashFree, o futuro da coleta de lixo parece muito mais promissor, e esperamos que outras empresas se inspirem em seu trabalho inovador<br />
        para criar soluções ainda melhores para o meio ambiente e a sociedade como um todo.<br />
      </p>

      <br />

      <h2>Integrantes</h2>
      <p>Guilherme Doretto Sobreiro RM:99674</p>
      <p>Aksel RM:*****</p>
      <p>Samyr RM:*****</p>

      <img className="fotos" src="/assets/image16.png" alt="plantinha" />
      <img className="fotos" src="/assets/image15.png" alt="reciclavel" />
      <img className="fotos" src="/assets/image17.png" alt="caminha de lixo" />
    </div>
  );
}

export default Sobre;