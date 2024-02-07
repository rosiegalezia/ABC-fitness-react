import '../assets/styles.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


function Footer() {
    return (
        <div className="my-5">
            <footer className="footer">

                <div className='d-flex'>
                    <div className='col-3 col-lg-3 col-sm-12 p-5'>
                        <h4>Pop in and say hi</h4>
                        <p>
                            ABC Fitness Studio <br />
                            12 Flex Street <br />
                            Fitshire, UK <br />
                            F1T 2GO
                        </p>
                    </div>
                    <div className='col-3 col-lg-3 col-sm-12 p-5'>
                        <h4>Get in touch</h4>
                        <p>
                            <a href='mailto:contact@abcfitness.com' target="_blank">
                                <FontAwesomeIcon icon={faEnvelope} size="xl" className='pe-3' />Email us </a>
                            <br />
                            <a href='mailto:contact@abcfitness.com' target="_blank" className=''>
                                <FontAwesomeIcon icon={faPhone} size="xl" className='pe-3' />Call us</a>
                        </p>
                    </div>
                    <div className='col-3 col-lg-3 col-sm-12 p-5'>
                        <h4>Join our mailing list</h4>
                        <form>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Please enter your email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='josiejump@abc.co.uk'/>
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="px-5 py-1 inline-block text-center">
                    <div>
                        <a href='' target="_blank" className='p-2'>
                            <FontAwesomeIcon icon={faFacebookSquare} size="xl" />
                        </a>

                        <a href='https://www.linkedin.com/in/rosiegalezia/' target="_blank" className='p-2'>
                            <FontAwesomeIcon icon={faInstagram} size="xl" />
                        </a>

                        <a href='https://github.com/rosiegalezia' target="_blank" className='p-2'>
                            <FontAwesomeIcon icon={faTwitter} size="xl" />
                        </a>
                    </div>

                </div>
                <div className="footer-copyright text-center py-3">© 2024 Copyright: ABC Fitness Studio</div>
            </footer>

        </div>

    )
}

export default Footer