import React from "react";

const Analytics = () => {
    return (
        <article className="task-content-analytics">
            <div className="analytics-overdue">
                <span className="analytics-count">10</span>
                <span className="analytics-text">overdue</span>
            </div>
            <div className="ç">
                <span className="analytics-count">10</span>
                <span className="analytics-text">todo</span>
            </div>
            <div className="analytics-completed">
                <span className="analytics-count">10</span>
                <span className="analytics-text">Completed</span>
            </div>
            <div className="analytic-duetoday">
                <span className="analytics-count">10</span>
                <span className="analytics-text">Due Today</span>
            </div>
        </article>
    );
};

export default Analytics;
