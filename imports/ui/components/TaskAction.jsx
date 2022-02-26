import React, { useState } from "react";
import { Button, Input, Drawer, Form, DatePicker } from "antd";
import { PlusSquareOutlined, CalendarOutlined } from "@ant-design/icons";
import moment from "moment";
const TaskAction = () => {
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const onTaskFinish = (task) => {
        console.log(task);
    };

    return (
        <>
            <aside className="task-action">
                <Button type="link" ghost onClick={showDrawer}>
                    <PlusSquareOutlined />
                </Button>
            </aside>
            <Drawer
                placement="bottom"
                width={500}
                onClose={onClose}
                visible={visible}
                title="Create new task"
                extra={<CalendarOutlined />}
                className="task-drawer"
            >
                <Form
                    name="addTask"
                    className="task-form"
                    onFinish={onTaskFinish}
                >
                    <Form.Item
                        name="title"
                        hasFeedback
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input
                            size="large"
                            placeholder="What do you need to do?"
                        />
                    </Form.Item>
                    <Form.Item name="note">
                        <Input.TextArea placeholder="note..." rows={4} />
                    </Form.Item>
                    <Form.Item name="dueDate">
                        <DatePicker
                            disabledDate={(current) =>
                                current && current < moment().startOf("day")
                            }
                            format="MM/DD/YYYY"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className="task-form-button"
                            block
                        >
                            Create
                        </Button>{" "}
                    </Form.Item>
                </Form>
            </Drawer>
        </>
    );
};

export default TaskAction;
