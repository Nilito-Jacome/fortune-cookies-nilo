import FortuneCard from "./components/FortuneCard";
import phrases from "./assets/data/phrases.json";
import "./App.css";
import fondo1 from "./assets/img/fondo1.jpg";
import fondo2 from "./assets/img/fondo2.jpg";
import fondo3 from "./assets/img/fondo3.jpg";
import fondo4 from "./assets/img/fondo4.jpg";
import { useState } from "react";

const Background = [fondo1, fondo2, fondo3, fondo4];

/*
  const names = ["Denis", "Vinicio", "Yenni", "Francisco"]
  console.log( Math.floor(Math.random() * names.length))
  */

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
    <div className="App">
      <h1 className="title">
        CONOCE TU FORTUNA
      </h1>
            
      <div className="image">
        <img src={`${imgBack}`} />
      </div>
      
      <div className="card">
        <FortuneCard phraseData={phraseData} />
      </div>
        
      <div className="Buttons">
        <button onClick={change}>Presiona</button>
      </div>
      
    </div>
  );
}

export default App;
