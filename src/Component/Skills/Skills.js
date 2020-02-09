import React, { Component } from 'react';

class Skills extends Component {
    constructor(props){
        super(props);
        this.state={}
    }
    render() {
        let style = {
            marginTop : this.props.isSkillsShown ? "0vw" : "100vw"
        }
        return (
            <div className="skills-main" style={style}>
                Skills
            </div>
        );
    }
}

export default Skills;