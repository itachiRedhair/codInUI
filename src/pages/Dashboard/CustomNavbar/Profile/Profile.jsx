import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./Profile.scss";
import DropdownButton from "../../../../commonui/DropdownButton";
import { MenuItem } from "react-bootstrap";

export default class Profile extends Component {
  profileList = [
    {
      name: "Profile",
      onClickHanlder: () => {}
    },
    {
      name: "Notifications",
      onClickHanlder: () => {}
    },
    {
      name: "Settings",
      onClickHanlder: () => {}
    },
    {
      name: "Logout",
      onClickHandler: this.props.userLogOut
    }
  ];

  render() {
    const imgUrl =
      "https://media.licdn.com/dms/image/C4D03AQG3joys19g75w/profile-displayphoto-shrink_200_200/0?e=1529992800&v=beta&t=Z9ofdDDVOWV-BFRJkmGwSuALctIKKdAVhKu9BTcG_bY";
    const divStyle = {
      backgroundImage: "url(" + imgUrl + ")"
    };
    const profileDropdown = {
      background: "transparent",
      color: "green",
      border: "#d7dde4",
      boxShadow: "none",
      marginLeft: "-1rem"
    };
    return (
      <div>
        <div className="img" style={divStyle}>
          {" "}
        </div>
        <DropdownButton
          style={profileDropdown}
          title=""
          key="1"
          pullRight
          id="split-button-pull-right"
          id={`dropdown-basic-1`}
          list={this.profileList}
        />
      </div>
    );
  }
}
