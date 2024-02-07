function classCell(props) {
    return (
        <div className="">

            <div className="">
                <h2>{props.name}</h2>
                <p>{props.description}</p>
                <p>{props.instructor}</p>
                <p>{props.duration}</p>
            </div>

            <div className="">
                <button className="bookBtn">Book</button>
                <button className="saveBtn">Save</button>
            </div>

        </div>
    )
}

export default classCell