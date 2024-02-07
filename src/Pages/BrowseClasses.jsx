import Class from "../Components/Class"
import fitnessclasses from "../assets/ClassData/classes.json"

import '../assets/styles.css'

function BrowseClasses() {
    return <div className="">
        <h2 className="page-heading p-5 pb-1">Browse our classes</h2>
        <h4 className="subheading px-5 pt-2 pb-1">Whether you're a pilates pro or total beginner, we've got the class for you!</h4>
        <div className="flex-wrap d-flex m-5">
            {fitnessclasses.map((fitnessclass) => {
                return <Class key={fitnessclass.id} name={fitnessclass.name} image={fitnessclass.image} description={fitnessclass.description} instructor={fitnessclass.instructor} duration={fitnessclass.duration} />;
            })}
        </div>
    </div>
}

export default BrowseClasses