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

import Notfound from "./Pages/NotFound/Notfound";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
import Purchase from "./Pages/Purchase/Purchase";
import DisplayReviews from "./Pages/Homepage/DisplayReviews/DisplayReviews";

function App() {
  return (
    <div className="App">
     <AuthProvider>
     <Router>
        <Navbar></Navbar>
      <Switch>
          <Route path="/about">
            <About></About>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/displayreviews">
            <DisplayReviews />
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
          <PrivateRoute path="/purchase/:purchaseId">
            <Purchase/>
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">

            <Notfound></Notfound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
     </AuthProvider>
      
    </div>
  );
}

export default App;
