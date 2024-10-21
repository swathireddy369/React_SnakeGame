
import './App.css';
import { useState } from "react";
import Board from './components/Board';

function App() {
  let [hasGameStarted, setHasGameStarted] = useState(false);
  let [dir, setDir] = useState("right");
  const handleKeyPress = (e) => {
    console.log("-----", e);
    e.preventDefault();

    if (e.code === " " || e.code === "Space") {
      console.log("fdgfgfhgfh");

      setHasGameStarted(true)
    } else {
      switch (e.key) {
        case "ArrowUp":
          dir = "UP"
          break;
        case "ArrowDown":
          dir = "Down"
          break;
        case "Arrowright":
          dir = "right"
          break;
        case "ArrowLeft":
          dir = "Left"
          break;
        default:
          break;

      }
    }

  };
  const stopGame = () => {
    setHasGameStarted(false);
  }
  return (
    <div className="App" onKeyDown={handleKeyPress} tabIndex="0">
      <>
        <Board hasGameStarted={hasGameStarted} dir={dir} stopGame={stopGame} />
        <footer className="footer_text">Developed By:Swathi Amaravadi</footer>
      </>
    </div>
  );
}

export default App;
