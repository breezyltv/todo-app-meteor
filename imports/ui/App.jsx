import React from "react";
import Task from "./Task";
import Header from "./components/Header";
import { useTracker } from "meteor/react-meteor-data";
import { TasksCollection } from "/imports/api/TasksCollection";
import TaskContent from "./TaskContent";
import { Button } from "antd";

export const App = () => {
    const tasks = useTracker(() => TasksCollection.find({}).fetch());
    console.log(tasks);
    return (
        <div className="container">
            <div className="wrapper">
                <Header />
                <TaskContent />
            </div>
        </div>
    );
};
