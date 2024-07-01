import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Wordbank from "../Components/Wordbank"
import '../src/App.css'
import '../src/Game.css'
function getNewWord() {
    const wordBank = Wordbank()
    return (wordBank)
}
function type(letter) {
    console.log(letter)
}
function Game() {
    const navigate = useNavigate()
    const [word, setWord] = useState('')
    const [def, setDef] = useState('')
    return (
        <>
            {/* <button onClick={() => {      This code correctly gets a new word from the wordbank.
                const newWord = getNewWord()
                setWord(newWord[0])
                setDef(newWord[1])
            }}>Get new word</button>
            {word}, {def} */}
            <div className="wordleTable padding-big">
                <button className="b2"></button> <button className="b2"></button> <button className="b2"></button> <button className="b2"></button> <button className="b2"></button> <button className="b2"></button>
                <br></br>
                <br></br>
                <button className="b2"></button> <button className="b2"></button> <button className="b2"></button> <button className="b2"></button> <button className="b2"></button> <button className="b2"></button>
                <br></br>
                <br></br>
                <button className="b2"></button> <button className="b2"></button> <button className="b2"></button> <button className="b2"></button> <button className="b2"></button> <button className="b2"></button>
                <br></br>
                <br></br>
                <button className="b2"></button> <button className="b2"></button> <button className="b2"></button> <button className="b2"></button> <button className="b2"></button> <button className="b2"></button>
                <br></br>
                <br></br>
                <button className="b2"></button> <button className="b2"></button> <button className="b2"></button> <button className="b2"></button> <button className="b2"></button> <button className="b2"></button>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div className="keyboard padding-big">
                <div className="key-row">
                    <button onClick={() => type("A")}>A</button>
                    <button onClick={() => type("B")}>B</button>
                    <button onClick={() => type("C")}>C</button>
                    <button onClick={() => type("D")}>D</button>
                    <button onClick={() => type("E")}>E</button>
                    <button onClick={() => type("F")}>F</button>
                    <button onClick={() => type("G")}>G</button>
                    <button onClick={() => type("H")}>H</button>
                    <button onClick={() => type("I")}>I</button>
                    <button onClick={() => type("J")}>J</button>
                </div>
                <br></br>
                <div className="key-row">
                    <button onClick={() => type("K")}>K</button>
                    <button onClick={() => type("L")}>L</button>
                    <button onClick={() => type("M")}>M</button>
                    <button onClick={() => type("N")}>N</button>
                    <button onClick={() => type("O")}>O</button>
                    <button onClick={() => type("P")}>P</button>
                    <button onClick={() => type("Q")}>Q</button>
                    <button onClick={() => type("R")}>R</button>
                    <button onClick={() => type("S")}>S</button>
                </div>
                <br></br>
                <div className="key-row">
                    <button onClick={() => type("Enter")}>Ent</button>
                    <button onClick={() => type("T")}>T</button>
                    <button onClick={() => type("U")}>U</button>
                    <button onClick={() => type("V")}>V</button>
                    <button onClick={() => type("W")}>W</button>
                    <button onClick={() => type("X")}>X</button>
                    <button onClick={() => type("Y")}>Y</button>
                    <button onClick={() => type("Z")}>Z</button>
                    <button onClick={() => type("Backspace")}>Del</button>
                </div>
            </div>
        </>
    )
}
export default Game

