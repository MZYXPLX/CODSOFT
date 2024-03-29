import React from 'react'
import img from '../assets/img/hero-img.png'
import img2 from "../assets/img/Developer (1).png";
import img4 from "../assets/img/Tech_img.png";

import img3 from "../assets/img/Developer (2).png";
export default function Banner() {
    return (
        <>
            <section id="hero" className="d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div
                            className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1 aos-init aos-animate"
                            data-aos="fade-up"
                            data-aos-delay={200}
                        >
                            <h1>Better Solutions For Your Business</h1>
                            <h2>
                                We are team of talented designers making websites with high standard
                            </h2>
                            <div className="d-flex justify-content-center justify-content-lg-start">
                                <a href="#about" className="btn-get-started scrollto">
                                    Get Started
                                </a>
                                <a
                                    href="#"
                                    className="glightbox btn-watch-video"
                                >
                                    <i className="bi bi-play-circle" />
                                    <span>Watch Video</span>
                                </a>
                            </div>
                        </div>
                        <div
                            className="col-lg-6 order-1 order-lg-2 hero-img aos-init aos-animate"
                            data-aos="zoom-in"
                            data-aos-delay={200}
                        >
                            <img
                                src={img3}
                                className="img-fluid animated"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
