import React from "react"
import {Icon} from "@iconify-icon/react"
import { FaReact, FaPython, FaJava, FaHtml5, FaCss3Alt } from "react-icons/fa"
import { SiCplusplus, SiJavascript } from "react-icons/si"

export default function About() {

    return (
        <div className="about--container">
            <div className="about--left">
                <div className="about--top--left">
                    <h3>About me</h3>
                    <p className="about--text">My name is Jack O'Brien and I am a senior at the <a className="about--college" href="https://www.holycross.edu/">College of the Holy Cross</a> and an aspiring software-developer. I major in both Mathematics and Computer Science with a love for learning new things. I have a strong command over algorithmic concepts and data structures with languages such as Python and Java as well as a newfound passion for frontend development with HTML, CSS, JavaScript, and ReactJS. Not only do I like learning new concepts, I also love teaching others the skills that I know. Consequently, I became a Teaching Assistant/Grader for the Computer Science department at my college. I TA for both the intro CS class, Techniques of Programming which is taught in Java, and Data Structures which is taught in C++.</p>
                        {/* passage about myself, TAing */}
                </div>
            </div>
            
            <div className="about--right">
                <div className="about--top--right">
                    <h3>My Toolbox</h3>
                    <div className="columns">
                        <ul>
                            <li>
                                <strong> - </strong>Python
                            </li>
                            <li>
                                <strong> - </strong>Java
                            </li>
                            <li>
                                <strong> - </strong>JavaScript
                            </li>
                            <li>
                                <strong> - </strong>C++
                            </li>
                        </ul>
                        <ul>
                            <li>
                            <strong> - </strong> HTML
                            </li>
                            <li>
                                <strong> - </strong>CSS
                            </li>
                            <li>
                                <strong> - </strong>ReactJS
                            </li>
                            <li>
                                <strong> - </strong>MATLAB
                            </li>
                        </ul>
                    </div>
                    
                </div>
                <div className="about--middle--right">
                    <div className="rows">
                        <ul className="row">
                            <li title="Python">
                                <FaPython className="tool--icon" />

                            </li>
                            <li title="Java">
                                <FaJava className="tool--icon" />
                            </li>
                            <li title="JavaScript">
                                <SiJavascript className="tool--icon" />

                            </li>
                            <li title="C++">
                                <SiCplusplus className="tool--icon" />
                            </li>
                        </ul>
                        <ul className="row">
                            <li title="HTML5">
                                <FaHtml5 className="tool--icon" />
                            </li>
                            <li title="CSS">
                                <FaCss3Alt className="tool--icon" />
                            </li>
                            <li title="ReactJS">
                                <FaReact className="tool--icon" />  
                            </li>
                            <li title="MATLAB">
                                <Icon className="tool--icon" icon="file-icons:matlab" />
                            </li>
                        </ul>
                        </div>
                    </div>
                
                    <div className="about--bottom-left">
                        <h3>Elective Coursework</h3>
                        <ul className="about--coursework">
                            <li>
                                <strong> - </strong> Artificial Intelligence
                            </li>
                            <li>
                                <strong> - </strong> Computer Networking
                            </li>
                            <li>
                                <strong> - </strong> Mathematical Modeling
                            </li>
                            <li>
                                <strong> - </strong> Probability Theory
                            </li>
                            <li>
                                <strong> - </strong> Numerical Analysis
                            </li>
                            <li>
                                <strong> - </strong> Databases (Spring 2023)
                            </li>
                        </ul>
                        {/* elective coursework */}
                    </div>
                    
            </div>
        </div>
    )
}