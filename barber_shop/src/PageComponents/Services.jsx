import React from "react";

function Services() {
  return (
    <div>
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="page-caption">
                <h2 className="page-title">...</h2>
                <div className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li>
                      <a href="/home">Home</a>
                    </li>
                    <li>
                      <a href="/categoryList">Barbershop category</a>
                    </li>
                    <li className="active">services list</li>
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
            <div className="col-md-offset-2 col-md-8">
              <div className="mb60 text-center section-title">
                <h3>to register online, please select a services</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className="service-block">
                <div className="service-icon mb20">
                  <img src={"./images/service-icon-1.png"} alt=" " />
                </div>

                <div className="service-content">
                  <h2>
                    <a href="#" className="title">
                      traditional cut
                    </a>
                  </h2>
                  <p>
                    Responsive website templates free download html5 with css3
                    for Hair Salon and Shop website template.
                  </p>
                  <h4 className="servises-time">
                    execution time: <a>30m</a>
                  </h4>
                  <div className="price">$45</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
