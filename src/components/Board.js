
import { useState } from "react"
import Instructions from "./Instructions"
import "./style.css"
import Snake from "./Snake";
import Food from './Food';
export default function Board({ handleKeyPress, hasGameStarted, stopGame }) {
    console.log("---------------------", hasGameStarted);

    let [currentScore, setCurrScore] = useState(0);
    let [highScore, setHighScore] = useState(0);
    const [snake, setSnake] = useState([{ x: 10, y: 10 }]);

    const move = (dir) => {
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
        if (snakeHead.x <= 0 || snakeHead.y <= 0 || snakeHead.x === 20 || snakeHead.y === 20) {
            stopGame();
            resetGame();

        }
        for (let i = 1; i < snake.length; i++) {
            let current = snake[i]

            if (snakeHead.x <= current.x && snakeHead.y === current.y) {
                resetGame()
            }
        }
    }
    const resetGame = () => {

    }
    //food move
    //non food move
    //update score
    const updateScore = () => {

    }
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
            <div id="highScore">

                {highScore.toString().padStart(3, '0')}
            </div>
        </div>
        <div className="border1">
            <div className="border2">
                <div className="border3">
                    <div id="box">
                        {hasGameStarted ? (<>
                            {snake.map((pixel, index) => (

                                <Snake pixel={pixel} />

                            ))}

                            <Food pixel={food} />


                        </>) : <Instructions />}
                    </div>
                </div>
            </div>
        </div>
    </div>
}