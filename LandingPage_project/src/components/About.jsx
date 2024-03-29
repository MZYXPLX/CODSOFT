import React from "react";

export default function About() {
  return (
    <>
      {/* ======= About Us Section ======= */}
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>About Us</h2>
          </div>
          <div className="row content">
            <div className="col-lg-6">
              <p className="text-justify-on-small-device">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </p>
              <ul>
                <li>
                  <i className="ri-check-double-line" /> Over 11 years of domain
                  expertise
                </li>
                <li>
                  <i className="ri-check-double-line" /> Top-notch services
                </li>
                <li>
                  <i className="ri-check-double-line" /> A leading software
                  house in Pakistan
                </li>
              </ul>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0">
              <p className="text-justify-on-small-device">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
              <a href="#" className="btn-learn-more">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* End About Us Section */}
    </>
  );
}
