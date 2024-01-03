import { FaLocationDot } from "react-icons/fa6";
import exparnce from "../../../assets/images/Exp_brief.svg";
import { BiSolidInstitution } from "react-icons/bi";
import "./Jobs.css";
import { Link, useLoaderData } from "react-router-dom";

function Jobs() {
  const jobs = useLoaderData();

  return (
    <>
      <div className="jobFullWidth">
        {jobs.map((job) => {
          const {
            id,
            title,
            companyName,
            description,
            location,
            logo,
            position,
          } = job;
          return (
            <div className="jobsCardBG">
              <div className="jobCard" key={id}>
                <div className="jobCardText">
                  <h1>{title}</h1>
                  <p>{description}</p>
                  <p className="company">
                    {" "}
                    <BiSolidInstitution /> {companyName}
                  </p>
                  <p className="location">
                    <FaLocationDot />
                    {location}
                  </p>
                  <p className="jobPosition">
                    <img src={exparnce} alt="" /> {position}
                  </p>
                  <Link>Apply Now</Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Jobs;
