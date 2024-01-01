import { Link } from "react-router-dom";
import banner from "../../assets/images/removehalalJibikaTemplae-removebg-preview.png";
import "./Home.css";
function Home() {
  return (
    <>
      <div className="home_container">
        <div className="home_main_container">
          <div className="bannerTextContainer">
            <div className="banner_text">
              <h1>Unlock Your Career Potential with Our Job Portal.</h1>
              <div className="exploreBtn">
                <Link to={"/signin"}>
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
            <ul>
              <li>
                1. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempore voluptate explicabo totam natus .
              </li>
              <li>
                1. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Tempore voluptate explicabo totam natus .
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
