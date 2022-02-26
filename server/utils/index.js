import moment from "moment";

export function randomDate(date1, date2) {
    function randomValueBetween(min, max) {
        return Math.random() * (max - min) + min;
    }
    var date1 = date1 || "01-01-1970";
    var date2 = date2 || new Date().toLocaleDateString();
    date1 = new Date(date1).getTime();
    date2 = new Date(date2).getTime();
    if (date1 > date2) {
        return new Date(randomValueBetween(date2, date1)).toLocaleDateString();
    } else {
        return new Date(randomValueBetween(date1, date2)).toLocaleDateString();
    }
}

export function getStatus(date) {
    // const current = moment(new Date()).format("MM/DD/YYYY");
    const curDate = new Date().getTime();
    const dueDate = new Date(date).getTime();
    console.log(
        moment(new Date(curDate)).format("MM/DD/YYYY"),
        moment(new Date(dueDate)).format("MM/DD/YYYY")
    );
    if (curDate < dueDate) {
        //console.log("todo", curDate, dueDate);
        return "todo";
    } else if (curDate > dueDate) {
        //console.log("overdue", curDate, dueDate);
        return "overdue";
    } else {
        console.log("unknown");
        return "unknown";
    }
}
