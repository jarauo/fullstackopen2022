const Total = ({parts}) => {
    const initialValue = 0
    const total = parts.reduce((previous, current) => console.log("Testi:", previous, current.exercises ) || (previous+current.exercises), initialValue)

    return (
        <h2>total of {total} exercises</h2>
    )
}

export default Total