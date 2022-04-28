import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
  
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const vote = (number) => {
    let copyVotes = [...votes]
    copyVotes[number] += 1
    setVotes(copyVotes)
  }

  const rndNumber = () => {
    let number = Math.floor(Math.random() * anecdotes.length)
    //console.log(number)
    return number;
  }

  const indexOfMaxValue = () => {
    let copyVotes = [...votes]
    let maxIndex = 0

    for (var i = 0; i < copyVotes.length; i++) {
      if (copyVotes[i] > copyVotes[maxIndex]) {
        maxIndex = i
      }
    }
    
    return maxIndex
  }

  return (
    <div>
      {/*console.log("Votes ",votes)*/}
      {anecdotes[selected]}
      <div>
        <Button text="vote" handleClick={() => {vote(selected)}} />
        <Button text="next anecdote" handleClick={() => {setSelected(rndNumber)}} />
      </div>
      {anecdotes[indexOfMaxValue()]}
    </div>
  )
}

export default App
