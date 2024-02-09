import '../assets/styles.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';


function Footer() {
    return (
        <div className="my-5">
            <footer className="footer">

                <div className='row gx-0'>
                    <div className='col-12 col-lg-4 col-md-6 col-sm-12 p-5'>
                        <h4>Pop in and say hi</h4>
                        <p>
                            ABC Fitness Studio <br />
                            12 Flex Street <br />
                            Fitshire, UK <br />
                            F1T 2GO
                        </p>
                    </div>

                    <div className='col-12 col-lg-4 col-md-6 col-sm-12 p-5'>
                        <h4>Get in touch</h4>
                        <p className=''>
                            <a href='mailto:contact@abcfitness.com' target="_blank" className='text-white'>
                                <FontAwesomeIcon icon={faEnvelope} size="xl" className='contact-icon pe-3' />Email us </a>
                            <br />
                        </p>
                        <p>    <a href='tel:123123123' target="_blank" className='text-white'>
                            <FontAwesomeIcon icon={faPhone} size="xl" className='contact-icon pe-3' />Call us</a>
                        </p>
                    </div>

                    <div className='col-12 col-lg-4 col-md-12 col-sm-12 p-5'>
                        <h4>Join our mailing list</h4>
                        <form>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Please enter your email address</label>
                                <div className='d-flex gap-2'>
                                    <input type="email" className="form-control w-sm-100 w-lg-50" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='josiejump@abc.co.uk' />
                                    <button className='p-1 w-lg-25 newsletterBtn'>Sign up</button>
                                </div>
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="px-5 py-1 inline-block text-center">
                    <div>
                        <a href='' target="_blank" className='contact-icon p-2'>
                            <FontAwesomeIcon icon={faFacebookSquare} size="xl" />
                        </a>

                        <a href='https://www.linkedin.com/in/rosiegalezia/' target="_blank" className='contact-icon p-2'>
                            <FontAwesomeIcon icon={faInstagram} size="xl" />
                        </a>

                        <a href='https://github.com/rosiegalezia' target="_blank" className='contact-icon p-2'>
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