import React from "react";
import { Menu, Dropdown, Checkbox } from "semantic-ui-react";
import piggy from "../assets/porco.png";

const Nav = ({ setFilterGreased, setSortCriteria }) => {
    return (
        <Menu className="navWrapper" pointing>
            <Menu.Item header className="headerText">HogWild</Menu.Item>
            <Menu.Item>
                <img src={piggy} className="App-logo" alt="piggy" />
            </Menu.Item>
            <Menu.Item className="normalText">
                A React App for County Fair Hog Fans
            </Menu.Item>
            <Menu.Item>
                <Checkbox
                    label='Show Greased Hogs'
                    onChange={(e, { checked }) => setFilterGreased(checked)}
                />
            </Menu.Item>
            <Menu.Item>
                <Dropdown
                    placeholder='Sort By'
                    selection
                    options={[
                        { key: 'name', text: 'Sort by Name', value: 'name' },
                        { key: 'weight', text: 'Sort by Weight', value: 'weight' }
                    ]}
                    onChange={(e, { value }) => setSortCriteria(value)}
                />
            </Menu.Item>
        </Menu>
    );
};

export default Nav;
