import { Meteor } from "meteor/meteor";
import { TasksCollection } from "/imports/api/TasksCollection";
import { randomDate, getStatus } from "./utils";

const mockTasks = [
    {
        title: "Spring Campaign???",
        note: "Hey, let make a wonderful in spring with friends and family.",
        dueDate: "",
        status: "unknown",
        isDone: false,
        tag: "",
    },
    {
        title: "Summer Campaign???",
        note: "Hey, let make a wonderful summer",
        dueDate: "",
        status: "unknown",
        isDone: false,
        tag: "",
    },
    {
        title: "Do todo project",
        note: "Make layouts and design UI",
        dueDate: "",
        status: "unknown",
        isDone: false,
        tag: "",
    },
];

Meteor.startup(() => {
    // If the Links collection is empty, add some data.
    if (TasksCollection.find().count() === 0) {
        mockTasks.forEach((task) => {
            //create fake due date and status
            const newRandomDate = randomDate("02/20/2022", "03/29/2022");
            task.dueDate = new Date(newRandomDate);
            task.status = getStatus(newRandomDate);
            //insert to TasksCollection
            TasksCollection.insert(task);
        });
    }
});
