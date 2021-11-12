import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import './App.css';
import Home from "./Pages/Homepage/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Shop from "./Pages/Shop/Shop";
import Footer from "./Component/Shared/Footer/Footer";
import Navbar from "./Component/Shared/Navbar/Navbar";
import Login from "./Component/Login/Login";
import Register from "./Component/Register/Register";
import Dashboard from "./Pages/DashBoard/Dashboard";
import Review from "./Pages/Review/Review";
import Payment from "./Pages/Payment/Payment";
import MyOrders from "./Pages/My Orders/My-Orders";
import MakeAAdmin from "./Pages/Admin/Make.A.Admin/MakeAAdmin";
import ManageAllProducts from "./Pages/Admin/Manage.all.products/ManageAllProducts";
import Notfound from "./Pages/NotFound/Notfound";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
      <Switch>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/makeAdmin">
            <MakeAAdmin></MakeAAdmin>
          </Route>
          <Route path="/manageproducts">
            <ManageAllProducts></ManageAllProducts>
          </Route>
          <Route path="/myorder">
            <MyOrders></MyOrders>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/payment">
            <Payment></Payment>
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/shop">
            <Shop/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">

            <Notfound></Notfound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      
    </div>
  );
}

export default App;
