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
