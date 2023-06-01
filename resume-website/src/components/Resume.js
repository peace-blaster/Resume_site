import React, { Component } from 'react';

class Resume extends Component {
    render() {
        return this.#makePage()
    }

    #makePage() {
        return (
            <div class="scroll_fix content_bg">
                <br />
                <h1 className="main-font resume_download_text">
                    <a href="../contact_info/julian_deville_resume.pdf">Download Resume</a>
                </h1>
            </div>
        );
    }
}

export default Resume;