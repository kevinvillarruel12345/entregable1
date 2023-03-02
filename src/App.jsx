import React, { useState } from "react";
import usersData from './assets/data.json'
import Card from "./componentes/Card/Card";
import {randomNumber} from './utils/random'

const App = () => {
 
  const [indexUser, setIndexUser] = useState(randomNumber(0, usersData.length - 1));
  const changeUser = () => {
    const newIndex = randomNumber(0, usersData.length -1);
    setIndexUser(newIndex)
  }
  return (
  <div>
    <Card user={usersData[indexUser]}/>
    <button className="flex flex-col justify-center absolute inset-0  w-20 h-20 bg-green-50 rounded-full top-40 " onClick={changeUser}>Siguiente</button>
  </div>
  )
};

export default App;