import React, { Component } from "react";

//Components imports

import Navbar from "./../../Navbar";

//Styles imports
import "./FirstRender.scss";

export default class FirstRender extends Component {

    render() {
            return (
                <React.Fragment>
                    <Navbar />
                    <div className="landing-container">
                        <h1>Happy Coding</h1>
                    </div>
                </React.Fragment>
            );
        }
    }

