import Class from "../Components/Class"
import fitnessclasses from "../assets/ClassData/classes.json"

import '../assets/styles.css'

function BrowseClasses() {
    return <div>
        <h2 className="p-5 pb-3">Browse our classes</h2>
        <div className="flex-wrap d-flex m-4 p-4">
            {fitnessclasses.map((fitnessclass) => {
                return <Class key={fitnessclass.id} name={fitnessclass.name} image={fitnessclass.image} description={fitnessclass.description} instructor={fitnessclass.instructor} duration={fitnessclass.duration} />;
            })}
        </div>
    </div>
}

export default BrowseClasses