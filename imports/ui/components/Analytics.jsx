import React from "react";
import { countTasksStatus } from "../../utils";
const Analytics = ({ tasks }) => {
    const counts = countTasksStatus(tasks);

    return (
        <article className="task-content-analytics">
            <div className="analytics-overdue">
                <span className="analytics-count">{counts.overdue}</span>
                <span className="analytics-text">overdue</span>
            </div>
            <div className="ç">
                <span className="analytics-count">{counts.undone}</span>
                <span className="analytics-text">Undone</span>
            </div>
            <div className="analytics-completed">
                <span className="analytics-count">{counts.completed}</span>
                <span className="analytics-text">Completed</span>
            </div>
            <div className="analytic-duetoday">
                <span className="analytics-count">{counts.dueToday}</span>
                <span className="analytics-text">Due Today</span>
            </div>
        </article>
    );
};

export default Analytics;
