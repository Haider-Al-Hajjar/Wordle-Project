import React from 'react'

function GameOptions(props) {
    let truth = true
    let sum = props.scores.reduce((total, score) => {
        return (total + score)
    })
    let percents = props.scores.map((score, index) => {
        console.log(score / sum)
        if (score != 0) {
            return (
                Math.round(score / sum * 100)
            )
        }
        else {
            return (0)
        }
    })

    function toggleHardMode() {
        if (props.hardMode) {
            props.setHardMode(false)
        }
        else {
            props.setHardMode(true)
        }
    }

    return (
        <div>
            <p>
                <h3>Scores</h3>
                {truth ? percents.map((bar, index) => {
                    const Parentdiv = {
                        height: '1.5em',
                        width: '510px',
                        backgroundColor: 'whitesmoke',
                        borderRadius: 40,
                        margin: 13
                    }

                    const Childdiv = {
                        height: '100%',
                        width: `${bar}%`,
                        backgroundColor: 'blue',
                        borderRadius: 40,
                        textAlign: 'right'
                    }

                    const progresstext = {
                        padding: 10,
                        color: 'black',
                        fontWeight: 900
                    }
                    return (<div style={{ display: "flex" }}>
                        <h3 style={{ display: "container", alignItems: "center", margin: 10, fontsize: "18px" }}>{index + 1}</h3>
                        <div style={Parentdiv}>
                            <div style={Childdiv}>
                                <span style={progresstext}>{`${bar}%`}</span>
                            </div>
                        </div>
                    </div>
                    )
                }) : null}
            </p>
            <button onClick={() => { props.newGame() }} style={{ marginRight: 40 }}>
                New Game?
            </button>
            <button onClick={() => { toggleHardMode() }}>
                Restrict wordbank to {props.hardMode ? "Hard words" : "All Words"}?
            </button>
            <br />
            <i>Hard words are words you have previously failed</i>
        </div>
    )
}

export default GameOptions
