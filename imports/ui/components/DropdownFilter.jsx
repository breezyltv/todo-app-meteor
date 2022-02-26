import React from "react";
import { Select, Row } from "antd";

const { Option } = Select;

const DropdownFilter = () => {
    function onChange(value) {
        console.log(`selected ${value}`);
    }

    return (
        <Row className="dropdown-filter" justify="end">
            <Select placeholder="Filter" onChange={onChange} size="small">
                <Option value="jack">Date</Option>
                <Option value="lucy">Undone</Option>
                <Option value="tom">Overdue</Option>
            </Select>
        </Row>
    );
};

export default DropdownFilter;
