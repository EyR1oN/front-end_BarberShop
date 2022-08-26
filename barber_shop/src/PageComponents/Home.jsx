import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [categories, setCategories] = useState(undefined);
  useEffect(() => {
    fetch("https://localhost:5001/api/category")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCategories(data);
      });
  }, []);

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
            {categories?.map((category) => {
              return (
                <div
                  key={category.id}
                  className="col-lg-4 col-md-4 col-sm-4 col-xs-12"
                >
                  <div className="service-block">
                    <div className="service-icon">
                      <img
                        src={category.picture}
                        className="img-category"
                        alt=" "
                      />
                    </div>

                    <div className="service-content">
                      <h2>
                      <Link
                          to={"/services/" + category.id}
                          className="title"
                          state={{ id: category.id }}
                        >
                          {category.name}
                        </Link>
                      </h2>
                      <p>{category.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
