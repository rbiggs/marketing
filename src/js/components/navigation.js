"use strict";



//  I M P O R T

import { h } from "@composi/core";

//  U T I L

const links = [
  {
    name: "About",
    title: "About Ideas Never Cease",
    url: "#/about"
  },
  {
    name: "Projects",
    title: "Check out the Projects that Ideas Never Cease is working on!",
    url: "#/projects"
  },
  {
    name: "Contact",
    title: "Have a question? Get the contact info for Ideas Never Cease here",
    url: "#/contact"
  }
];



//  E X P O R T

export default function Navigation({ state }) {
  return (<RenderNavigation {...{state}} />);
}



//  H E L P E R S

function RenderNavigation({ state }) {

  const listItems = links.map(link => ( <a
      class={`header__navigation__item ${state === link.name.toLowerCase() ? 'active' : ''}`}
      href={link.url}
      title={link.title}
    >{link.name}</a>)
  );
  return (
    <nav class="header__navigation">
      {listItems}

      <a
        class={`header__navigation__item `}
        data-toggle="navigation"
        href="#"
        onclick={toggleNavigation}
        title="Toggle navigation menu"
      >Menu</a>
    </nav>
  );
}

function toggleNavigation(event) {
  event.preventDefault();
  document.querySelector(".header__navigation").classList.toggle("active");
}
