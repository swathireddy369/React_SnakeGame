
import './App.css';
import { useState } from "react";
import Board from './components/Board';

function App() {
  let [hasGameStarted, setHasGameStarted] = useState(false);
  let [dir, setDir] = useState("Right");
  const handleKeyPress = (e) => {
    e.preventDefault();

    if (e.code === " " || e.code === "Space") {
      setHasGameStarted(true)
    } else {
      
      if(dir === "Right" && e.key === "ArrowLeft"){
        e.preventDefault()
        
      }
      switch (e.key) {
        case "ArrowUp":
          if (dir !== 'Down') {
            setDir("Up")
          }
          
        
          break;
        case "ArrowDown":
          if (dir !== 'Up') {
            setDir("Down");
          }
         
          
          break;
        case "ArrowRight":
          if (dir !== 'Left') {
            setDir("Right");
          }
          
         
          break;
        case "ArrowLeft":
          if (dir !== 'Right') {
            setDir("Left");
          }
          
        
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
       
      </>
    </div>
  );
}

export default App;
