import React from 'react';

function Greeting({name, gender, age}) {

    return (
        <div>
            <>
                <h1 className='blabla'>Greeting {name} {age} {gender}</h1>
                <p>Greeting text</p>
            </>
        </div>
    )
}

export default Greeting;