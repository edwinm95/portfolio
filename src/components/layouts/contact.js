import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub,faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/pro-regular-svg-icons'
const contact = () => {
    return(
        <section id="contact">
            <div className="pagecontainer">
                <div className="pageheader">
                    Contact
                </div>
                <div className="textcontainer">
                    <div className="contact">
                        <a href="https://www.linkedin.com/in/edwin-mwaniki-524436b7/" className="contacticon" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        <a href="https://www.linkedin.com/in/edwin-mwaniki-524436b7/" className="contacttext" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                    <div className="contact">
                        <a href="https://github.com/edwinm95" className="contacticon" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                        <a href="https://github.com/edwinm95" className="contacttext" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                    <div className="contact">
                        <a href="#" className="contacticon" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} /></a>
                        <a href="#" className="contacttext" target="_blank" rel="noopener noreferrer" >Email</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default contact