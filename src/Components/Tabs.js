import { useState } from "react";
import React from "react";

const Tabs = ({ children }) => {
    const [activeTab, setActiveTab] = useState(children[0].props.label);

    const handleClick = (e,newActiveTab) => {
        e.preventDefault();
        setActiveTab(newActiveTab);
    }

    return (
        <div>
            <ul className="tabs"> 
                {children.map((tab) => (
                    <li
                        className={tab.props.label === activeTab ? "current" : ""} 
                        key={tab.props.label}
                    >
                        <a href="#" className='text-decoration-none' onClick={(e) => handleClick(e, tab.props.label)}>{tab.props.label}</a> 
                    </li>
                ))}
            </ul>
            {children.map((one) => {
                if (one.props.label === activeTab)
                    return (
                        <div key={one.props.label} className="tabContent">
                            {one.props.children}
                        </div>
                    );
            })};
        </div>
    );
};

export default Tabs;
