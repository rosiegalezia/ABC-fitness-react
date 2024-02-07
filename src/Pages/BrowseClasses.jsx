import Class from "../Components/Class"
import fitnessclasses from "../assets/ClassData/classes.json"

import '../assets/styles.css'

function BrowseClasses() {
    return <div className="">
        <div className="page-heading p-5 pb-1">
            <h2 className="">Browse our classes</h2>
            <h4 className="subheading">Whether you're a pilates pro or total beginner, we're sure we've got the class for you!</h4>
        </div>

        <div className="flex-wrap d-flex m-5">
            {fitnessclasses.map((fitnessclass) => {
                return <Class key={fitnessclass.id} name={fitnessclass.name} image={fitnessclass.image} description={fitnessclass.description} instructor={fitnessclass.instructor} duration={fitnessclass.duration} />;
            })}
        </div>
    </div>
}

export default BrowseClasses