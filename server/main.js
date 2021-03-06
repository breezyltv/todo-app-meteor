import { Meteor } from "meteor/meteor";
import { TasksCollection } from "/imports/api/TasksCollection";
import { TagsCollection } from "/imports/api/TagsCollection";
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
            //create random fake due date and status
            const newRandomDate = randomDate("02/16/2022", "03/29/2022");
            task.dueDate = new Date(newRandomDate);
            task.status = getStatus(newRandomDate);
            //insert to TasksCollection
            TasksCollection.insert(task);
        });
    }
    // add some tags
    if (TagsCollection.find().count() === 0) {
        TagsCollection.insert({ tags: ["project", "personal", "work"] });
    }
});
