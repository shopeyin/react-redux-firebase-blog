import React from "react";
import Navbar from "./components/navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import UserProfile from "./components/auth/profile/UserProfile";

import BlogDetails from "./components/blog/BlogDetails";
import SignIn from "./components/auth/signin/SignIn";
import SignUp from "./components/auth/signup/SignUp";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="main-body">
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/blog/:id" component={BlogDetails} />
            <Route path="/profile" component={UserProfile} />

            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
