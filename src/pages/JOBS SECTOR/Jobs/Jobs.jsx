import { FaLocationDot } from "react-icons/fa6";
import exparnce from "../../../assets/images/Exp_brief.svg";
import { BiSolidInstitution } from "react-icons/bi";
import "./Jobs.css";
import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";

// CRUD Icon //
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import axios from "axios";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../../../Firbase/firbase.config";
import Swal from "sweetalert2";
// ***************************************************************//

function Jobs({ job={}, deletPost }) {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const {
    id,
    title,
    companyName,
    description,
    location,
    logo,
    position,
    isFavorite,
  } = job;


  const FavJob = async (uniqe) => {
    if(!user){
      return Swal.fire({
        title:'First sign Up',
        icon:'warning'
      });
    };
    
    if(user) {
          const jobObj = {
      ...job,
      isFavorite: !isFavorite,
    };
    await axios.put(`http://localhost:9000/jobs/${uniqe}`, jobObj);
    navigate('/favorite')
  }
    }


  return (
    <>
      <div className="jobFullWidth">
        <div className="jobsCardBG">
          <div className="jobCard"> 
            {/* CRUD Icon */}
            <div className="crudIcon">
              <div className="favoriteIcon">
                <NavLink onClick={() => FavJob(id)}>
                  <MdOutlineFavoriteBorder />
                </NavLink>
              </div>
              <div className="addIcon">
                <NavLink to={'/createjob'}>
                  <IoIosAddCircleOutline />
                </NavLink>
              </div>
              <div className="editIcon">
                <NavLink to={`/updatejob/${id}`}>
                  <FaRegEdit />
                </NavLink>
              </div>
              <div className="deleteIcon">
                <NavLink onClick={() => deletPost(id)}>
                  <MdDeleteOutline />
                </NavLink>
              </div>
            </div>
            {/* CRUD Icon */}
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
    </>
  );
}

export default Jobs;
