import React, { useState } from "react";
import { TasksCollection } from "/imports/api/TasksCollection";
import moment from "moment";
import { Typography, Switch } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import { displayStatus } from "../../utils";
import TaskDetail from "./TaskDetail";
const { Text, Paragraph } = Typography;
const dateFormatList = ["MM/DD/YYYY", "MM/DD/YY"];

const Task = ({ task }) => {
    const [switchTask, setSwitchTask] = useState(task.isDone);
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };

    const status = displayStatus(task, TasksCollection);

    const onSwitchTaskChange = () => {
        //console.log(task._id);
        TasksCollection.update(task._id, {
            $set: {
                isDone: !task.isDone,
            },
        });
        setSwitchTask(!switchTask);
    };

    return (
        <>
            <div
                className="task-content-list-item"
                style={{
                    background: task.isDone
                        ? "#1d2d44"
                        : "rgba(15, 14, 71, 0.3)",
                }}
            >
                <div className="task-content-list-item-status">
                    <span className="task-content-list-item-status-title">
                        <span
                            className="task-content-list-item-status-title-circle"
                            style={{ backgroundColor: status[0] }}
                        ></span>{" "}
                        {status[1]}
                    </span>
                    <span className="task-content-list-item-status-date">
                        {moment(new Date(task.dueDate)).format(
                            dateFormatList[1]
                        )}
                    </span>
                </div>
                <a onClick={showDrawer}>
                    <article className="task-content-list-item-content">
                        <Text
                            className="task-content-list-item-content-title"
                            italic={task.isDone}
                            style={{
                                textDecoration: task.isDone
                                    ? "line-through"
                                    : "none",
                            }}
                            ellipsis
                        >
                            {task.title}
                        </Text>
                        <Paragraph
                            ellipsis
                            italic
                            style={{
                                textDecoration: task.isDone
                                    ? "line-through"
                                    : "none",
                            }}
                        >
                            {task.note}
                        </Paragraph>
                    </article>
                </a>
                <div className="task-content-list-item-tags">
                    <span>
                        <span className="task-content-list-item-tags-title">
                            #tags:
                        </span>{" "}
                        {task.tags &&
                            task.tags.map((tag, idx, arr) => {
                                if (idx !== arr.length - 1) {
                                    return <a key={idx}>{tag}, </a>;
                                } else {
                                    return <a key={idx}>{tag} </a>;
                                }
                            })}
                    </span>
                    <Switch
                        checkedChildren={<CheckOutlined />}
                        size="small"
                        onChange={onSwitchTaskChange}
                        // defaultChecked={task.isDone}
                        checked={switchTask}
                    />
                </div>
            </div>
            <TaskDetail
                visible={visible}
                setVisible={setVisible}
                task={{ ...task, displayStatus: status }}
                onSwitchTaskChange={onSwitchTaskChange}
                switchTask={switchTask}
            />
        </>
    );
};

export default Task;
