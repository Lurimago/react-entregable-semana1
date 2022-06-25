import './App.css'
import quotes from './quotes.json';
import Users from './components/Users';
import Authors from './components/Authors';
import Button from './components/Button';
import QuoteIcon from './components/QuoteIcon';
import { useState } from 'react';


function App() {

  const colors = ["#845ec2", "#d65db1", "#ff6f91", "#ff9671", "#ffc75f", "#f9f871"]
  const random = Math.floor(Math.random() * quotes.length);
  const [index, setIndex] = useState(random)
  const changeUser = () => {
    const random = Math.floor(Math.random() * quotes.length);
    setIndex(random)
  }
  const randomColorIndex = Math.floor(Math.random() * colors.length);
  const color = colors[randomColorIndex]
  document.body.style = `background: ${color}`
  return (
    <div className="App">
      <div className="QuoteBox" style={{backgroundColor: "#FFF"}}>
      <QuoteIcon
          color={color}
        />
        <Users
          quotes={quotes}
          index={index}
        />
        <Authors
          quotes={quotes}
          index={index}
        />
         <Button
          color={color}
          changeUser={changeUser}
        />
      </div>
    </div>
  )
}
export default App