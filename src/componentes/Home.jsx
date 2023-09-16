import React from 'react';
import './Home.css'

function Home() {
  return (
    <div>
      <div>
        <img id="banner" src="./assets/image1.png" alt="banner" />
      </div>

      <div className="container">
        <img src="./assets/image20.png" alt="foto de sp" className="image1" />
        <p>
          A maioria das pessoas enfrenta a dificuldade de encontrar maneiras
          eficazes e convenientes de descartar o lixo. O lixo frequentemente se
          acumula em locais inapropriados, levando a problemas de saúde e
          ambientais. Além disso, muitas pessoas não têm acesso a serviços de
          coleta de lixo adequados, o que pode levar a uma maior acumulação de
          lixo e ao surgimento de animais e insetos nocivos.
        </p>
      </div>

      <div className="container">
        <p>
          Outro problema enfrentado pela sociedade é a poluição causada pela
          coleta de lixo inadequada. A queima de lixo e a disposição inadequada
          de resíduos podem levar à poluição do ar e do solo, o que pode ter
          impactos negativos na saúde humana e na qualidade de vida.
        </p>
        <img src="./assets/image19.png" alt="planta" className="image2" />
      </div>

      <div className="container">
        <img src="/assets/image18.png" alt="lixo" className="image1" />
        <p>
          Nós também usamos tecnologia inovadora para ajudar a tornar a coleta
          de lixo mais eficiente, reduzindo a quantidade de lixo que é descartada
          inadequadamente e minimizando os impactos negativos na saúde humana e no
          meio ambiente.
        </p>
      </div>
    </div>
  );
}

export default Home;