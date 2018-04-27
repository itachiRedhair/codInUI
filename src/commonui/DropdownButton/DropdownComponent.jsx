import React, { Component } from "react";
import { DropdownButton, MenuItem, SplitButton } from "react-bootstrap";

//styles
import './DropdownComponent.scss';

const DropdownComponent = (props) => {
    console.log("props from profile", props);
    const list = props.list.map(item => {
        return <MenuItem eventKey={item.name} key={item.name}>{item.name}</MenuItem>
    })
    return <DropdownButton {...props} className='custom-dropdown'>
        {list}
    </DropdownButton>;
};

export default DropdownComponent;