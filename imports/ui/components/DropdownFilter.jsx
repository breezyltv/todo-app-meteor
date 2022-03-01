import React from "react";
import { Select, Row } from "antd";

const { Option } = Select;

const DropdownFilter = ({ setOrderBy, setFilterBy }) => {
    function onChange(value) {
        //console.log(`selected ${value}`);
        setFilterBy(value);
    }
    function onOrderByChange(value) {
        //console.log(`selected ${value}`);
        setOrderBy(value);
    }

    return (
        <Row className="dropdown-filter" justify="space-between">
            <Select
                placeholder="Order By"
                onChange={onOrderByChange}
                size="small"
                style={{ width: 100 }}
            >
                <Option value="newest">Newest</Option>
                <Option value="oldest">Oldest</Option>
            </Select>
            <Select
                placeholder="Filter By"
                onChange={onChange}
                size="small"
                style={{ width: 100 }}
            >
                <Option key={0} value="completed">
                    Completed
                </Option>
                <Option key={1} value="undone">
                    Undone
                </Option>
                <Option key={2} value="overdue">
                    Overdue
                </Option>
                <Option key={3} value="dueToday">
                    Due Today
                </Option>
                <Option key={4} value="default">
                    Default
                </Option>
            </Select>
        </Row>
    );
};

export default DropdownFilter;
