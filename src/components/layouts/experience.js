import React from 'react'

const experience = (props) => {
    return(
        <section id="experience">
            <div className="pagecontainer">
                    <div className="pageheader">
                        Experience
                        <div className="headerborder" />
                    </div>
                    <div className="textcontainer experiencecard">
                        <div className="companycontainer">
                            <div className="company">
                                AiroTech OMD
                            </div>
                            <div className="position">
                                Software Engineer
                            </div>
                        </div>
                        <div className="jobdescriptioncontainer">
                            {'SMCP ,Saas platform, that allows garage door companies to manages work appointments, data records of each department and part inventory'}
                        </div>
                        <div className="jobdutiescontainer">
                            <ul>
                                <li>
                                    Reduced time for importing new records of customers and items by 
                                    implementing a new feautre that converts an Excel file (XLS) to CSV files
                                    then it inserts the records into the database
                                </li>
                                <li>
                                    Maintained the Front end (HTML &amp; CSS) and Backend (Java) code
                                </li>
                                <li>
                                    Reduced time for updating the server with new changes by writing a bash script 
                                    that updates the server every evening whenever a new code has been pushed into the Git repository 
                                </li>
                            </ul>
                        </div>
                        <div className="jobdatecontainer">
                            April 2018 - April 2019 | Beltsville, MD
                        </div>
                    </div>
            </div>
        </section>
    )
}

export default experience