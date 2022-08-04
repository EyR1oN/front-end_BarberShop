import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import { toSQLdateTime, addTime } from "../Helpers/DateTimeConvertor";

//import'react-datepicker/dist/react-datepicker.css'

export default function Orders() {
  let navigate = useNavigate();
  const addMonths = require("addmonths");
  const [orders, setOrders] = useState(
    JSON.parse(window.localStorage.getItem("order1")) || []
  );
  const [showDate, setShowDate] = useState(false);
  const [postOrder, setPostOrder] = useState({
    userId: 1,
    serviceId: 1,
    placeId: 1,
    data_time: "2020-08-20 23:02:02",
  });

  const [startDate, setStartDate] = useState(
    setHours(setMinutes(new Date(), 0), 0)
    //new Date()
  );
  const [checkTime, setCheckTime] = useState([]);

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

  const checkIncludedTime = (date) => {
    // event.preventDefault();
    // console.log("https://localhost:5001/api/order/" +sumTime+"/"+toSQLdateTime(date,"date"));
    fetch(
      "https://localhost:5001/api/order/" +
        sumTime +
        "/" +
        toSQLdateTime(date, "date")
    )
      .then((response) => response.json())
      .then((data) => {
        //  console.log(data);
        // console.log("count "+data.length);
        let arr = [];
        for (let i = 0; i < data.length; i++) {
          var hours = Number(data[i]) / 60;
          var rhours = Math.floor(hours);
          var minutes = (hours - rhours) * 60;
          var rminutes = Math.round(minutes);
          // console.log(rhours+" : "+rminutes);
          arr.push(setHours(setMinutes(new Date(), rminutes), rhours));
        }
        //console.log(arr);
        setCheckTime(arr);
      });
  };

  const handleConfirm = (sumTime) => {
    console.log("qqqqq  " + Number(sumTime));
    const OrderArr = [];
    let timeForServices = toSQLdateTime(startDate, "time");
    for (let prop in JSON.parse(window.localStorage.getItem("order1"))) {
      OrderArr.push({
        userId: JSON.parse(window.localStorage.getItem("userData")).id,
        serviceId: JSON.parse(window.localStorage.getItem("order1"))[prop].id,
        placeId: 1,
        date: toSQLdateTime(startDate, "date"),
        time: timeForServices,
      });
      timeForServices = addTime(
        JSON.parse(window.localStorage.getItem("order1"))[prop].timeToMake,
        timeForServices
      );
      // console.log(JSON.parse(window.localStorage.getItem("order1"))[prop].timeToMake);
      // console.log("timeForServices   "+timeForServices);
    }
    //  console.log(OrderArr);

    /* let time1=toSQLdateTime(startDate).split(" ")
  let time2=(time1[1].split(":"));
  let hour_from_DB=time2[0];
  let minute_from_DB=time2[1];
  let sumTimeFromDB =Number(minute_from_DB) + Number(hour_from_DB * 60);
  console.log("qxxxx - "+sumTimeFromDB);
  let PrimeTime=Number(sumTimeFromDB)+Number(sumTime);
  console.log(sumTime);
  console.log(PrimeTime);
    var hours = (Number(PrimeTime) / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
  console.log(rhours+" : "+rminutes);*/
    console.log(JSON.stringify(OrderArr));
    fetch("https://localhost:5001/api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",

        Authorization:
          "Basic " +
          btoa(
            JSON.parse(window.localStorage.getItem("userData")).username +
              ":" +
              JSON.parse(window.localStorage.getItem("userPassword"))
          ),
      },
      body: JSON.stringify(OrderArr),
    })
      .then((response) => response.json())
      //Then with the data from the response in JSON...

      .then((data) => {
        console.log("Success:", data);
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
                                  onLoad={(count = count + order.price)}
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
                      if (window.localStorage.getItem("userData") == null) {
                        alert("You aren't logged in");
                        navigate("/login");
                      } else {
                        setShowDate(!showDate);
                        // checkIncludedTime();
                      }
                    }}
                  >
                    {" "}
                    Place your order{" "}
                  </a>
                  {showDate && (
                    <div id="myModal" className="modal">
                      <div className="modal-content2">
                        <span
                          className="close"
                          onClick={
                            () => setShowDate(!showDate)
                            //</div> checkIncludedTime();
                            //  console.log(showDate);
                          }
                        >
                          &times;
                        </span>
                        <p className="lead">
                          Choose date and time for your order.
                        </p>
                        <DatePicker
                          selected={startDate}
                          onChange={(date) => {
                            setStartDate(date);
                            checkIncludedTime(date);
                            console.log(toSQLdateTime(date, "date"));
                            console.log(
                              setHours(setMinutes(new Date(), 0), 9) >
                                new Date()
                                ? setHours(setMinutes(new Date(), 0), 9)
                                : new Date()
                            );
                          }}
                          showTimeSelect
                          timeFormat="HH:mm"
                          minTime={
                            setHours(setMinutes(new Date(), 0), 9)
                            // ()=>{
                            //   console.log("hhh")
                            //   if(toSQLdateTime(new Date, "date")>toSQLdateTime(startDate,"date")){
                            //     console.log("if")
                            //    return(setHours(setMinutes(new Date(), 0), 9))
                            // }
                            //   else{
                            //     console.log("else")
                            //     return(new Date())
                            //  }
                            // }
                          }
                          maxTime={setHours(setMinutes(new Date(), 0), 18)}
                          minDate={new Date()}
                          includeTimes={checkTime}
                          dateFormat="MMMM d, yyyy h:mm aa"
                          inline
                        />
                        <a
                          href="#"
                          className="btn btn-default"
                          onClick={() => {
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
