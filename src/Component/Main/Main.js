import React, { Component } from 'react';

// Components
import Sidebar from "../SideBar/Sidebar";
import Section from "../Section/Section";
import AboutMe from '../Sidebar-Right/AboutMe';
import Education from '../Education/Education';
import Skills from "../Skills/Skills";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shownObj: {
                isAboutShown: true,
                isEducationShown: false,
                isSkillsShown : false
            }
        }
    }

    setStateValue = (name) => {
        let { shownObj } = this.state;
        shownObj["isAboutShown"] = false;
        shownObj["isEducationShown"] = false;
        shownObj["isSkillsShown"] = false;
        shownObj[name] = true;
        this.setState({ shownObj }, () => {
            console.log(this.state.shownObj)
        });
    }

    render() {
        return (
            <div className="app-main">
                <Sidebar
                    sidebarObj={this.state.shownObj}
                    setStateValue={(name) => this.setState({
                        shownObj: {
                            [name]: !this.state.shownObj[name]
                        }
                    })}
                />
                <Section />
                <Skills 
                    isSkillsShown = {this.state.shownObj.isSkillsShown}    
                />
                <AboutMe
                    isAboutShown={this.state.shownObj.isAboutShown}
                    isEducationShown={this.state.shownObj.isEducationShown}
                />
                <Education isEducationShown={this.state.shownObj.isEducationShown} />

            </div>
        );
    }
}

export default Main;