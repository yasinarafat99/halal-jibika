import React from "react";
import { BiSolidInstitution } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import exparnce from "../../assets/images/Exp_brief.svg";

function FavoriteShow({ fav }) {
  const {
    id,
    title,
    companyName,
    description,
    location,
    logo,
    position,
    isFavorite,
  } = fav;

  return (
    <>
      {
        <div className="jobFullWidth">
          <div className="jobsCardBG" key={id}>
            <div className="jobCard">
              <div className="jobCardText">
                <h1>
                  <Link to={`/DetailsJob/${id}`}>{title}</Link>
                </h1>
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
                <div className="applyTodtlsBtn">
                  <NavLink to={`/detailsjob/${id}`}>
                    <button>Apply Now</button>
                  </NavLink>
                </div>
                {/* <Link to={`/DetailsJob/${id}`}>Apply Now</Link> */}
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default FavoriteShow;
