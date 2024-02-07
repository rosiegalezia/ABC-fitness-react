function Class(props) {
    return (
        <div className="card m-3 col-12 col-xl-3 col-lg-3 col-md-4 col-sm-12">

            <div className="card-body p-3">
                <h2>{props.name}</h2>
                <p>{props.description}</p>
                <img src={props.image} width={400}/>
                <p>with {props.instructor}</p>
                <p>{props.duration}</p>
            </div>

            <div className="card-footer">
                <button className="bookBtn">Book</button>
                <button className="saveBtn">Save</button>
            </div>

        </div>
    )
}

export default Class