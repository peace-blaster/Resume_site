import React, { Component } from 'react';

class Resume extends Component {
    render() {
        return this.makePage()
    }

    makePage() {
        return (
            <div className="scroll_fix content_bg">
                <br />
                <h1>
                    <a href={process.env.PUBLIC_URL + '/contact_info/julian_deville_resume.pdf'}
                    download
                    className="main-font resume_download_text">Download Resume</a>
                </h1>
            </div>
        );
    }
}

export default Resume;
