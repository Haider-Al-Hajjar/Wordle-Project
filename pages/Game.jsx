import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Wordbank from "../Components/Wordbank"
import '../src/App.css'
import '../src/Game.css'
function getNewWord() {
    const wordBank = Wordbank()
    return (wordBank)
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
            TEST
            <div className="wordleTable">
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
        </>
    )
}
export default Game

