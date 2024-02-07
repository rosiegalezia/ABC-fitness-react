import '../assets/styles.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
// import { faPhone } from '@fortawesome/free-brands-svg-icons';


function Footer() {
    return (
        <div className=" my-5">
            <footer className="footer">
                <div className="text-center">
                    <a href='mailto:contact@abcfitness.com' target="_blank" className='p-2'>
                        <FontAwesomeIcon icon={faEnvelope} size="xl" />
                    </a>
                </div>
                {/* <div className="text-center">
                    <a href='' target="_blank" className='p-2'>
                        <FontAwesomeIcon icon={faPhone} size="xl" />
                    </a>
                </div> */}

                <div className="footer-copyright text-center py-3">© 2024 Copyright: Rosie Galezia
                </div>
            </footer>

        </div>

    )
}

export default Footer