import { useState } from "react"
// ON THIS PAGE, WE'RE TRYING TO FACT CHECK
function Row(props) {
    let wordInput = props.word // To refer to props.word more quickly
    let wordAnswer = props.answer // To refer to the answer more quickly.
    let rowReturn = undefined
    //   worderAnswer = wordAnswer.map() // Turns a string into a map.
    var color = "" // To color the answer correctly
    if (wordInput != "" && wordInput != undefined) {
        console.log(wordInput)
        let wordLength = wordInput.length // To add blank space where necessary.
        for (let i = 0; i < 5 - wordLength; i++) {
            wordInput += " "
        }
        // Adds blank space so the grid starts out complete.
        wordLength = wordInput.length
        // Ensures that the word length is correct

    }
    if (wordAnswer != undefined) {
        console.log(wordAnswer)
        wordAnswer = wordAnswer.toUpperCase().split('').map((letter, index) => {
            return (letter)
        })

        // !!! ACTION REQUIRED !!!
        // finish the logic for checking the input vs the answer, and change color accordingly.
        if (wordLength == 5) {
            let newWord = wordInput.split('').map((letter, index) => {
                return (letter)
            })
            console.log(newWord)
            newWord.map((letter, index) => {
                if (wordAnswer.includes(letter)) {
                    console.log(wordAnswer.indexOf(letter))
                }
                else {
                    console.log("Not in this word.")
                }

            })
        }
        return (
            <div className="rowBox"> { /*styling*/}
                {/*If the word is valid*/} {wordLength == 5 ? wordInput.split('').map((letter, index) => {
                    {/*split the word into an array and map it*/ }
                    return (<><button key={index} className={`${color} letterBox`}>{letter.toUpperCase()}</button></>)

                }) // The final return
                    // IF this guess has not been made yet, return a blank row.
                    : wordInput.map((letter, index) => (<button key={index} className={`${color} letterBox`}>{wordAnswer}</button>))}
            </div>
        )
    }
    else {
        return (<div className="rowBox">
            <button className={`${color} letterBox`}> </button>
            <button className={`${color} letterBox`}> </button>
            <button className={`${color} letterBox`}> </button>
            <button className={`${color} letterBox`}> </button>
            <button className={`${color} letterBox`}> </button>
        </div>
        )
    }
}

export default Row