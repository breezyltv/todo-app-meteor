import React from "react";
import moment from "moment";
import { Typography } from "antd";

const { Text, Paragraph } = Typography;
const dateFormatList = ["MM/DD/YYYY", "MM/DD/YY"];

const circleStyle = {
    content: "",
    display: "inline-block",
    width: "15px",
    height: "15px",
    "-moz-border-radius": "7.5px",
    "-webkit-border-radius": "7.5px",
    borderRadius: "7.5px",
    backgroundColor: "#69b6d5",
};

const Task = () => {
    return (
        <a
            onClick={() => {
                console.log("a task item has clicked");
            }}
        >
            <div className="task-content-list-item">
                <div className="task-content-list-item-status">
                    <span className="task-content-list-item-status-title">
                        <span
                            className="task-content-list-item-status-title-circle"
                            style={{ backgroundColor: "#69b6d5" }}
                        ></span>{" "}
                        Undone
                    </span>
                    <span className="task-content-list-item-status-date">
                        {moment(new Date()).format(dateFormatList[1])}
                    </span>
                </div>
                <article className="task-content-list-item-content">
                    <Text className="task-content-list-item-content-title">
                        Spring Campaign???
                    </Text>
                    <Paragraph ellipsis italic>
                        Hey, let make a wonderful in spring with friends and
                        family.
                    </Paragraph>
                </article>
            </div>
        </a>
    );
};

export default Task;
