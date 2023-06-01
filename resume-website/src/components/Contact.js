import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return this.#makePage()
    }

    #makePage() {
        return (
            <div class="home_page">
                <h1>
                    <a href="../../public/media/contact.vcf"
                        className="contact_link_text"
                        target="_blank"
                        rel="noopener noreferrer">vCard Download (for contacts apps)</a>
                </h1>
                <h3>
                    <font className="contact_field_name_text">LinkedIn: </font>
                    <a href="https://www.linkedin.com/in/julian-deville/"
                        className="contact_link_text"
                        target="_blank"
                        rel="noopener noreferrer">Julian DeVille</a>
                </h3>
                <h3>
                    <font className="contact_field_name_text">Email: </font>
                    <a href="@mailto:julian_deville@icloud.com"
                        className="contact_link_text"
                        target="_blank"
                        rel="noopener noreferrer">julian_deville@icloud.com</a>
                </h3>
                <h3>
                    <font className="contact_field_name_text">Phone: </font>
                    <font className="contact_field_text">+1-859-913-4800 (from 10am-5pm PST on weekdays. Prefer text.)</font>
                </h3>
            </div>
        );
    }
}

export default Contact;