import { useState } from 'react'
import '../src/App.css'
import { useNavigate } from 'react-router-dom'

function Welcome() {
    const navigate = useNavigate();

    return (
        <>
            <h1>Welcome to SAT Wordle!
                <br></br>
                Play hard & study harder</h1 >
            <br></br>
            <button className='b1 green' onClick={e => navigate("/Game")}>Play</button>
            <br></br>
            <br></br>
            <button className='b3 gray' onClick={e => navigate("/Rules")}>Rules</button>
        </>
    )
}

export default Welcome
