import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import axios from "axios";

import NavBar from "./components/NavBar";
import Photos from "./components/Photos";
import Footer from "./components/Footer";
import About from "./Pages/About";

import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

axios.defaults.baseURL = "http://jsonplaceholder.typicode.com";

function App() {
  return (
    <Router>
      <NavBar />
      <ToastContainer />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Photos} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
