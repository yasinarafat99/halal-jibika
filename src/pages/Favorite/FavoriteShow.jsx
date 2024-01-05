import { BiSolidInstitution } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import exparnce from "../../assets/images/Exp_brief.svg";
import './Fav.css'

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

              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default FavoriteShow;
