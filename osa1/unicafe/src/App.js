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

const Statistics = (props) => {
  if (props.stats.all !== 0) {
    return (
      <>
        <StatisticLine text="Good" value={props.stats.good} /> 
        <StatisticLine text="Neutral" value={props.stats.neutral} /> 
        <StatisticLine text="Bad" value={props.stats.bad} />
        <StatisticLine text="All" value={props.stats.all} />
        <StatisticLine text="Average" value={props.stats.avg} />
        <StatisticLine text="Positive" value={props.stats.pos} unit="%" />
      </>
    )
  } 
  return (
    <>
      No feedback given
    </>
  )
}

const StatisticLine = (props) => {
  return (
    <div>
      {props.text} {props.value} {props.unit}
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  let all = (good+neutral+bad)

  let avg = (good-bad)/all

  let pos = (good/all)*100

  let stats = {
    good: good,
    neutral: neutral,
    bad: bad,
    all: all,
    avg: avg,
    pos: pos
  }

  return (
    <div>
      <Header text="Give feedback" />
      <p>
        <Button text="Good" handleClick={() => setGood(good+1)} /> 
        <Button text="Neutral" handleClick={() => setNeutral(neutral+1)} /> 
        <Button text="Bad" handleClick={() => setBad(bad+1)}/>
      </p>
      <Header text="Statistics" />
      <Statistics stats={stats} />
    </div>
  )
}

export default App