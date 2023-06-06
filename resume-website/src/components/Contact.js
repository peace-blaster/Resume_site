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
    const link = this.#getLink(field);
    const displayText = this.#getDisplayText(field);
  
    return (
      <tr key={field} className="whole_row make_tall">
        <td className="main-font contact_field_name_text contacts_contact_field_cell">
          {field}:
        </td>
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
            <span className="main-font contact_link_text">{displayText}</span>
          )}
        </td>
      </tr>
    );
  }
  
  #getLink(field) {
    switch (field) {
      case "vCard":
        return `/public/contact_info/${contactData[field]}`;
      case "LinkedIn":
        return contactData[field];
      case "Email":
        return `mailto:${contactData[field]}`;
      case "Phone":
        return `tel:+${contactData[field]}`;
      default:
        return null;
    }
  }
 
  #getDisplayText(field) {
    if (field === "LinkedIn") {
      return contactData["name"];
    } else {
      return contactData[field];
    }
  } 
}

export default Contact;
