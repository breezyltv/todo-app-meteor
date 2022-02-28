import { Space, Empty } from "antd";
import React from "react";
import Analytics from "../components/Analytics";
import DropdownFilter from "../components/DropdownFilter";
import Task from "../components/Task";

const noTasks = (
    <div className="task-content-empty">
        <Empty description="no tasks available!" />
    </div>
);

const TaskContent = ({ tasks }) => {
    return (
        <div className="task-content">
            <Analytics />
            <DropdownFilter />
            {tasks ? (
                <div className="task-content-list">
                    {tasks.map((task) => (
                        <Task key={task._id} task={task} />
                    ))}
                </div>
            ) : (
                noTasks
            )}
        </div>
    );
};

export default TaskContent;
