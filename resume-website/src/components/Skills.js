import React, { Component } from 'react';

class Skills extends Component {
    render() {
        return this.#makePage()
    }

    #makePage() {
        return (
            <div class="scroll_fix content_bg">
                <h1 className="home_page_title_text">
                    Welcome!
                </h1>
                <h2 className="home_page_subtitle_text">
                    This is the content of the Skills page
                </h2>
            </div>
        );
    }
}

export default Skills;