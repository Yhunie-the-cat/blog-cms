import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";

import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import PhotosPage from "./pages/Photos";
import BlogPage from "./pages/Blog/";
import ContactPage from "./pages/Contact";
import SinglePost from "./pages/SinglePost";
import PageNotFound from "./pages/PageNotFound";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
   <React.StrictMode>
      <BrowserRouter>
         <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/photos" component={PhotosPage} />
            <Route path="/post/:slug" component={SinglePost} />
            <Route path="/post" component={BlogPage} />
            <Route path="/contact" component={ContactPage} />
            <Route component={PageNotFound} />
         </Switch>
      </BrowserRouter>
   </React.StrictMode>,
   document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
