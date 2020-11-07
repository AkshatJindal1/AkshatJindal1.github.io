import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";
import React, { Fragment } from "react";
import {
  showBlog,
  showNavigationbar,
} from "./editable-stuff/configurations.json";

import AboutMe from "./components/home/AboutMe";
import { Blog } from "./components/blog/Blog";
import BlogPost from "./components/blog/BlogPost";
import Contact from "./components/home/Contact";
import Experience from './components/home/Experience'
import Footer from "./components/Footer";
import Leadership from "./components/home/Leadership";
import MainBody from "./components/home/MainBody";
import Navbar from "./components/Navbar";
import Project from "./components/home/Project";
import ProjectCard from "./components/home/ProjectCard";
import Skills from './components/home/Skills';

const Home = () => {
  return (
    <Fragment>
      <MainBody />
      <AboutMe />
      <Experience/>
      <Project />
      <Skills/>
      <Leadership/>
	  {/* <Media /> */}
	    <Contact />
    </Fragment>
  );
};

const App = () => (
  <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
    {showNavigationbar && <Navbar />}
    <Route path="/" exact component={Home} />
    {showBlog && <Route path="/blog" exact component={Blog} />}
    {showBlog && <Route path="/blog/:id" component={BlogPost} />}
    <Footer />
  </BrowserRouter>
);

export default App;
