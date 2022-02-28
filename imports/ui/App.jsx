import React from "react";
import Header from "./components/Header";
import { useTracker } from "meteor/react-meteor-data";
import { TasksCollection } from "/imports/api/TasksCollection";
import TaskContent from "./pages/TaskContent";
import Footer from "./components/Footer";

export const App = () => {
    const tasks = useTracker(() => TasksCollection.find({}).fetch());

    return (
        <div className="container">
            <div className="wrapper">
                <div className="wrapper-content">
                    <Header />
                    <TaskContent tasks={tasks} />
                    <Footer />
                </div>
            </div>
        </div>
    );
};
