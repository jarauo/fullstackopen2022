import { useState } from 'react'

const Header = (props) => {
  return (
    <h1>{props.text}</h1>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const Stat = (props) => {
  return (
    <p>
      {props.text} {props.value}
    </p>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text="Give feedback" />
      <p>
        <Button text="Good" handleClick={() => setGood(good+1)} /> 
        <Button text="Neutral" handleClick={() => setNeutral(neutral+1)} /> 
        <Button text="Bad" handleClick={() => setBad(bad+1)}/>
      </p>
      <Header text="Statistics" />
      <Stat text="Good" value={good} /> 
      <Stat text="Neutral" value={neutral} /> 
      <Stat text="Bad" value={bad} />
    </div>
  )
}

export default App