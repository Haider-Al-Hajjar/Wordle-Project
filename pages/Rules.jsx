import { useNavigate, useParams } from "react-router-dom"
function Rules() {
    const navigate = useNavigate();
    return (
        <>
            <h3>How To Play
                Guess the Wordle in 6 tries.
                Each guess must be a valid 5-letter word.
                The color of the tiles will change to show how close your guess was to the word.
                Examples
                Wordy
                W is in the word and in the correct spot.
                Bright
                I is in the word but in the wrong spot.
                Loopy
                U is not in the word in any spot.</h3>
            <button className="b3 green" onClick={e => navigate("/Game")}>Play</button>
        </>
    )
}
export default Rules