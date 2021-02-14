import Button from './components/Button'
import Headline from './components/Headline'
import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react';
import './App.css';



function App() {

  var [sus,setSus] = useState(['hey','servus'])
  
  const list = sus.map(element=>{
    return <li>{element}</li>
  })
  const onClick = () => {
   // const newValue = sus.filter((su) => su != 'hey');
    const clone = [...sus,2]
    setSus(clone)
  }
  return (
    <div className="App">
      <ul>
        <li className="hey">
          {list}
        </li>
      </ul>
      <button onClick={onClick}>hey</button>
      <Button/>
    </div>
  );
}

export default App;
