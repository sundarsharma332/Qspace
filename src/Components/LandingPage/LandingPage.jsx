import React from "react";
import "./LandingPage.css";
import Image from "./assets/hero-img.png";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const LandingPage = () => {
  return (
    <div className="main">
      <div className="header">
        <div className="logo">
          <i className="fa fa-bars"></i>
          <h1>Qspace</h1>
        </div>
        <div className="nav__links">
          <button type="button" class="btn btn-link">
            Home
          </button>
          <button type="button" class="btn btn-link">
            Documentations
          </button>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
      <div className="hero_section">
        <div className="intro__docs">
          <div className="heading__intro">
            <h1>
              Create Your Own Personal{" "}
              <span className="space__edit">Space </span>
            </h1>
            <h1>Build Your...</h1>
            {/* data display from the database. */}
            <p>{}</p>
          </div>
          <div className="button__intro">
            <button className="btn btn-primary btn-lg">Get Started</button>
            <button className="btn btn-success btn-lg">
              View Documentations
            </button>
          </div>
          <div className="features__docs">
            <div className="one"></div>
            <div className="one"></div>
          </div>
        </div>
        <div className="hero__banner">
          <img classNam="img_banner" src={Image} alt="Banner Images" />
        </div>
      </div>
      <div className="footer__section">
        <div className="social__icons">
          <GitHubIcon />
          <InstagramIcon />
          <TwitterIcon />
          <FacebookIcon />
          <LinkedInIcon />
        </div>
        <button className="btn btn-link">
          @Copyright : 2021 All Right Reserved.
        </button>
      </div>
    </div>
  );
};
export default LandingPage;
