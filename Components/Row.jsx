import { useState } from "react"
// ON THIS PAGE, WE'RE TRYING TO FACT CHECK
function Row(props) {
    let wordInput = props.word // To refer to props.word more quickly
    let wordAnswer = props.answer // To refer to the answer more quickly.
    let rowReturn = undefined
    var wordLength
    //   worderAnswer = wordAnswer.map() // Turns a string into a map.
    if (wordInput != "" && wordInput != undefined) {
        wordLength = wordInput.length // To add blank space where necessary.
        for (let i = 0; i < 5 - wordLength; i++) {
            wordInput += " "
        }
        // Adds blank space so the grid starts out complete.
        wordLength = wordInput.length
        // Ensures that the word length is correct


        if (wordAnswer != undefined) {
            wordAnswer = wordAnswer.toUpperCase().split('').map((letter, index) => {
                return (letter)
            })

            // !!! ACTION REQUIRED !!!
            // finish the logic for checking the input vs the answer, and change color accordingly.
            if (wordLength == 5) {
                let colors = []
                let i = -1
                wordInput.split('').map((letter, index) => {
                    if (wordAnswer.includes(letter)) {
                        let ansLetIndex = wordAnswer.indexOf(letter, index)
                        let inputLetIndex = wordInput.indexOf(letter, index)
                        if (inputLetIndex == ansLetIndex) {
                            colors.push("green")
                        }
                        else {
                            colors.push("yellow")

                        }
                    }
                    else {
                        colors.push("gray")
                    }
                })
                if (colors.filter((color) => (color.includes("green"))).length == 5) {
                    props.checkCorrect(true)
                }
                return (<div className="rowBox">{wordLength == 5 ? wordInput.split('').map((letter, index) => {
                    i++
                    return (<button key={index} className={`${colors[i]} letterBox`}>{letter.toUpperCase()}</button>)
                }) : null}</div>)
            }
        }
        return (
            <div className="rowBox"> { /*styling*/}
                {/*If the word is valid*/} {wordLength == 5 ? wordInput.split('').map((letter, index) => {
                    {/*split the word into an array and map it*/ }
                    return (<><button key={index} className={`letterBox`}>{letter.toUpperCase()}</button></>)

                }) // The final return
                    // IF this guess has not been made yet, return a blank row.
                    : wordInput.map((letter, index) => (<button key={index} className={` letterBox`}>{wordAnswer}</button>))}
            </div>
        )

    }
    else {
        return (<div className="rowBox">
            <button className={`letterBox`} key={1}> </button>
            <button className={`letterBox`} key={2}> </button>
            <button className={`letterBox`} key={3}> </button>
            <button className={`letterBox`} key={4}> </button>
            <button className={`letterBox`} key={5}> </button>
        </div>
        )
    }
}

export default Row