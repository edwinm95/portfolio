import React from 'react'
import Skills from './skills'
const about = (props) => {
    return(
            <section id="about">
                <div className="pagecontainer" id="about">
                    <div className="pageheader">
                        About
                        <div className="headerborder" />
                    </div>
                    <div className="textcontainer about">
                        <div>
                            Hello! my name is Edwin Mwaniki. Im a software engineer based in  Baltimore, MD  that is passionate in developing high quality web and mobiles  apps. As software engineer I develop apps that have great user experience .In 2017, I graduated from Towon University with a B.S in Computer Science. 
                            </div>
                    </div>
                    <Skills />

                </div>
            </section>
    )
}

export default about