import React, {Component} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link} from 'react-scroll'
import resume from '../assets/resume.pdf'
import {faAddressCard, faUserHardHat, faCode, faGraduationCap, faBars, faFileUser, faEnvelope, faTasksAlt} from '@fortawesome/pro-regular-svg-icons'
class NavBar extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <div className="navbarcontainer">
                    <div className="navbarnamecontainer">
                        <a href="#" className="navbarname">
                            {'Edwin'}
                        </a>
                    </div>
                    <div className="drawermenu"><FontAwesomeIcon icon={faBars} /></div>
                    <div className="links">
                        <a href="#about" className="navbarlinks">About</a>
                        <a href="#experience" className="navbarlinks">Experience</a>
                        <a href="#projects" className="navbarlinks">Projects</a>
                        <a href="#contact" className="navbarlinks">Contact</a>
                        <a href={resume} target="_blank" rel="noopener noreferrer" className="navbarlinks">Resume</a>
                </div>
                    </div>
            </div>
        )
    }
}
export default NavBar