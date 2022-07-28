import React, { useState, useEffect,useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import DatePicker from "react-datepicker";

//import'react-datepicker/dist/react-datepicker.css'



export default function Orders() {
  const addMonths = require('addmonths')
  const [orders, setOrders] = useState(JSON.parse(window.localStorage.getItem("order1"))||[]);
  const[showDate, setShowDate]=useState(false);
  
  useEffect(() => {
    console.log(orders); 
   
  }, []);
  
    const [startDate, setStartDate] = useState(setHours(setMinutes(new Date(), 30), 16));
    const [endDate, setEndDate] = useState(null);
    const onChange = (dates) => {
      const [start] = dates;
      setStartDate(start);
    
    };

    let handleColor = (time) => {
      return time.getHours() > 12 ? "text-success" : "text-error";
    };
let count=0;
let hour=0;
let all=0;
let minute=0;
let sumHour=0;
let sumMinute=0;
let sumTime=0;
const time=(time1)=>{
  hour=time1.split(":", 1);
  all=time1.split(":", 2);
  minute=all.slice(1, 2);
  sumHour=Number(sumHour)+Number(hour);
  sumMinute=Number(sumMinute)+Number(minute);
  sumTime=Number(sumTime)+Number(minute)+Number(sumHour*60);
  console.log(sumHour+"hour  "+sumMinute+"minute  "); 
  console.log("AllTime:"+sumTime); 
}
  return (
    <div>
      
      <div className="content back-photo">
        <div className="container">
          <div className="row back-white">
            <div className="login-field order-size">
              <h1>Orders</h1>
              <p className="log-regist-p"> Please order the services you prefer.</p>
              <form>
              
                <div className="row">
               
                <div >

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
              <td className="order-text"  onLoad ={time(order.timeToMake)}>{hour+"h"+" "+minute+"m"}</td>
              <td className="order-text price1" onLoad ={count=count+(order.price)}>{order.price}$  </td>
              <td className="butcent">
               
                <button className="btn btn-danger btn-sm " onClick={()=>{
  const newOrder =orders.filter((el)=>el.id!==order.id);
  console.log(newOrder);
  setOrders(newOrder);
  window.localStorage.setItem("order1", JSON.stringify(newOrder));
  console.log( JSON.stringify(newOrder))}}>Delete</button>
                 
                
              </td>
            </tr>
          </tbody>
            );
          })}
        </table> 
        <div className="d-flex justify-content-end">
          <h5 className=" justify-content-end">Total: <span className="price text-success">{count}$</span></h5>
          <h5 className=" justify-content-end">All Time: <span className="price text-success">{sumTime}m</span></h5>
        </div>
      </div>
                </div>
               
                 <div>
                <div  className="orders-plus">
                <Link to="/categoryList" className="button-plus">
                      +
                    </Link>
                    
                     </div>
                     </div> 
                 </div>
                 <div className="col-lg-12 col-sm-12 col-md-12 col-xs-12 text-center">
                     <a href="#" className="btn btn-default" onClick={()=>setShowDate(!showDate)}> Place your order </a>
                     {showDate &&  <div id="myModal" class="modal">
                      <div class="modal-content2">
                        <span class="close" onClick={()=>setShowDate(!showDate)}>&times;</span>
                        <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      showTimeSelect
      minDate={new Date()}
      maxDate={addMonths(new Date(), 5)}
      excludeTimes={[
        setHours(setMinutes(new Date(), 0), 17),
        setHours(setMinutes(new Date(), 30), 18),
        setHours(setMinutes(new Date(), 30), 19),
        setHours(setMinutes(new Date(), 30), 17),
      ]}
      dateFormat="MMMM d, yyyy h:mm aa"
    
                           inline
                         
                        />
                      </div>
                    </div>}
                 </div>
                 <div>
              

</div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
