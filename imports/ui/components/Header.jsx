import React from "react";
import { BookOutlined } from "@ant-design/icons";
import TaskAction from "./TaskAction";
const Header = () => {
    return (
        <div className="head-bar">
            <div className="head-bar-title">
                <BookOutlined />
                <span className="head-bar-title-text">Todo Management </span>
            </div>
            <TaskAction />
        </div>
    );
};

export default Header;
