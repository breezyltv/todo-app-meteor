import React from "react";
import { Button } from "antd";
import { PlusSquareOutlined } from "@ant-design/icons";
const TaskAction = () => {
    return (
        <aside className="task-action">
            <Button type="link" ghost>
                <PlusSquareOutlined />
            </Button>
        </aside>
    );
};

export default TaskAction;
