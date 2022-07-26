import React from 'react'

export default function Orders() {
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
                    <div className="orders-plus">
                     <button className='button-plus'>+</button>
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
