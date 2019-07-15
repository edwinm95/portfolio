import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
const projects = () => {
    return(
        <section id="projects">
            <div className="pagecontainer">
                <div className="pageheader">
                        Projects
                        <div className="headerborder" />
                    </div>
                <div className="textcontainer">
                        <a href="https://homebuyproject.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="projectimage homebuy"></a>
                        <div className="projectcontainer">
                            <a href="https://homebuyproject.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="projecttitle">HomeBuy</a>
                            <div className="projectdescription">
                                A web app that allows users to post rental properties. Users have 
                                the option to log in via Email and password or through Google and Facebook OAuth Login.
                                Users are able to post photos about rental properties.
                            </div>
                            <div className="projecttechnology">
                                Node.js React, MongoDB, TomTom API
                            </div>
                            <div className="projectgithub">
                                <a href="https://github.com/edwinm95/homebuy" target="_blank" rel="noopener noreferrer" className="githublink"><FontAwesomeIcon icon={faGithub} /></a>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default projects