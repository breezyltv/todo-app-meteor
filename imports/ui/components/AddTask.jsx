import { Input, Col, Row, Button, DatePicker } from "antd";
import { PlusSquareOutlined } from "@ant-design/icons";
import React from "react";

const AddTask = () => {
    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };

    return (
        <div className="task-header">
            <Row justify="space-around">
                <Col span={10}>
                    <Input placeholder="Type to Add new Task" />
                </Col>
                <Col span={8}>
                    <DatePicker onChange={onChange} />
                </Col>
                <Col span={6}>
                    <Button type="primary">
                        <PlusSquareOutlined /> task
                    </Button>
                </Col>
            </Row>
        </div>
    );
};

export default AddTask;
