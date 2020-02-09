import React, { Component } from 'react';

class Education extends Component {
    render() {
        let style = {
            marginRight: this.props.isEducationShown ? "0vw" : "-30vw"
        }
        return (
            <div className="education-main">
                <div className="inner-education" style={style}>
                    <div className="education-header">Education</div>
                </div>
            </div>
        );
    }
}

export default Education;