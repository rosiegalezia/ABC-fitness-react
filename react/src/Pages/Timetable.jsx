import React from 'react';
import classes from '../assets/ClassData/classes.json'
import ClassCell from '../Components/ClassCell.jsx';


function Timetable() {

    // Mapping over the classes data to render classCell component in each cell
    const classCells = classes.map(cls => (
        <td key={cls.id}>
            <ClassCell
                name={cls.name}
                description={cls.description}
                instructor={cls.instructor}
                duration={cls.duration}
            />
        </td>
    ));

    // Body
    return <div className='timetable'>
        <h2 className="p-5">View our class timetable below</h2>

        <div className="container p-2 m-5 px-5">
                <table className="table">
                    <thead>
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
                    </thead>
                    <tbody>
                        <tr>
                            <th>Morning</th>
                            {classCells[0]}
                            {classCells[2]}
                            {classCells[9]}
                            {classCells[7]}
                            {classCells[1]}
                            {classCells[3]}
                            {classCells[8]}
                        </tr>
                        <tr>
                            <th>Afternoon</th>
                            {classCells[1]}
                            {classCells[3]}
                            {classCells[4]}
                            {classCells[5]}
                            {classCells[6]}
                            {classCells[10]}
                            {classCells[9]}
                        </tr>
                        <tr>
                            <th>Evening</th>
                            {classCells[4]}
                            {classCells[1]}
                            {classCells[10]}
                            {classCells[9]}
                            {classCells[7]}
                            {classCells[6]}
                            {classCells[8]}
                        </tr>
                    </tbody>
                </table>
            </div>

    </div>
}

export default Timetable;