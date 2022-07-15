import React from "react";

function Home() {
  return (
    <div>
      <div className="hero-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
              <h1 className="hero-title">BarberShop</h1>
              <p className="hero-text">
                <strong>Your Types. Your Style. Your Color.</strong>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="space-medium">
        <div className="container">
          <div className="row">
            <div className="col-md-offset-2 col-md-8">
              <div className="mb60 text-center section-title">
                <h1>salon and barbar category</h1>
                <h5 className="small-title ">
                  to register online, please select a catagory
                </h5>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className="service-block">
                <div className="service-icon mb20">
                  <img src={require("./../Image/service-icon-1.png")} alt="" />{" "}
                </div>

                <div className="service-content">
                  <h2>
                    <a href="services.html" className="title ">
                      traditional cut
                    </a>
                  </h2>
                  <p>
                    Responsive website templates free download html5 with css3
                    for Hair Salon and Shop website template.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-12 col-sm-12 col-md-12 col-xs-12 text-center">
              {" "}
              <a href="#" className="btn btn-default">
                {" "}
                View All Service{" "}
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
