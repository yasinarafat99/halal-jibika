import { Link, NavLink, useLoaderData } from "react-router-dom";
import banner from "../../assets/images/removehalalJibikaTemplae-removebg-preview.png";
import "./Home.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../Firbase/firbase.config";
import { useEffect, useState } from "react";
import { CiLink } from "react-icons/ci";
import { FaAws } from "react-icons/fa";
function Home() {
  const [user] = useAuthState(auth);

  const [latestJobs, setLatestJobs] = useState();

  useEffect(() => {
    const latestJobsFunc = async () => {
      try {
        const data = await fetch("http://localhost:9000/jobs");
        const toJSON = await data.json();
        setLatestJobs(toJSON);
      } catch (err) {
        console.log(err);
      }
    };
    latestJobsFunc();
  }, []);
  return (
    <>
      <div className="home_container">
        <div className="home_main_container">
          <div className="bannerTextContainer">
            <div className="banner_text">
              <h1>Unlock Your Career Potential with Our Job Portal.</h1>
              <div className="exploreBtn">
                <Link to={!user ? "/signin" : "/getjobs"}>
                  <button>Explore Now</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="hero_banner">
            <img src={banner} alt="" />
          </div>
          <div className="right_container">
            <h3>Latest Jobs</h3>
            {latestJobs?.slice(0, 5).map((job) => (
              <ul key={job.id}>
                <NavLink to={`/detailsjob/${job.id}`}>
                  {" "}
                  <CiLink className="link" /> {job.title}
                </NavLink>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
