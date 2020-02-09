import React, { Component } from 'react';
import ImgOfMadhan from "../../Assets/images/Madhan.png"

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar-main">
                <div className="sidebar-header">
                    <h3>Be Smart</h3>
                </div>
                <div className="sidebar-img">
                    <img src={""} alt="" />
                </div>
                <div className="sidebar-content">
                    <ul>
                        <li
                            className=""
                        >
                            HOME
                        </li>
                        <li
                            className={this.props.sidebarObj.isAboutShown ? "active " : ""}
                            onClick={() => this.props.setStateValue("isAboutShown")}
                        >
                            About Me
                        </li>
                        <li className={this.props.sidebarObj.isEducationShown ? "active " : ""}
                            onClick={() => this.props.setStateValue("isEducationShown")}
                        >
                            Education
                        </li>
                        <li
                            className={this.props.sidebarObj.isSkillsShown ? "active " : ""}
                            onClick={() => this.props.setStateValue("isSkillsShown")}
                        >
                            My Skills
                        </li>
                        <li>Hire For Project</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sidebar;