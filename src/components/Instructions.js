export default function Instructions(){
    return <>
    <div style={{display:"flex",
        flexDirection:"column",
        alignItems:"center",
        width:"400px",
        height:"400px"}}>
    <img  src={require("./snake-game-ai-gen.png")} alt="Snake logo" />
    <h4 id="instruction__text">Press Space Bar to start the game </h4>
    </div>
    </>
};