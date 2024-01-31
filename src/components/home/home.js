import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import fbIcon from "../../image/facebook.png";
import instaIcon from "../../image/instagram.png";
import twitterIcon from "../../image/twitter.png";
import "./home.scss";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    let auth = localStorage.getItem("user");
    if (auth === null) {
      navigate("/auth");
    }
    if (auth) {
      auth = JSON.parse(auth);
      if (auth.match !== "1") {
        navigate("/otp");
      }
    } else {
      navigate("/auth");
    }
  }, [navigate]);

  const logout = () => {
    localStorage.clear();
    navigate("/auth");
  };

  return (
    <div>
      <div className="header w-full">
        <div className="container mx-auto flex justify-between items-center">
          <figure className="w-[200px]">
            <img
              src="https://olympics.com/images/static/b2p-images/logo_color.svg"
              alt=""
            ></img>
          </figure>

          <ul className="flex gap-[24px]">
            <li>
              <Link>
                <a href="www.google.com">Sports</a>
              </Link>
            </li>
            <li>
              <Link href="#">News</Link>
            </li>
            <li>
              <Link href="#">Option</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer p-[32px] pb-[12px]">
        <ul className="flex justify-center gap-[48px] mb-[56px]">
          <li>International Olympic</li>
          <li>Museum</li>
          <li>Shop</li>
          <li>About Us</li>
          <li>About Us</li>
        </ul>

        <ul className="flex justify-center gap-[32px] mb-[24px]">
          <li>Cookie Policy</li>
          <li>Cookie Settings</li>
          <li>Privacy Policy</li>
          <li>Terms of service</li>
        </ul>

        <div className="social-media flex gap-[24px] mb-[24px]">
          <button href="#">
            <figure>
              <img src={fbIcon} alt="fbIcon"></img>
            </figure>
          </button>
          <button href="#">
            <figure>
              <img src={instaIcon} alt="instaIcon"></img>
            </figure>
          </button>
          <button href="#">
            <figure>
              <img src={twitterIcon} alt="twitterIcon"></img>
            </figure>
          </button>
        </div>

        <div className="copyright text-center text-[12px]">
          Copyright 2024. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Home;
