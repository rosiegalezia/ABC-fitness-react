import Class from "../Components/Class"
import fitnessclasses from "../assets/ClassData/classes.json"

import '../assets/styles.css'

function BrowseClasses() {
    return <div className="">
        <h2 className="page-heading p-5 pb-1">Browse our classes</h2>
        <div className="flex-wrap d-flex m-5">
            {fitnessclasses.map((fitnessclass) => {
                return <Class key={fitnessclass.id} name={fitnessclass.name} image={fitnessclass.image} description={fitnessclass.description} instructor={fitnessclass.instructor} duration={fitnessclass.duration} />;
            })}
        </div>
    </div>
}

export default BrowseClasses