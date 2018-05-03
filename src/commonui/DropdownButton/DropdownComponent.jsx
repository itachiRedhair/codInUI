import React, { Component } from "react";
import { DropdownButton, MenuItem, SplitButton } from "react-bootstrap";

//styles
import './DropdownComponent.scss';

const DropdownComponent = ({...props, children}) => {
    console.log("props from profile", props, children);
    const list = props.list.map(item => {
        return <MenuItem eventKey={item.name} key={item.name} onClick={item.onClickHandler}>{item.name}</MenuItem>
    })
    return <DropdownButton {...props} className='custom-dropdown'>
        {list}
        {children}
    </DropdownButton>;
};

export default DropdownComponent;