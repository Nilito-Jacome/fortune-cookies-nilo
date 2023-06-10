import FortuneCard from "./components/FortuneCard";
import FortuneCard2 from "./components/FortuneCard2";
import phrases from "./assets/data/phrases.json";
import "./App.css";
import fondo1 from "/fondo1.jpg";
import fondo2 from "/fondo2.jpg";
import fondo3 from "/fondo3.jpg";
import fondo4 from "/fondo4.jpg";
import { useState } from "react";
import React from "react";

const Background = [fondo1, fondo2, fondo3, fondo4];

function App() {

  const numero = Math.floor(Math.random() * phrases.length);
  const [phraseData, setPhraseData] = useState(phrases[numero]);
  const [imgBack, setImgBack] = useState(Background[0]);

  const change = () => {
    const numbeRan = Math.floor(Math.random() * Background.length);
    setImgBack(Background[numbeRan]);
    const newNumber = Math.floor(Math.random() * phrases.length);
    setPhraseData(phrases[newNumber]);
  };

  return (
    <div className="App" style={{ backgroundImage: `url(${imgBack})` }}>
      <div className="title">CONOCE TU FORTUNA</div>

      <container className="contenedor">
        <div className="card">
          <FortuneCard phraseData={phraseData} />
        </div>
      </container>
      <div className="card2">
        Author
        <FortuneCard2 phraseData={phraseData} />
      </div>

      <div className="Buttons">
        <button onClick={change}>!Dale! Presiona</button>
      </div>
    </div>
  );
}

export default App;

{
  /*
      <div>
        <img src={`${imgBack}`} />
      </div>

style={{ backgroundImage: `url(${imgBack})`}}

<img src="/fondo1.jpg" alt="" />

*/
}
