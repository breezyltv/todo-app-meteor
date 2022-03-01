import { Empty } from "antd";
import React, { useState } from "react";
import moment from "moment";
import Analytics from "../components/Analytics";
import DropdownFilter from "../components/DropdownFilter";
import Task from "../components/Task";

const noTasks = (
    <div className="task-content-empty">
        <Empty description="no tasks available!" />
    </div>
);

const TaskContent = ({ tasks }) => {
    const filter = {
        orderBy: "newest",
        filterBy: "default",
    };

    const [orderBy, setOrderBy] = useState(filter.orderBy);
    const [filterBy, setFilterBy] = useState(filter.filterBy);

    const taskOrder = (tasks) => {
        if (orderBy === "newest") {
            return tasks.sort((a, b) => b.dueDate - a.dueDate);
        }
        if (orderBy === "oldest") {
            return tasks.sort((a, b) => a.dueDate - b.dueDate);
        }
    };

    const tasksFilter = (tasks) => {
        const curDate = moment(new Date()).format("MM/DD/YYYY");
        if (filterBy !== filter.filterBy) {
            return taskOrder(
                tasks.filter((task) => {
                    if (filterBy === "overdue") {
                        return task.status === "overdue";
                    }
                    if (filterBy === "undone") {
                        return task.status === "todo";
                    }
                    if (task.isDone) {
                        return task.isDone;
                    }
                    const dueDate = moment(new Date(task.dueDate)).format(
                        "MM/DD/YYYY"
                    );
                    if (filterBy === "dueToday") {
                        return curDate === dueDate;
                    }
                })
            );
        }
        return taskOrder(tasks);
    };

    const getTasksFilter = tasksFilter(tasks);
    console.log(getTasksFilter);
    return (
        <div className="task-content">
            <Analytics tasks={tasks} />
            <DropdownFilter setOrderBy={setOrderBy} setFilterBy={setFilterBy} />
            {tasks ? (
                <div className="task-content-list">
                    {getTasksFilter.map((task) => (
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
