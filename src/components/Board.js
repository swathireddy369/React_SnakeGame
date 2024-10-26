
import { useState, useEffect } from "react"
import Instructions from "./Instructions"
import "./style.css"
import Snake from "./Snake";
import Food from './Food';
export default function Board({ handleKeyPress, hasGameStarted, stopGame, dir }) {
    let [currentScore, setCurrScore] = useState(0);
    let [highScore, setHighScore] = useState(0);
    let [snake, setSnake] = useState([{ x: 10, y: 10 }]);
    let [gameSpeedDelay, setGameSpeedDelay] = useState(280);
    let [flag,setFlag]=useState(false)

    useEffect(() => {
        const interval = setInterval(move, gameSpeedDelay);
        return (() => clearInterval(interval));
    })
    const move = () => {
        if (!hasGameStarted) return;
        const snakeHead = { ...snake[0] }
        if (dir === "Up") {
            snakeHead.x--;
        }
        else if (dir === "Right") {
            snakeHead.y++;
        } else if (dir === "Down") {
            snakeHead.x++;
        } else {
            snakeHead.y--;
        }


        if (snakeHead.x <1  || snakeHead.y < 1 || snakeHead.x > 21 || snakeHead.y > 21) {
            resetGame();
            return;
        }
        for (let i = 1; i < snake.length; i++) {
            let current = snake[i]
            if (snakeHead.x === current.x && snakeHead.y === current.y) {
              resetGame()
                return;
            }
        }
        let newSnake = [...snake]
      
        newSnake.unshift(snakeHead);
        if (snakeHead.x === food.x && snakeHead.y === food.y) {
            setFood(generatefood())
            increaseSpeed()
        } else {
            newSnake.pop()
        }
        setCurrScore(newSnake.length - 1)
        setSnake(newSnake);
    }
    const increaseSpeed = () => {
    console.log(gameSpeedDelay);
  if (gameSpeedDelay > 150) {
    gameSpeedDelay -= 9;
  } else if (gameSpeedDelay > 100) {
    gameSpeedDelay -= 5;
  } else if (gameSpeedDelay > 50) {
    gameSpeedDelay -= 3;
  } else if (gameSpeedDelay > 25) {
    gameSpeedDelay -= 2;
  }
  setGameSpeedDelay(gameSpeedDelay)
      // if(gameSpeedDelay > 150){
        // gameSpeedDelay -=20;
        // }else if(gameSpeedDelay > 100){
        //     gameSpeedDelay -= 10;
            
        // } else{
        //     gameSpeedDelay -= 5;
        // }
        // setGameSpeedDelay(gameSpeedDelay)

    }
    const resetGame = () => {
        setFlag(true)
        setSnake([{ x: 10, y: 10 }])
        setFood(generatefood())
        setHighScore(Math.max(highScore, currentScore))
        setCurrScore(0)
        setGameSpeedDelay(250)
        stopGame();
    }
    //food move
    //non food move
    //update score
    // const updateScore = () => {

    // }
    const generatefood = () => {
        let x = Math.floor(Math.random() * 20 + 1);
        let y = Math.floor(Math.random() * 20 + 1);

        return { x, y };
    }
    let [food, setFood] = useState(generatefood);
    return <div  >
        <div className="scores">
            <div id={"currentScore"}>
                {currentScore.toString().padStart(3, '0')}
            </div>
            {flag && !hasGameStarted &&(
                <div id="highScore">

                    {highScore.toString().padStart(3, '0')}
                </div>)}
        </div>
        <div className="border1">
            <div className="border2">
                <div className="border3">
                    <div id="box">
                        {hasGameStarted ? (<>
                            {snake.map((pixel, index) => (

                                <Snake key={index} pixel={pixel} />

                            ))}

                            <Food pixel={food} />


                        </>) : <Instructions />}
                    </div>
                </div>
            </div>
        </div>
    </div>
}