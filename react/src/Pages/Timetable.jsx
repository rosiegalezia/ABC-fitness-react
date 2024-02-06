import classes from '../assets/ClassData/classes.json'
import fitnessclass from '../Components/Class.jsx'

// import TimeTable from "react-timetable-events";

function Timetable() {
    // Body
    return <div>
        <h2 className="p-5">View our class timetable below</h2>

        

        <div className="timetable mx-5">
            <table className=''>
                <tr className=''>
                    <th></th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                    <th>Sunday</th>
                </tr>

                <tr>
                    <th>morning</th>
                    <td>class 1</td>
                </tr>

                <tr>
                    <th>afternoon</th>
                    <td>class 2</td>
                </tr>

                <tr>
                    <th>evening</th>
                    <td>class 3</td>
                </tr>
                {/* {classData.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.name}</td>
                            <td>{val.description}</td>
                            <td>{val.instructor}</td>
                        </tr>
                    )
                })} */}
            </table>
        </div>

    </div>
}

export default Timetable;