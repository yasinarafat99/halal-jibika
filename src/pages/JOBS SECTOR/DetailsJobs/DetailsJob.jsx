import React from 'react'
import { Link, NavLink, useLoaderData } from 'react-router-dom';
import { BiSolidInstitution } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import exparnce from "../../../assets/images/Exp_brief.svg";
import './DetailsJob.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../../Firbase/firbase.config';



function DetailsJob() {
  const [user] = useAuthState(auth)
  console.log(user)
    const { id,
        title,
        companyName,
        description,
        location,
        logo,
        position,} = useLoaderData();
    // console.log(logo)
  return (
    <>
       <div className="dtlsjobFullWidth">
       <div className="dtlsjobsCardBG">
              <div className="dtlsjobCard" key={id}>
                <div className="dtlscompanyLogo">
                    <img src={logo} alt="" />
                    <div className="headingText">
                    <p>{position}</p>
                    <p className='position'>Beginner</p>
                    </div>
                </div>

                <div className="applyArea">
                  <div className="jobtitle">
                  <h1>{title}</h1>
                  <p>{description}</p>
                  </div>
                <div className="applyBtn">
                 <NavLink to={!user ? "/signin" : '/contact'} className="applyBtnNavLink"> <button className='applyBtnButton'>Login To Apply</button></NavLink>
                </div>
                </div>
               
                <hr />
                <div className="dtlsjobCardText">
                  
                  <div className="companyDetails">
                  <p className="dtlscompany">
                    {" "}
                    <BiSolidInstitution /> {companyName}
                  </p>
                  <p className="dtlslocation">
                    <FaLocationDot />
                    {location}
                  </p>
                  <p className="dtlsjobPosition">
                    <img src={exparnce} alt="" /> {position}
                  </p>
                  </div>
                  {/* Position Summary */}
                  <div className="positionSummary">
                    <h2>Position Summary</h2>
                    <span>We are looking for some candidates for the position IT Associate.</span>
                  </div>
                  {/* Required Skills */}
                  <div className="requiredSkills">
                    <h2>Required Skills</h2>
                    <ul>
                      <li> ✔️ Computer skill</li>
                      <li> ✔️ Computer Hardware and Networking</li>
                      <li> ✔️ Hardworking and Networking</li>
                    </ul>
                  </div>
                  {/* <Link>Apply Now</Link> */}
                </div>
              </div>
            </div>
       </div>
    </>
  )
}

export default DetailsJob;