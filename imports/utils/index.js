import moment from "moment";

export const displayStatus = (status, isDone) => {
    if (!isDone) {
        switch (status) {
            case "overdue":
                return ["#ff477e", "overdue"];

            case "todo":
                return ["#69b6d5", "undone"];

            default:
                return ["#9b9b7a", "unknown"];
                break;
        }
    } else {
        return ["#16db93", "completed"];
    }
};

export const countTasksStatus = (tasks) => {
    let counts = {
        overdue: 0,
        undone: 0,
        completed: 0,
        dueToday: 0,
    };
    if (tasks === undefined || tasks.length === 0) return counts;

    const curDate = moment(new Date()).format("MM/DD/YYYY");

    tasks.forEach((task) => {
        if (task.status === "overdue") {
            counts.overdue += 1;
        }
        if (task.status === "todo") {
            counts.undone += 1;
        }
        if (task.isDone) {
            counts.completed += 1;
        }

        const dueDate = moment(new Date(task.dueDate)).format("MM/DD/YYYY");
        //console.log(curDate, dueDate);
        if (curDate === dueDate) {
            counts.dueToday += 1;
        }
    });

    return counts;
};
