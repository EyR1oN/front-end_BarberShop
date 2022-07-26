import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";


function Services() {
  const location = useLocation()
  const [services, setServices] = useState(undefined);
  const [chosenServices, setChosenServices] = useState(JSON.parse(window.localStorage.getItem("orders"))||[]);

  useEffect(() => {
    console.log(location.state);
    fetch("https://localhost:44370/api/service/"+location.state.id)
      .then((response) => response.json())
      .then((data) => {
       
        setServices(data);
     
      });
  }, []);
  
 
  return (
    <div>
      <div className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="page-caption">
                <h2 className="page-title">SERVICES</h2>
                <div className="page-breadcrumb">
                  <ul className="breadcrumb">
                    <li>
                      <a href="/home">Home</a>
                    </li>
                    <li>
                      <a href="/categoryList">Barbershop category</a>
                    </li>
                    <li className="active">services list</li>
                  </ul>
                  
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
          <div className="row format">
          {services?.map((service) => {
              return (
            <div key={service.id} className="col-lg-4 col-md-4 col-sm-4 col-xs-12 form-all">
               <div className="service-block">
                    <div className="service-icon">
                      <img
                        src={service.picture}
                        className="img-category"
                        alt=" "
                      />
                    </div>

                <div className="service-content">
                  <h2>
                    <Link to="#" className="title">
                      {service.name} 
                    </Link>
                  </h2>
                  <p>
                  {service.description}
                  </p>
                  <h4 className="servises-time">
                    execution time: <a> {service.timeToMake}</a>
                  </h4>
                  <div className="price"> {service.price}&#x24;</div>
                 
                </div>
              </div>
              
              <div className="col-lg-12 col-sm-12 col-md-12 col-xs-12 text-center">
                     <a href="#" className="btn btn-default button-servsel" onClick={(value)=>{
    value.preventDefault(); 
    setChosenServices(prevState=>[...prevState, service]); 
 //  console.log( JSON.stringify(chosenServices[0]))
  window.localStorage.setItem("orders",  JSON.stringify(chosenServices));
 // console.log(JSON.parse(window.localStorage.getItem("1234")));
 // console.log(chosenServices);
  }}> Add to orders </a>
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

export default Services;
