import React, { useState } from 'react';
import { GIFS_AND_LINKS } from './helpers/gifs';
import './styles.css';

const App: React.FC = () => {
  const [currentPainel, setCurrentPainel] = useState<'1' | '2' | '3'>('1');

  const fuja = () => {
    const botaoNao = document.getElementById('nao');

    if (botaoNao) {
      const larguraJanela = window.innerWidth;
      const alturaJanela = window.innerHeight;

      const maxX = larguraJanela - (botaoNao.offsetWidth || 0);
      const maxY = alturaJanela - (botaoNao.offsetHeight || 0);

      const aleatorioX = Math.floor(Math.random() * maxX);
      const aleatorioY = Math.floor(Math.random() * maxY);

      if (botaoNao.style) {
        botaoNao.style.left = aleatorioX + 'px';
        botaoNao.style.top = aleatorioY + 'px';
      }
    }
  };

  const exibirPedido = () => {
    return (
      <div className="conteudo1">
        <h2 className="title1">Feliz Dia dos Namorados</h2>

        <a
          className="main-link"
          href="https://www.youtube.com/watch?v=D2tl4ZQZE44"
          target="_blank"
        >
          <img
            className="main-gif"
            src="https://tenor.com/pt-BR/view/tkthao219-bubududu-gif-25153986.gif"
            alt="Gif"
          />
        </a>

        <div className="footer1">
          <h3 className="title2">Aceita continuar namorando comigo? </h3>

          <div className="divButtons">
            <button id="sim" onClick={() => setCurrentPainel('2')}>
              Sim!
            </button>
            <button id="nao" onMouseOver={fuja}>
              Não!
            </button>
          </div>
        </div>
      </div>
    );
  };

  const exibirVideo = () => {
    return (
      <video width="500px" height="500px" controls>
        <source
          src="https://github.com/iigorfelipe/portfolio-ts/assets/87145566/ee5caa30-a985-4d90-a49d-e8a102231687"
          type="video/mp4"
        />
      </video>
    );
  };

  return (
    <div className="wrapper">
      <div className="div1">
        <div className="gif-container">
          {GIFS_AND_LINKS.dudus.map(({ gif, link }) => (
            <a key={link + gif} href={link} target="_blank" className="gifs">
              <img src={gif} alt="Gif Bubu" />
            </a>
          ))}
        </div>
      </div>

      <div className="div2">
        <div className="painel">
          {currentPainel === '1' ? exibirPedido() : exibirVideo()}
        </div>
      </div>

      <div className="div3">
        <div className="gif-container">
          {GIFS_AND_LINKS.cats.map(({ gif, link }) => (
            <a key={link + gif} href={link} target="_blank" className="gifs">
              <img src={gif} alt="Gif Cat" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
