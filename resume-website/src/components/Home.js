import React, { Component } from 'react';

class Home extends Component {
    render() {
        return this.#makePage()
    }

    #makePage() {
        return (
            <div class="home_page">
                <h1 className="home_page_title_text">
                    Welcome!
                </h1>
                <h2 className="home_page_subtitle_text">
                    This is the content of the Home page
                </h2>
            </div>
        );
    }
}

export default Home;