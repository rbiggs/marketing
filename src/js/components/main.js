"use strict";



//  I M P O R T

import { h } from "@composi/core";

//  U T I L S

import About from "../views/about";
import Contact from "../views/contact";
import Home from "../views/home";
import nope from "../views/nope";
import Projects from "../views/projects";



//  E X P O R T

export default function Main({ state }) {
  return (<RenderPage {...{ state }} />);
}



//  H E L P E R

function RenderPage(props) {

  const path = props.state
  switch (path) {
    case 'home':
      return (
        <main class="home">
          <Home/>
        </main>
      );
    case 'about':
      return (
        <main class={path}>
          <About/>
        </main>
      );
    case 'contact':
      return (
        <main class={path}>
          <Contact/>
        </main>
      );
    case 'projects':
      return (
        <main class={path}>
          <Projects/>
        </main>
      );
  }
  /*
  const path = props.state;

  switch(true) {
    case path === "home":
      return (
        <main class="home">
          {home()}
        </main>
      );

    case path === "about":
      return (
        <main class={path}>
          {about()}
        </main>
      );

    case path === "contact":
      return (
        <main class={path}>
          {contact()}
        </main>
      );

    case path === "projects":
      return (
        <main class={path}>
          {projects()}
        </main>
      );

    default:
      return (
        <main class="nope">
          {nope()}
        </main>
      );
  }
  */
}
