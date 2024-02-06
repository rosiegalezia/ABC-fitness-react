function Class(props) {
    return (
        <div className="card">
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <img src={props.image}/>
            <p>{props.instructor}</p>
            <p>{props.duration}</p>
        </div>
    )
}

export default Class