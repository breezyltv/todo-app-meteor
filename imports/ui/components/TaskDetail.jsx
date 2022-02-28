import React, { useState } from "react";
import { useTracker } from "meteor/react-meteor-data";
import { TagsCollection } from "/imports/api/TagsCollection";
import { TasksCollection } from "/imports/api/TasksCollection";
import {
    Button,
    Input,
    Drawer,
    Form,
    DatePicker,
    Select,
    Tag,
    Switch,
} from "antd";
import {
    CheckOutlined,
    CalendarOutlined,
    EditOutlined,
    DeleteOutlined,
    CloseOutlined,
} from "@ant-design/icons";
const { Option } = Select;
import moment from "moment";
const TaskDetail = ({
    task,
    visible,
    setVisible,
    onSwitchTaskChange,
    switchTask,
}) => {
    const tagsData = useTracker(() => TagsCollection.find({}).fetch());
    const onClose = () => {
        setVisible(false);
    };
    const onTaskFinish = (taskData) => {
        console.log("update", taskData);

        //insert tags into database
        insertTag(task.tags);

        //update task to database
        TasksCollection.update(task._id, {
            $set: {
                ...taskData,
                dueDate: taskData.dueDate.toDate(),
            },
        });

        setVisible(false);
    };

    const insertTag = (arrTags) => {
        if (arrTags === undefined || arrTags.length === 0) return;

        arrTags.forEach((tag) => {
            if (tagsData.includes(tag.toLowerCase())) {
                TasksCollection.update(tagsData._id, { $push: { tags: tag } });
            }
        });
    };

    return (
        <>
            <Drawer
                placement="bottom"
                height={500}
                onClose={onClose}
                visible={visible}
                title={
                    <Tag color={task.displayStatus[0]}>
                        {task.displayStatus[1]}
                    </Tag>
                }
                extra={<CalendarOutlined />}
                className="task-drawer"
            >
                <Form
                    name="detailTask"
                    className="task-form"
                    onFinish={onTaskFinish}
                    initialValues={{
                        ...task,
                        dueDate: moment(new Date(task.dueDate)),
                    }}
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
                            disabled={task.isDone}
                        />
                    </Form.Item>
                    <Form.Item name="note">
                        <Input.TextArea
                            placeholder="note..."
                            rows={4}
                            disabled={task.isDone}
                        />
                    </Form.Item>
                    <div className="task-drawer-deadline">
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
                                disabled={task.isDone}
                            />
                        </Form.Item>

                        <Form.Item name="isDone">
                            <label>Set Complete</label>
                            <Switch
                                checkedChildren={<CheckOutlined />}
                                unCheckedChildren={<CloseOutlined />}
                                size="large"
                                onChange={onSwitchTaskChange}
                                checked={switchTask}
                            />
                        </Form.Item>
                    </div>
                    <Form.Item name="tags">
                        <Select
                            mode="tags"
                            style={{ width: "100%" }}
                            placeholder="add tags"
                            disabled={task.isDone}
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
                                type="primary"
                                icon={<DeleteOutlined />}
                                danger
                            >
                                Delete
                            </Button>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="task-form-button"
                                icon={<EditOutlined />}
                                block
                                disabled={task.isDone}
                            >
                                Update
                            </Button>
                        </div>
                    </Form.Item>
                </Form>
            </Drawer>
        </>
    );
};

export default TaskDetail;
