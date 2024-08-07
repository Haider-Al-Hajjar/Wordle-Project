import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Wordbank from "../Components/Wordbank"
import '../src/App.css'
import '../src/Game.css'
import Row from "../Components/Row"
import GameOptions from "../Components/GameOptions"

function Game() {
    // Functions
    // Relating to the typed word.
    function getNewWord(hardMode) { // Fetches answer from wordbank.
        if (!hardMode) {
            const wordBank = Wordbank()
            initialRun = false
            return (wordBank)
        }
        else {
            let randomNumber = Math.floor(Math.random() * (failedWords.length - 1 + 1))
            //(min, max) => {
            //    return Math.floor(Math.random()    * (max - min + 1)) + min;

            return ([failedWords[randomNumber]])
        }
    }

    function type(input) { // Types a character
        if (gameOver) {
            alert("Alas, my friend, you have already made six guesses. Next time, you've got this.")
        }
        else if (row <= 5) {
            if (letter <= 4) {
                setActiveWord(activeWord + input)
                setLetter(letter + 1)
            }
            else {
                alert("You have already typed 5 letters. Hit delete to change your answer")
            }
        }
        else if (correct) {
            alert("You already won! Hit new game to try again.")
        }
    }

    function backspace() { // Deletes a character.
        if (gameOver) {
            alert("Alas, my friend, you have already made six guesses. Next time, you've got this.")
        }
        else if (row <= 5) {
            if (letter != 0) {
                setLetter(letter - 1)
                setActiveWord(activeWord.substring(0, activeWord.length - 1))
            }
        }
    }
    // Relating to progression
    function enter() { // Submits a word
        if (gameOver) {
            alert("Alas, my friend, that was your sixth and final guess. Next time, you've got this.")
            return
        }
        else if (letter < 5) {
            alert("You have not typed out five letters.")
            return
        }
        else {
            if (row == 0) {
                setGuess([activeWord])
            }
            else {
                setGuess([...guess, activeWord])
            }
            if (row <= 5) {
                setActiveWord("")
                setLetter(0)
                setRow(row + 1)
            }
            else if (correct) {
                alert("You already won! Hit new game to play agian.")
                return
            }
        }
        let guessLetters = activeWord.split('')
        let ansLetters = word.toUpperCase().split('')
        let matches = 0
        for (let i = 0; i < guessLetters.length; i++) {
            if (ansLetters[i] == guessLetters[i]) {
                matches++
            }
        }
        if (matches == 5) {
            if (row == 1) {
                alert("Congratulations, you won in " + (row + 1) + " guess!")
            }
            else {
                alert("Congratulations, you won in " + (row + 1) + " guesses!")
            }
            setScores(scores.map((scores, index) => {
                if (index == row) {
                    return (scores + 1)
                }
                else {
                    return (scores)
                }
            }))
            setStreak(streak + 1)
        }
        else if (row >= 5) {
            alert("Alas, my friend, you have already made six guesses. Next time, you've got this.")
            setGameOver(true)
            setFailedWords([...failedWords, word])
            setStreak(0)
        }
    }

    function checkCorrect(validity) {// Checks the submissions's validity
        setCorrect(validity)
    }



    function newGame() {
        initialWord = getNewWord(hardMode)
        setWord(initialWord[0])
        setDef(initialWord[1])
        setRow(0)
        setLetter(0)
        setGuess(["", "", "", "", "", ""])
        setCorrect(false)
        setActiveWord("")
        setGameOver(false)
        setHint(false)
    }

    function toggleHint() {// Shows/hides the hint
        if (!hint) {
            setHint(true)
        }
        else {
            setHint(false)
        }
    }

    function toggleSettings() {// Shows/hides the Settings
        if (!showSettings) {
            setShowSettings(true)
        }
        else {
            setShowSettings(false)
        }
    }

    const navigate = useNavigate()
    //
    // Variables
    // Variables relating to the typed word
    let initialRun = true
    let initialWord = getNewWord()
    const [word, setWord] = useState(initialWord[0]), [def, setDef] = useState(initialWord[1])
    const [row, setRow] = useState(0), [letter, setLetter] = useState(0)
    const [guess, setGuess] = useState(["", "", "", "", "", ""])  // When someone enters a guess, it goes here.
    const [correct, setCorrect] = useState(false)
    const [activeWord, setActiveWord] = useState("") // If somebody be typing, this is where it'll go
    // Variables relating to progress
    const [gameOver, setGameOver] = useState(false)
    const [streak, setStreak] = useState(0)
    const [scores, setScores] = useState([0, 0, 0, 0, 0, 0])
    const [failedWords, setFailedWords] = useState([])
    //Variables related to showing things.
    const [hint, setHint] = useState(false)
    const [showSettings, setShowSettings] = useState(false)
    const [hardMode, setHardMode] = useState(false)
    const [showGearTip, setShowGearTip] = useState(true)
    return (
        <>

            <button onClick={() => {
                toggleSettings(showSettings)
            }} style={{
                position: "fixed", top: 0, right: 0, paddingTop: 10, paddingBottom: 10
            }}> ⚙️</button>
            {showSettings ? <GameOptions scores={scores} newGame={newGame} hardMode={hardMode} setHardMode={setHardMode} /> : null}
            <button onClick={() => { // Summons a new word.
                let newWord = getNewWord()
                newWord[0] = newWord[0].toUpperCase()
                setWord(newWord[0])
                setDef(newWord[1])
            }}>Current word: {word.toUpperCase()}</button>

            <div className="wordleTable padding-big"> {/*Wordle Table*/}
                <p className="title">Current Streak: {streak} </p>
                <p className="title">Current Guess: {row} </p>
                <p className="subtitle">Lower scores are better!</p>
                <h3 >{!gameOver ? null : <>The word was: {word}</>}</h3>
                <div className="row">
                    {row != 0 ? <Row id={0} word={guess[0]} checkCorrect={checkCorrect} answer={word} key={row} /> : <Row word={activeWord} key={row} />} {/*Wordle row. Starts empty, fills on guess.*/}
                </div>
                <div className="row">
                    {row != 1 ? <Row id={1} word={guess[1]} checkCorrect={checkCorrect} answer={word} key={row} /> : <Row word={activeWord} key={row} />}
                </div>
                <div className="row">
                    {row != 2 ? <Row id={2} word={guess[2]} checkCorrect={checkCorrect} answer={word} key={row} /> : <Row word={activeWord} key={row} />}
                </div>
                <div className="row">
                    {row != 3 ? <Row id={3} word={guess[3]} checkCorrect={checkCorrect} answer={word} key={row} /> : <Row word={activeWord} key={row} />}
                </div>
                <div className="row">
                    {row != 4 ? <Row id={4} word={guess[4]} checkCorrect={checkCorrect} answer={word} key={row} /> : <Row word={activeWord} key={row} />}
                </div>
                <div className="row">
                    {row != 5 ? <Row id={5} word={guess[5]} checkCorrect={checkCorrect} answer={word} key={row} /> : <Row word={activeWord} key={row} />}
                </div>
                {(gameOver || correct) ? <button onClick={() => {
                    newGame()
                }}> New game? </button> : null}
            </div>
            {row >= 3 && !hardMode ?
                <button onClick={() => toggleHint()} >
                    Click to toggle hint.
                    <br></br>
                    {hint ? def : null}
                </button >
                : null
            }
            <button onClick={() => setWord("Error")}>Set word to "Error"</button>
            <button onClick={() => (setRow(row + 1))}>Increment row: {row}</button>
            <button onClick={() => (setLetter(5))}>Set Letter to 5: {letter}</button>
            {showGearTip ? <p style={{ padding: 20 }} onClick={() => { setShowGearTip(false) }}>Hit the gear icon in the top right corner to see your scores, and to change the game mode! (Click to dismiss) </p> : <> <br /> <br /></>}

            <div className="keyboard padding-big">
                <div className="key-row"> {/*keyboard!*/}
                    <button onClick={() => type("Q")}>Q</button>
                    <button onClick={() => type("W")}>W</button>
                    <button onClick={() => type("E")}>E</button>
                    <button onClick={() => type("R")}>R</button>
                    <button onClick={() => type("T")}>T</button>
                    <button onClick={() => type("Y")}>Y</button>
                    <button onClick={() => type("U")}>U</button>
                    <button onClick={() => type("I")}>I</button>
                    <button onClick={() => type("O")}>O</button>
                    <button onClick={() => type("P")}>P</button>
                </div>
                <br></br>
                <div className="key-row">
                    <button onClick={() => type("A")}>A</button>
                    <button onClick={() => type("S")}>S</button>
                    <button onClick={() => type("D")}>D</button>
                    <button onClick={() => type("F")}>F</button>
                    <button onClick={() => type("G")}>G</button>
                    <button onClick={() => type("H")}>H</button>
                    <button onClick={() => type("J")}>J</button>
                    <button onClick={() => type("K")}>K</button>
                    <button onClick={() => type("L")}>L</button>
                </div>
                <br></br>
                <div className="key-row">
                    <button style={{ backgroundColor: "darkgreen" }} onClick={() => enter()}>Ent</button>
                    <button onClick={() => type("Z")}>Z</button>
                    <button onClick={() => type("X")}>X</button>
                    <button onClick={() => type("C")}>C</button>
                    <button onClick={() => type("V")}>V</button>
                    <button onClick={() => type("B")}>B</button>
                    <button onClick={() => type("N")}>N</button>
                    <button onClick={() => type("M")}>M</button>
                    <button style={{ backgroundColor: "darkred" }} onClick={() => backspace()}>Del</button>
                </div>
            </div>
        </>
    )
}
export default Game

