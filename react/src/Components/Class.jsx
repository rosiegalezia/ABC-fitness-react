function Class(props) {
    return (
        <div className="card m-3 p-3 col-3 col-lg-2 col-md-5 col-sm-12">
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <img src={props.image}/>
            <p>{props.instructor}</p>
            <p>{props.duration}</p>
        </div>
    )
}

export default Class