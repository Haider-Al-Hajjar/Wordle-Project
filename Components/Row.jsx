import { useState } from "react"
// ON THIS PAGE, WE'RE TRYING TO FACT CHECK
function Row(props) {
    let wordInput = props.word // To refer to props.word more quickly
    let wordAnswer = props.answer // To refer to the answer more quickly.
    worderAnswer = wordAnswer.map() // Turns a string into a map.
    var color = "" // To color the answer correctly
    let wordLength = wordInput.length // To add blank space where necessary.
    //    console.log(wordInput, 5 - wordInput.length, props.word, "word") / To test if everything is working right.
    for (let i = 0; i < 5 - wordLength; i++) {
        wordInput = [...wordInput, ""]
    } // Adds blank space so the grid starts out complete.
    return (
        <div className="rowBox"> { /*styling*/}
            {/*If the word is valid*/} {wordLength == 5 ? wordInput.split("").map((letter, index) => {
                {/*split the word into an array and map it*/ }
                if (!(wordAnswer.has(letter))) {
                    {/*!!!ACTION REQUIRED!!!*/ }
                    {/*Color the boxes appropriately*/ }
                    {/*!!!ACTION REQUIRED!!!*/ }
                }
                return (<><button key={index} className={`${color} letterBox`}>{letter.toUpperCase()}</button></>)
            }) // The final return
                // IF this guess has not been made yet, return a blank row.
                : wordInput.map((letter, index) => (<button key={index} className={`letterBox`}></button>))}
        </div>
    )
}

export default Row