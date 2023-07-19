import React from "react";
import "../styling/projects.css";
import SearchPic from "../images/search.PNG";
import SortPic from "../images/sorting.PNG";

export default function Projects() {
  return (
    <div className="projects--container">
      <div className="projects--list">
        <div className="projects--item">
          <p className="projects--item--title"><strong>Search Visualizer</strong></p>
          <a href="https://obriensearchvisualizer.web.app" className="link"><img className="projects--item--img" src={SearchPic} alt="Search"/></a>
        </div>
        <div className="projects--item">
          <p className="projects--item--title"><strong>Sort Visualizer</strong></p>
          <a href="https://obriensortingvisualizer.web.app" className="link"><img className="projects--item--img" src={SortPic} alt="Sort"/></a>
        </div>
      </div>
    </div>
  );
}
