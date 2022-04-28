import Header from "./Header"
import Content from "./Content"
import Total from "./Total"

const Course = ({name,parts}) => {
    //console.log("CourseComponent",name,parts)
    return (
        <li>
            <Header text={name} />
            <Content parts={parts} />
            <Total parts={parts} />
        </li>
    )
}

export default Course