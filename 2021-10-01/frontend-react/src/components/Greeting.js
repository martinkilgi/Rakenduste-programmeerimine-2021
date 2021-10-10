import React, {useState} from "react"

const Greeting = ({ name, age }) => {

  const [info, setInfo] = useState();
  const [toggleNameAge, setToggleNameAge] = useState();
  const [toggleInfo, setToggleInfo] = useState();

  return (
    <>
      <h1>Nimi: { name }</h1>
      <h1>Vanus: { age }</h1>
      <br />
      <input type="text" onChange={e => setInfo(e.target.value)} />
      <br />
      <button onClick={() => setToggleNameAge(!toggleNameAge)}> Toggle name and age </button>
      <button onClick={() => setToggleInfo(!toggleInfo)}> Toggle info </button>
      {
        toggleNameAge ? <h2>Nimi ja vanus: {age} {name} </h2> : <h2>Vajuta "Toggle name and age" nuppu</h2>
      }
      <br />
      {
        toggleInfo ? <h2>Info: {info} </h2> : <h2>Vajuta "Toggle info" nuppu</h2>
      }
      
    </>
  )
}

export default Greeting