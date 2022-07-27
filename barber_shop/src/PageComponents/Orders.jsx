import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Orders() {
  const [orders, setOrders] = useState(JSON.parse(window.localStorage.getItem("order1"))||[]);
  useEffect(() => {
    console.log(orders); 
   
  }, []);
 
let count=0;

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
              <td className="order-text" >{order.timeToMake}</td>
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
