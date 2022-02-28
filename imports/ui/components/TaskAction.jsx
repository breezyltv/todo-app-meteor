import React, { useState, createRef } from "react";
import { useTracker } from "meteor/react-meteor-data";
import { TagsCollection } from "/imports/api/TagsCollection";
import { TasksCollection } from "/imports/api/TasksCollection";
import { Button, Input, Drawer, Form, DatePicker, Select, Space } from "antd";
import {
    PlusSquareOutlined,
    CalendarOutlined,
    UndoOutlined,
} from "@ant-design/icons";
const { Option } = Select;
import moment from "moment";
const TaskAction = () => {
    const tagsData = useTracker(() => TagsCollection.find({}).fetch());
    const formRef = createRef();
    const [form] = Form.useForm();
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    const onTaskFinish = (task) => {
        //console.log(task);
        //console.log(task.dueDate.toDate());
        //insert task to database
        TasksCollection.insert({
            ...task,
            dueDate: task.dueDate.toDate(),
            isDone: false,
            status: "todo",
        });
        setVisible(false);
    };

    const onReset = () => {
        formRef.current.resetFields();
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
                height={500}
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
                                message: "Title can not be blank!",
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
                    <Form.Item
                        name="dueDate"
                        rules={[
                            {
                                required: true,
                                message: "Please select task's due date!",
                            },
                        ]}
                    >
                        <DatePicker
                            disabledDate={(current) =>
                                current && current < moment().startOf("day")
                            }
                            format="MM/DD/YYYY"
                            placeholder="Due Date"
                        />
                    </Form.Item>
                    <Form.Item name="tags">
                        <Select
                            mode="tags"
                            style={{ width: "100%" }}
                            placeholder="add tags"
                        >
                            {tagsData &&
                                tagsData[0] &&
                                tagsData[0].tags.map((tag) => (
                                    <Option value={tag}>{tag}</Option>
                                ))}
                        </Select>
                    </Form.Item>
                    <Form.Item>
                        <div className="task-drawer-button">
                            <Button
                                htmlType="button"
                                icon={<UndoOutlined />}
                                onClick={onReset}
                            >
                                Reset
                            </Button>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="task-form-button"
                                icon={<PlusSquareOutlined />}
                                block
                            >
                                Create
                            </Button>
                        </div>
                    </Form.Item>
                </Form>
            </Drawer>
        </>
    );
};

export default TaskAction;
