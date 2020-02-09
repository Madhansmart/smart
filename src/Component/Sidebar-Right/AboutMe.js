import React, { Component } from 'react';

class AboutMe extends Component {
    render() {
        let style = {
            marginRight: this.props.isAboutShown ? "0vw" : "-60vw"
        }
        return (
            <div className="about-main">
                <div className="inner-about" style={style}>
                    <div className="sidebar-header">
                        <img src="" alt="Hai I Am Madhan"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMe;