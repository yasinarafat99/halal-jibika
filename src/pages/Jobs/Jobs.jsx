import { FaLocationDot } from "react-icons/fa6";
import exparnce from '../../assets/images/Exp_brief.svg'
import { BiSolidInstitution } from "react-icons/bi";
import "./Jobs.css";

import { Link, useLoaderData } from "react-router-dom";

function Jobs() {
  const jobs = useLoaderData();
  console.log(jobs);

  return (
    <>
      <div className="jobFullWidth">
        {jobs.map((job) => (
          <div className="jobsCardBG">
            <div className="jobCard" key={job.id}>
              <div className="jobCardText">
                <h1>{job.title}</h1>
                <p>{job.description}</p>
                <p className="company"> <BiSolidInstitution /> {job.companyName}</p>
                <p className="location">
                  <FaLocationDot />
                  {job.location}
                </p>
                <p className="jobPosition"><img src={exparnce} alt="" /> {job.position}</p>
                <Link>Apply Now</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Jobs;

// import React from "react";
// import { useLoaderData } from "react-router-dom";

// function Jobs() {
//   const jobs = useLoaderData();
//   console.log(jobs);

//   return <>{jobs.map((job) => job.id)}</>;
// }

// export default Jobs;
