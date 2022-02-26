import React from "react";
import Analytics from "../components/Analytics";
import DropdownFilter from "../components/DropdownFilter";
import Task from "../components/Task";

const TaskContent = () => {
    return (
        <div className="task-content">
            <Analytics />
            <DropdownFilter />
            <div className="task-content-list">
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
            </div>
        </div>
    );
};

export default TaskContent;
