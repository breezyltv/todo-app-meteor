import React from "react";
import { CarryOutOutlined } from "@ant-design/icons";
import moment from "moment";
import { Space } from "antd";
import TaskAction from "./TaskAction";
const Header = () => {
    return (
        <div className="head-bar">
            <div className="head-bar-title">
                <CarryOutOutlined />
                <aside className="head-bar-title-align">
                    <span className="head-bar-title-text">Today </span>
                    <span className="head-bar-title-date">
                        {moment(new Date()).format("ll")}{" "}
                    </span>
                </aside>
            </div>
            <TaskAction />
        </div>
    );
};

export default Header;
