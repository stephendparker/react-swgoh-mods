import React from "react";
import { Router, Link } from "react-router-dom";
import history from "../../utils/history";
import { Menu } from "antd";
import "./index.css";

const GlobalMenu = () => {
    return (
        <Router history={history}>
            <Menu mode="horizontal" >
                <Menu.Item key="home">
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item key="modplayground">
                    <Link to="/modplayground">Mod Playground</Link>
                </Menu.Item>
            </Menu>
        </Router>
    );
};

export default GlobalMenu;
