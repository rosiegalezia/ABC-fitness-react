import Class from "../Components/Class"
import fitnessclasses from "../assets/ClassData/classData.json"

import '../assets/styles.css'

function BrowseClasses() {
    return <div>
        <h2 className="p-5 pb-3">Browse our classes</h2>
        <div className="flex-wrap d-flex m-4 p-4">
            {fitnessclasses.map((Class) => {
                return <fitnessclass key={Class.id} name={Class.name} image={Class.image} description={Class.description} instructor={Class.instructor} duration={Class.duration} />;
            })}
        </div>
    </div>
}

export default BrowseClasses