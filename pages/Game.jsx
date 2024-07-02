import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Wordbank from "../Components/Wordbank"
import '../src/App.css'
import '../src/Game.css'

function Game() {
    function getNewWord() {
        const wordBank = Wordbank()
        return (wordBank)
    }
    function type(input) {

        if ((letter <= 4)) {
            if ((row <= 5)) {
                if (lastPressed == "delete") {
                    grid[row][letter + 1] = input
                }
                else {
                    grid[row][letter] = input
                }
                setLastPressed("letter")
                if (letter <= 4) {
                    if (lastPressed == "delete") {
                        setLetter(letter + 2)
                    }
                    else {
                        setLetter(letter + 1)
                    }
                }
            }
            else {
                console.log(row)
                alert("You have already made 6 guesses, the game is over.")
            }
        }
        else {
            alert("You ahve already typed 5 letters. Hit delete to change your answer")
        }
    }
    function backspace() {
        console.log(letter)
        if (letter == 5) {
            setLetter(letter - 2)
            grid[row][4] = ""
            setLastPressed("delete")
        }
        else {
            if (lastPressed == "delete") {
                if (letter >= 0) {
                    setLetter(letter - 1)
                } grid[row][letter] = ""
            }
            else if (lastPressed == "letter") {
                grid[row][letter - 1] = ""
                setLastPressed("delete")
                setLetter(letter - 2)
            }
            else {
                grid[row][letter] = ""
                setLastPressed("delete")
            }
        }
    }
    function enter() {
        grid[row].map(letter => {
            if (word.indexOf(letter) == -1) {
                while (grid[row].indexOf(letter) != -1) {

                }
            }
            if (word.indexOf(letter) != -1) {
                console.log("letter exists!", word.indexOf(letter))
            }

        });
    }
    const navigate = useNavigate()
    const [word, setWord] = useState(), [def, setDef] = useState()
    const [row, setRow] = useState(0), [letter, setLetter] = useState(0)
    const [grid, setGrid] = useState([[], [], [], [], [], []])
    const [lastPressed, setLastPressed] = useState(false)

    return (
        <>
            <button onClick={() => {
                let newWord = getNewWord()
                newWord[0] = newWord[0].toUpperCase()
                setWord(newWord[0])
                setDef(newWord[1])
            }}>Get new word</button>
            {word}, {def}
            <div className="wordleTable padding-big">
                <button id="r0l0" className="letterBox">{grid[0][0]}</button> <button id="r0l1" className="letterBox">{grid[0][1]}</button> <button id="r0l2" className="letterBox">{grid[0][2]}</button> <button id="r0l3" className="letterBox">{grid[0][3]}</button> <button id="r0l4" className="letterBox">{grid[0][4]}</button>
                <br></br>
                <br></br>
                <button id="r1l0" className="letterBox">{grid[1][0]}</button> <button id="r1l1" className="letterBox">{grid[1][1]}</button> <button id="r1l2" className="letterBox">{grid[1][2]}</button> <button id="r1l3" className="letterBox">{grid[1][3]}</button> <button id="r1l4" className="letterBox">{grid[1][4]}</button>
                <br></br>
                <br></br>
                <button id="r2l0" className="letterBox">{grid[2][0]}</button> <button id="r2l1" className="letterBox">{grid[2][1]}</button> <button id="r2l2" className="letterBox">{grid[2][2]}</button> <button id="r2l3" className="letterBox">{grid[2][3]}</button> <button id="r2l4" className="letterBox">{grid[2][4]}</button>
                <br></br>
                <br></br>
                <button id="r3l0" className="letterBox">{grid[3][0]}</button> <button id="r3l1" className="letterBox">{grid[3][1]}</button> <button id="r3l2" className="letterBox">{grid[3][2]}</button> <button id="r3l3" className="letterBox">{grid[3][3]}</button> <button id="r3l4" className="letterBox">{grid[3][4]}</button>
                <br></br>
                <br></br>
                <button id="r4l0" className="letterBox">{grid[4][0]}</button> <button id="r4l1" className="letterBox">{grid[4][1]}</button> <button id="r4l2" className="letterBox">{grid[4][2]}</button> <button id="r4l3" className="letterBox">{grid[4][3]}</button> <button id="r4l4" className="letterBox">{grid[4][4]}</button>
                <br></br>
                <br></br>
                <button id="r5l0" className="letterBox">{grid[5][0]}</button> <button id="r5l1" className="letterBox">{grid[5][1]}</button> <button id="r5l2" className="letterBox">{grid[5][2]}</button> <button id="r5l3" className="letterBox">{grid[5][3]}</button> <button id="r5l4" className="letterBox">{grid[5][4]}</button>
            </div>
            <br></br>
            <br></br>
            <button onClick={() => setWord("FIRES")}>Set word to "Fires"</button>
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
                    <button onClick={() => enter()}>Ent</button>
                    <button onClick={() => type("T")}>T</button>
                    <button onClick={() => type("U")}>U</button>
                    <button onClick={() => type("V")}>V</button>
                    <button onClick={() => type("W")}>W</button>
                    <button onClick={() => type("X")}>X</button>
                    <button onClick={() => type("Y")}>Y</button>
                    <button onClick={() => type("Z")}>Z</button>
                    <button onClick={() => backspace()}>Del</button>
                </div>
            </div>
        </>
    )
}
export default Game

