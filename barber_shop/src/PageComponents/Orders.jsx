import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import {toSQLdateTime, addTime, toMinutes }from "../Helpers/DateTimeConvertor"


export default function Orders() {
  let navigate = useNavigate();
  const addMonths = require("addmonths");
  const [orders, setOrders] = useState(
    JSON.parse(window.localStorage.getItem("order1")) || []
  );
  const [showDate, setShowDate] = useState(false);
  const[postOrder,setPostOrder]=useState({
    userId: 1,
    serviceId: 1,
    placeId: 1,
    data_time: "2020-08-20 23:02:02",
  });
  const [showBoard, setShowBoard] = useState(false);
  const [showErrorBoard, setShowErrorBoard] = useState(false);
  let openWind=false;
  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 0), 0)
  
  );
  const [checkTime, setCheckTime] = useState([]);
  let timeForServices=toSQLdateTime(startDate,"time");
 
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
  };

 
const checkIncludedTime=(date)=>{
 
  
  
  
    fetch(
      "https://localhost:5001/api/order/" +sumTime+"/"+toSQLdateTime(date,"date")
       
    )
      .then((response) => response.json())
      .then((data) => {
        let arr=[];
      for(let i=0;i<data.length;i++){
      
        var hours = (Number(data[i]) / 60);
        var rhours = Math.floor(hours);
        var minutes = (hours - rhours) * 60;
        var rminutes = Math.round(minutes);
   
      arr.push(setHours(setMinutes(new Date(), rminutes), rhours));
      }
     
      setCheckTime(arr);
      });
   
    
  };



  
  const handleConfirm=(sumTime)=>{
  
    console.log("qqqqq  "+Number(sumTime))
    const OrderArr=[];
    
   
    console.log("444-  "+startDate+"   "+toMinutes(timeForServices))
   for (let prop in JSON.parse(window.localStorage.getItem("order1"))){
   
     OrderArr.push( {userId: (JSON.parse(window.localStorage.getItem("userData"))).id,
     serviceId: JSON.parse(window.localStorage.getItem("order1"))[prop].id,
     placeId: 1,
     date: toSQLdateTime(startDate,"date"),
     time: timeForServices,});
     timeForServices=addTime(JSON.parse(window.localStorage.getItem("order1"))[prop].timeToMake,timeForServices)

   }
  console.log(JSON.stringify(OrderArr));
    fetch("https://localhost:5001/api/order/" +sumTime, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        
        'Authorization': 'Basic '+btoa((JSON.parse(window.localStorage.getItem("userData"))).username+':'+(JSON.parse(window.localStorage.getItem("userPassword")))),
        
      },
      body: JSON.stringify(OrderArr)
     
    
        
      
    })
      .then((response) => response.json())
      //Then with the data from the response in JSON...
      
      .then((data) => {
       
        console.log("Success:", data);
        openWind=true;
        setShowBoard(!showBoard)
      })
      //Then with the error genereted...
      .catch((error) => {
         console.log("hhjhj");
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
                  {orders.length != 0 && <a
                    href="#"
                    className="btn btn-default"
                    onClick={() => {
                      
                      console.log(window.localStorage);
                      if(window.localStorage.getItem("userData")==null || window.localStorage.getItem("userData")=='"E"')
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
                  </a>}
                  {showDate && (
                    <div id="myModal" className="modal">
                      <div className="modal-content2">
                        <span
                          className="close"
                          onClick={() => setShowDate(!showDate)
                        
                          
                          }
                        >
                          &times;
                        </span>
                        <p className="lead">
                        Choose date and time for your order.
                        </p>
                        <DatePicker
                          selected={startDate}
                          onChange={(date) => 
                           { 
                            setStartDate(date);
                            checkIncludedTime(date);
                               console.log(toSQLdateTime(date,"date"));
                               console.log(setHours(setMinutes(new Date(), 0), 9)>new Date()?setHours(setMinutes(new Date(), 0), 9):new Date());
                                
                           }
                          }
                          showTimeSelect
                          timeFormat="HH:mm"

                          minTime={setHours(setMinutes(new Date(), 0), 9)
                         
                        }
                          maxTime={setHours(setMinutes(new Date(), 0), 18)}
                          minDate={new Date()}
                       
                          includeTimes={
                            checkTime
                          }
                        
                          dateFormat="MMMM d, yyyy h:mm aa"
                          
                          inline
                        />
                       <a
                          href="#"
                          className="btn btn-default"
                          onClick={()=>
                            {
                              if(toMinutes(timeForServices)===0){
                                setShowErrorBoard(!showErrorBoard);
                              }
                               else{
                              handleConfirm(sumTime);
                              }
                            }
                          }
                        >
                          Confirm order
                        </a>
                        {showErrorBoard && (
                      <div id="myModal" className="modal">
                        <div className="modal-content-showErrorBoard">
                          <div>
                          <span
                            className="close"
                            onClick={() => setShowErrorBoard(!showErrorBoard)}
                          >
                            &times;
                          </span>
                      
                          <p className="logout-text showErrorBoard-text"  >Please, select an order time!</p>
                          <button
                            className="showErrorBoard-button" 
                            onClick={() => setShowErrorBoard(!showErrorBoard)}
                          >
                           
                            Go back
                          </button>
                          </div>
                        </div>
                      </div>
                    )}

                        {showBoard && (
                      <div id="myModal" className="modal">
                        <div className="modal-content-showErrorBoard">
                          <div>
                          <span
                            className="close"
                            onClick={() => setShowBoard(!showBoard)}
                          >
                            &times;
                          </span>
                      
                          <p className="logout-text">Your order has been accepted. Return to the selection of services?</p>
                          <button
                            className="showErrorBoard-button" 
                            onClick={()=>
                              {
                                window.localStorage.removeItem("order1")
                                navigate("/categoryList");
                               
                              }}
                          >
                            {" "}
                            category list
                          </button>
                          </div>
                        </div>
                      </div>
                    )}
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
