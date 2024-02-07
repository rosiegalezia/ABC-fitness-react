import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';

function classCell(props) {
    return (
        <div className="p-2">

            <div className="">
                <h3>{props.name}</h3>
                <p>with {props.instructor}</p>

            </div>

            <div className='d-flex-block'>
                {/* <p>{props.description}</p> */}
                <p className="text-muted">{props.duration}</p>
            </div>

            <div className="d-inline-flex">
                <button className="bookBtn">Book</button>
                <button className="saveBtn"><FontAwesomeIcon icon={faBookmark} /></button>
            </div>

        </div>
    )
}

export default classCell