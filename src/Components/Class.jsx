function Class(props) {
    return (
        <div className="card m-4 col-12 col-xl-3 col-lg-3 col-md-4 col-sm-12">

            <img className="card-img-top" src={props.image} />
            <div className="card-body pb-2 p-4">
                <h2>{props.name}</h2>
                <p>{props.description}</p>
                {/* <p>with {props.instructor}</p> */}
                <p>{props.duration}</p>
            </div>
            <div className="card-footer pt-1 p-4">
                <button className="btn bookBtn m-1">Book</button>
                <button className="btn saveBtn m-1">Save</button>
            </div>

        </div>
    )
}

export default Class