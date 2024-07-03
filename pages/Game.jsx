import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Wordbank from "../Components/Wordbank"
import '../src/App.css'
import '../src/Game.css'
import Row from "../Components/Row"

function Game() {
    function getNewWord() { // Fetches from wordbank.
        const wordBank = Wordbank()
        return (wordBank)
    }
    // !!! ACTION REQUIRED !!!
    // this needs to be reworked
    function type(input) {
        setActiveWord(input)
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
    // !!! ACTION REQUIRED !!!
    // this needs to be reworked
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
    // !!! ACTION REQUIRED !!!
    // enter function does not work currently
    function enter() {
        guess[row] = "fire" + row
        setRow(row + 1)
    }
    const navigate = useNavigate()

    const [word, setWord] = useState(getNewWord()[0]), [def, setDef] = useState()
    const [row, setRow] = useState(0), [letter, setLetter] = useState(0)
    const [guess, setGuess] = useState(["", "", "", "", "", ""]) // When someone enters a guess, it goes here.
    const [activeWord, setActiveWord] = useState("") // If somebody be typing, this is where it'll go
    const [lastPressed, setLastPressed] = useState(false) // this may be deprecated
    return (
        <>
            <button onClick={() => { // Summons a new word.
                let newWord = getNewWord()
                newWord[0] = newWord[0].toUpperCase()
                setWord(newWord[0])
                setDef(newWord[1])
            }}>Current word: {word.toUpperCase()}</button>

            <div className="wordleTable padding-big"> {/*Wordle Table*/}
                <div className="row">
                    {row != 0 ? <Row word={guess[0]} answer={word} key={letter.id} /> : <Row word={activeWord} key={letter.id} />} {/*Wordle row. Starts empty, fills on guess.*/}
                </div>
                <div className="row">
                    {row != 1 ? <Row word={guess[1]} key={letter.id} /> : <Row word={activeWord} key={letter.id} />}
                </div>
                <div className="row">
                    {row != 2 ? <Row word={guess[2]} key={letter.id} /> : <Row word={activeWord} key={letter.id} />}
                </div>
                <div className="row">
                    {row != 3 ? <Row word={guess[3]} key={letter.id} /> : <Row word={activeWord} key={letter.id} />}
                </div>
                <div className="row">
                    {row != 4 ? <Row word={guess[4]} key={letter.id} /> : <Row word={activeWord} key={letter.id} />}
                </div>
                <div className="row">
                    {row != 5 ? <Row word={guess[5]} key={letter.id} /> : <Row word={activeWord} key={letter.id} />}
                </div>
            </div>
            <br></br>
            <br></br>
            <button onClick={() => setWord("FIRES")}>Set word to "Fires"</button>
            <br></br>
            <div className="keyboard padding-big">
                <div className="key-row"> {/*keyboard!*/}
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

