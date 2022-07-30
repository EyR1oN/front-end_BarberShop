import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import toSQLtime from "../Helpers/DateTimeConvertor"
//import'react-datepicker/dist/react-datepicker.css'

export default function Orders() {
  let navigate = useNavigate();
  const addMonths = require("addmonths");
  const [orders, setOrders] = useState(
    JSON.parse(window.localStorage.getItem("order1")) || []
  );
  const [showDate, setShowDate] = useState(false);
  const[postOrder,setPostOrder]=useState({
    userId: undefined,
    serviceId: undefined,
    placeId: undefined,
    data_time: undefined,
    services_execution_time: undefined,

  });

  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 30), 16)
  );
 

 
  let count = 0;
  let hour = 0;
  let all = 0;
  let minute = 0;
  let sumHour = 0;
  let sumMinute = 0;
  let sumTime = 0;
  const time = (time1) => {
    hour = time1.split(":", 1);
    all = time1.split(":", 2);
    minute = all.slice(1, 2);
    sumHour = Number(sumHour) + Number(hour);
    sumMinute = Number(sumMinute) + Number(minute);
    sumTime = Number(sumTime) + Number(minute) + Number(sumHour * 60);
   // console.log(sumHour + "hour  " + sumMinute + "minute  ");
   // console.log("AllTime:" + sumTime);
  };
 

  const handleConfirm=(sumTime)=>{
   console.log({
    userId: (JSON.parse(window.localStorage.getItem("userData"))).id,
    serviceId: (JSON.parse(window.localStorage.getItem("order1"))).id,
    placeId: 1,
    data_time: toSQLtime(startDate),
    services_execution_time: sumTime
 })
    fetch("https://localhost:44370/api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
         userId: (JSON.parse(window.localStorage.getItem("userData"))).id,
         serviceId: (JSON.parse(window.localStorage.getItem("order1"))).id,
         placeId: 1,
         data_time: toSQLtime(startDate),
         services_execution_time: sumTime
      }),
    })
      .then((response) => response.json())
      //Then with the data from the response in JSON...
      .then((data) => {
        console.log("Success:", data);
      })
      //Then with the error genereted...
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div>
      <div className="content back-photo">
        <div className="container">
          <div className="row back-white">
            <div className="login-field order-size">
              <h1>Orders</h1>
              <p className="log-regist-p">
                {" "}
                Please order the services you prefer.
              </p>
              <form>
                <div className="row">
                  <div>
                    <div className="modal-body">
                      <table className="table table-image">
                        <thead>
                          <tr>
                            <th scope="col"></th>
                            <th scope="col">Product</th>
                            <th scope="col">Time</th>
                            <th scope="col">Price</th>
                          </tr>
                        </thead>

                        {orders?.map((order) => {
                          return (
                            <tbody>
                              <tr>
                                <td className="w-25">
                                  <img
                                    src={order.picture}
                                    className="img-fluid img-thumbnail"
                                    alt=" "
                                  />
                                </td>
                                <td className="order-text">{order.name}</td>
                                <td
                                  className="order-text"
                                  onLoad={time(order.timeToMake)}
                                >
                                  {hour + "h" + " " + minute + "m"}
                                </td>
                                <td
                                  className="order-text price1"
                                  onLoad={count = count + order.price}
                                >
                                  {order.price}${" "}
                                </td>
                                <td className="butcent">
                                  <button
                                    className="btn btn-danger btn-sm "
                                    onClick={() => {
                                      const newOrder = orders.filter(
                                        (el) => el.id !== order.id
                                      );
                                      console.log(newOrder);
                                      setOrders(newOrder);
                                      window.localStorage.setItem(
                                        "order1",
                                        JSON.stringify(newOrder)
                                      );
                                      console.log(JSON.stringify(newOrder));
                                    }}
                                  >
                                    Delete
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          );
                        })}
                      </table>
                      <div className="d-flex justify-content-end">
                        <h5 className=" justify-content-end">
                          Total:{" "}
                          <span className="price text-success">{count}$</span>
                        </h5>
                        <h5 className=" justify-content-end">
                          All Time:{" "}
                          <span className="price text-success">{sumTime}m</span>
                        </h5>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="orders-plus">
                      <Link to="/categoryList" className="button-plus">
                        +
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-sm-12 col-md-12 col-xs-12 text-center">
                  <a
                    href="#"
                    className="btn btn-default"
                    onClick={() => {
                      
                      console.log(window.localStorage);
                      if(window.localStorage.getItem("userData")==null)
                      {
                        alert("You aren't logged in");
                        navigate("/login");
                      }
                      else
                      {
                        setShowDate(!showDate);
                      }
                    }
                    }
                  >
                    {" "}
                    Place your order{" "}
                  </a>
                  {showDate && (
                    <div id="myModal" className="modal">
                      <div className="modal-content2">
                        <span
                          className="close"
                          onClick={() => setShowDate(!showDate)}
                        >
                          &times;
                        </span>
                        <p className="lead">
                        Choose date and time for your order.
                        </p>
                        <DatePicker
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          showTimeSelect
                          timeFormat="HH:mm"
                          minTime={setHours(setMinutes(new Date(), 0), 9)}
                          maxTime={setHours(setMinutes(new Date(), 0), 18)}
                          minDate={new Date()}
                       

                         /* excludeTimes={[
                            setHours(setMinutes(new Date(), 0), 17),
                            setHours(setMinutes(new Date(), 30), 18),
                            setHours(setMinutes(new Date(), 30), 19),
                            setHours(setMinutes(new Date(), 30), 17),
                          ]}*/
                          dateFormat="MMMM d, yyyy h:mm aa"
                          
                          inline
                        />
                       <a
                          href="#"
                          className="btn btn-default"
                          onClick={()=>
                            
                            {
                             
                              handleConfirm(sumTime);
                            }}
                        >
                          Confirm order
                        </a>
                      </div>
                    </div>
                  )}
                </div>
                <div></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
