import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return this.#makePage();
  }

  #makePage() {
    return (
      <div className="scroll_fix content_bg container">
        <h1>
          <font className="main-font contact_field_name_text">vCard: </font>
          <a
            href="../../public/media/contact.vcf"
            className="main-font contact_link_text"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download
          </a>
        </h1>
        <h3>
          <font className="main-font contact_field_name_text">LinkedIn: </font>
          <a
            href="https://www.linkedin.com/in/julian-deville/"
            className="main-font contact_link_text"
            target="_blank"
            rel="noopener noreferrer"
          >
            Julian DeVille
          </a>
        </h3>
        <h3>
          <font className="main-font contact_field_name_text">Email: </font>
          <a
            href="@mailto:julian_deville@icloud.com"
            className="main-font contact_link_text"
            target="_blank"
            rel="noopener noreferrer"
          >
            julian_deville@icloud.com
          </a>
        </h3>
        <h3>
          <font className="main-font contact_field_name_text">Phone: </font>
          <font className="main-font contact_field_text">
            +1-859-913-4800 (from 10am-5pm PST on weekdays. Prefer text.)
          </font>
        </h3>
      </div>
    );
  }
}

export default Contact;
