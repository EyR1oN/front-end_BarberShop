import React from "react";

function Contact() {
  return (
    <div>
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="page-caption">
                <h2 className="page-title">Contact us</h2>
                <div className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li className="active">Contact us</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className="widget widget-contact">
                <h3 className="widget-title">Contact Info</h3>
                <address>
                  <strong>Flower.</strong>
                  <br />
                  1355 Market Street, Suite 900 <br />
                  San Francisco, CA 94103
                  <br />
                  <abbr title="Phone">P:</abbr> (123) 456-7890
                </address>
                <address>
                  <strong>Contact Name</strong>
                  <br />
                  <a href="mailto:#">yourdomain@gmail.com</a>
                </address>
              </div>

              <div className="widget widget-social">
                <div className="social-circle">
                  <a href="#" className="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#" className="#">
                    <i className="fa fa-google-plus"></i>
                  </a>
                  <a href="#" className="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="#" className="#">
                    <i className="fa fa-youtube-play"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <h1>Contact Form</h1>
                  <p>
                    Please complete the form below. We'll do everything we can
                    to respond to you as quickly as possible.
                  </p>
                  <form>
                    <div className="row">
                      <div className="col-md-6">
                        <label className="control-label" for="name">
                          name
                        </label>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder=""
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="control-label" for="phone">
                          phone
                        </label>
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          placeholder=""
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="control-label" for="email">
                          email
                        </label>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          placeholder=""
                          className="form-control"
                        />
                      </div>
                      <div className="col-md-6">
                        <label className="control-label" for="Subject">
                          Subject
                        </label>
                        <input
                          type="text"
                          name="Subject"
                          id="Subject"
                          placeholder=""
                          className="form-control"
                        />
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="form-group">
                          <label className="control-label" for="textarea">
                            Message
                          </label>
                          <textarea
                            className="form-control"
                            id="textarea"
                            name="textarea"
                            rows="6"
                            placeholder=""
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <button
                            id="singlebutton"
                            name="singlebutton"
                            className="btn btn-default"
                          >
                            send message
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
