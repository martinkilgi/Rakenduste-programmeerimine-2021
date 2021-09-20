import React from 'react'
import {useState} from 'react'

function Fun({magicNumber, setMagicNumber, amount = 1, show, setShow}) {

    const [counter, setCounter] = useState(0);
    

    function increaseCounter() {
        setCounter(counter + 1);
    }

    function decreaseCounter() {
        setCounter(counter - 1);
    }


    function resetCounter() {
        setCounter(0);
    }
    
    const increaseMagicNumber = () => {
        setMagicNumber(magicNumber + amount);
    }


    return (
        <>
            <h1>FUN</h1>
            <h2>{counter}</h2>
            <button onClick={increaseCounter}>Increase</button>
            <button onClick={decreaseCounter}>Decrease</button>
            <button onClick={increaseMagicNumber}>Add {amount} to magic Number!</button>
            <button onClick={() => setCounter(0)}>Reset</button>
            <button onClick={() => setShow(!show)}>Show</button>
        </>    
    
    )
}

export default Fun;