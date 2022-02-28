import React from "react";
import { Select, Row } from "antd";

const { Option } = Select;

const DropdownFilter = () => {
    function onChange(value) {
        console.log(`selected ${value}`);
    }

    return (
        <Row className="dropdown-filter" justify="end">
            <Select
                placeholder="Filter By"
                onChange={onChange}
                size="small"
                style={{ width: 100 }}
            >
                <Option value="jack">Completed</Option>
                <Option value="lucy">Undone</Option>
                <Option value="tom">Overdue</Option>
                <Option value="tom">Due Today</Option>
            </Select>
        </Row>
    );
};

export default DropdownFilter;
