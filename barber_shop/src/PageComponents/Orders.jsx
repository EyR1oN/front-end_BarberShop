import React, { useState, useEffect } from "react";

export default function Orders() {
  const [orders, setOrders] = useState(JSON.parse(window.localStorage.getItem("orders"))||[]);
  useEffect(() => {
    console.log(orders); 
  }, []);
  const handleDelete=(orderId)=>{
  const newOrder =orders.filter((el)=>el.id!==orderId);
  setOrders(newOrder);
  window.localStorage.setItem("orders", JSON.stringify(newOrder));
  console.log( JSON.stringify(newOrder));
}
  return (
    <div>
      
      <div className="content back-photo">
        <div className="container">
          <div className="row back-white">
            <div className="login-field">
              <h1>Orders</h1>
              <p className="log-regist-p"> Please order the services you prefer.</p>
              <form>
              
                <div className="row">
               
                <div>
                {orders?.map((order) => {
              return (
                    <div>
                      <div className="service-icon">
                      <img
                        src={order.picture}
                        className="img-order"
                        alt=" "
                      />
                    </div>
                    <button className="btn btn-default button-servsel" onClick={()=>{
  const newOrder =orders.filter((el)=>el.id!==order.id);
  console.log(newOrder);
  setOrders(newOrder);
  window.localStorage.setItem("orders", JSON.stringify(newOrder));
  console.log( JSON.stringify(newOrder))}}>Delete</button>
                    </div>
                );
              })}
                  </div>
                  
                  
                 </div>
                 <div className="col-lg-12 col-sm-12 col-md-12 col-xs-12 text-center">
                     <a href="#" className="btn btn-default"> Place your order </a>
                 </div>
                 
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
