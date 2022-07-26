import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function CategoryList() {
  const [categories, setCategories] = useState(undefined);
  useEffect(() => {
    fetch("https://localhost:44370/api/category")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCategories(data);
      });
  }, []);

  return (
    <div>
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="page-caption">
                <h2 className="page-title">salon and barbar category</h2>
                <div className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li>
                      <a href="/home">Home</a>
                    </li>
                    <li className="active">category list</li>
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
                <h3>to register online, please select a catagory</h3>
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
                        <Link to={"/services/"+category.id} className="title" state={{id:category.id}}>
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

export default CategoryList;
