import logo from "./logo.svg";
import Footer from "./PageComponents/Footer";
import Contact from "./PageComponents/Contact";
import NavBarUnlogged from "./PageComponents/NavBarUnlogged";
//import './App.css';
import NavBarLogged from "./PageComponents/NavBarLogged";
import Home from "./PageComponents/Home";
import "./CSS/bootstrap.min.css";
import "./CSS/font-awesome.min.css";
import "./CSS/style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CategoryList from "./PageComponents/CategoryList";
import Services from "./PageComponents/Services";
import Login from "./PageComponents/Login";
import Registration from "./PageComponents/Registration";
import NavBarController from "./PageComponents/NavBarController";
import Orders from "./PageComponents/Orders";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBarController />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/categoryList" element={<CategoryList />} />
          <Route path="/services/:id" element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
