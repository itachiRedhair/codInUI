import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./Notification.scss";

export default class Notification extends Component {
  render() {
    return (
      <div className="notifications new align-new responsive">
        <a href="" data-toggle="dropdown">
          <i className="fa fa-bell-o align" />
          <sup>
            <span className="counter">8</span>
          </sup>
        </a>

        <div className="dropdown-menu notifications-dropdown-menu">
          <ul className="notifications-container">
            <li>
              <a href="" className="notification-item">
                <div className="img-col">
                  <div className="img" />
                </div>
                <div className="body-col">
                  <p>
                    <span className="accent">Zack Alien</span> pushed new
                    commit:
                    <span className="accent">
                      Fix page load performance issue
                    </span>.
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="" className="notification-item">
                <div className="img-col">
                  <div className="img" />
                </div>
                <div className="body-col">
                  <p>
                    <span className="accent">Amaya Hatsumi</span> started new
                    task:
                    <span className="accent">Dashboard UI design.</span>.
                  </p>
                </div>
              </a>
            </li>
            <li>
              <a href="" className="notification-item">
                <div className="img-col">
                  <div className="img" />
                </div>
                <div className="body-col">
                  <p>
                    <span className="accent">Andy Nouman</span> deployed new
                    version of
                    <span className="accent">NodeJS REST Api V3</span>
                  </p>
                </div>
              </a>
            </li>
          </ul>

          <footer>
            <ul>
              <li>
                <a href="">View All</a>
              </li>
            </ul>
          </footer>
        </div>
      </div>
    );
  }
}
