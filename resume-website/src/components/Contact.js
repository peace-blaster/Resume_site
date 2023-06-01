import React, { Component } from 'react';
import contactData from '../data/Contact.json';

class Contact extends Component {
  constructor() {
    super();
    this.contactFields = ['vCard', 'LinkedIn', 'Email', 'Phone', 'Interview Availability'];
  }

  render() {
    return this.#makePage();
  }

  #makePage() {
    return (
      <div className="scroll_fix content_bg container">
        <br />
        {this.#makeContactTable()}
      </div>
    );
  }

  #makeContactTable() {
    let tableRows = [];
    for (let field of Object.keys(contactData)) {
      if (this.contactFields.includes(field)) {
        tableRows.push(this.#makeContactLinkTableRow(field));
      }
    }
    return (
      <table>
        <tbody className="contact_table">
          {tableRows}
        </tbody>
      </table>
    );
  }

  #makeContactLinkTableRow(field) {
    let link;
    let displayText;
  
    if (field === "vCard") {
      link = `/public/contact_info/${contactData[field]}`;
      displayText = "Download";
    } else if (field === "LinkedIn") {
      link = contactData[field];
      displayText = contactData["name"];
    } else if (field === "email") {
      link = `mailto:${contactData[field]}`;
      displayText = contactData[field];
    } else if (field === "phone") {
      link = `tel:+${contactData[field]}`;
      displayText = contactData[field];
    } else {
      link = null;
      displayText = contactData[field];
    }
  
    return (
      <tr key={field} className="whole_row make_tall">
        <td className="main-font contact_field_name_text contacts_contact_field_cell">{field}: </td>
        <td className="contacts_contact_text_cell">
          {link ? (
            <a
              href={link}
              className="main-font contact_link_text"
              target="_blank"
              rel="noopener noreferrer"
            >
              {displayText}
            </a>
          ) : (
            <span className="main-font contact_link_text">
              {displayText}
            </span>
          )}
        </td>
      </tr>
    );
  }
  

  #makeContactLink(field) {
    if (field === 'email') {
      return `mailto:${contactData[field]}`;
    } else if (field === 'phone') {
      return `tel:+${contactData[field]}`;
    } else {
      return contactData[field];
    }
  }  
}

export default Contact;
