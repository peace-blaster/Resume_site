import React, { Component } from 'react';
import contactData from '../data/Contact.json'

class Contact extends Component {
  render() {
    return this.#makePage();
  }

  #makePage() {
    return (
      <div className="scroll_fix content_bg container">
        {this.#makeContactPage()}
      </div>
    );
  }

  #makeContactPage() {
    return (
      <>
        <h1>
        <font className="main-font contact_field_name_text">vCard: </font>
        <a href={process.env.PUBLIC_URL + `/contact_info/${contactData.vCardFileName}`}
          download
          className="main-font contact_link_text"
          target="_blank"
          rel="noopener noreferrer"
        >Download</a>
      </h1>
      <h3>
        <font className="main-font contact_field_name_text">LinkedIn: </font>
        <a
          href={contactData.linkedInUrl}
          className="main-font contact_link_text"
          target="_blank"
          rel="noopener noreferrer"
        >{contactData.name}</a>
      </h3>
      <h3>
        <font className="main-font contact_field_name_text">Email: </font>
        <a
          href={`@mailto:${contactData.email}`}
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
          {contactData.phone}
        </font>
      </h3>
      <h3>
        <font className="main-font contact_field_name_text">Interview Availability: </font>
        <font className="main-font contact_field_text">
          {contactData.interviewAvailability}
        </font>
      </h3>
    </>
    )
  }
}

export default Contact;
