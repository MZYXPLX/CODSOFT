import React from "react";

export default function Contact() {
  return (
    <>
      {/* ======= Contact Section ======= */}
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Contact</h2>
            <p className="text-justify-on-small-device">
              Thank you for your interest in TechnoPro! We would love to hear
              from you and answer any questions you may have about our services.
              Our office hours are from Monday to Friday, 9:00 AM to 5:00 PM
              Pakistan Standard Time. If you would like to schedule a meeting
              outside of these hours, please contact us to arrange a suitable
              time. Alternatively, you can fill out the contact form below, and
              one of our representatives will get back to you shortly. We value
              your privacy and will not share your information with any third
              parties without your consent. At TechnoPro, we strive to provide
              our clients with the best possible service and support. Our team
              of experts is always ready to assist you with any queries or
              concerns you may have. We look forward to hearing from you!
            </p>
          </div>
          {/* <div className="row">
            <div className="col-lg-5 d-flex align-items-stretch">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt" />
                  <h4>Location:</h4>
                  <p>Lahore, Pakistan</p>
                </div>
                <div className="email">
                  <i className="bi bi-envelope" />
                  <h4>Email:</h4>
                  <p>info@technopro.pk</p>
                </div>
                <div className="phone">
                  <i className="bi bi-phone" />
                  <h4>Call:</h4>
                  <p>0332 5715 5075</p>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d61085.42808888615!2d74.38837261727012!3d31.515688511573362!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1681386223427!5m2!1sen!2s"
                  style={{ border: 0, width: "100%", height: 290 }}
                  allowFullScreen=""
                  frameBorder={0}
                />
              </div>
            </div> */}
            <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
              {/* <form
                action=""
                method="post"
                role="form"
                className="php-email-form">
                <div className="row">
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      required=""
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Your Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      required=""
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="name">Subject</label>
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    required=""
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Message</label>
                  <textarea
                    className="form-control"
                    name="message"
                    rows={10}
                    required=""
                    defaultValue={""}
                  />
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form> */}
            {/* </div> */}
          </div>
        </div>
      </section>
      {/* End Contact Section */}
    </>
  );
}
