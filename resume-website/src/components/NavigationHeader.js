import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import toCamelCase from '../util/toCamelCase'

class NavigationHeader extends React.Component {
    render () {
        return this.#makeNavigationHeader()
    }

    #makeHeaderLinksTbodyTd(headerLinkText) {
        const link = toCamelCase(headerLinkText)
        return (
            <td className="header_cell">
                <Link to={`/${link}`} className="header_link">{headerLinkText}</Link>
            </td>
        );
    }
    
    #makeHeaderLinksTbody() {
        const tbodyElements = this.props.headerLinksList.map(headerLinkText => this.#makeHeaderLinksTbodyTd(headerLinkText));
    
        return (
            <tbody>
                <tr>
                    {tbodyElements}
                </tr>
            </tbody>
        );
    }

    #makeTitleAndSubtitle() {
        return (
          <>
            <h className="header_title">
              <Link to="/" className="header_title_link">{this.props.headerTitle}</Link>
            </h>
            <br />
            <h className="header_subtitle">
              {this.props.headerSubtitle}
            </h>
            <br />
          </>
        );
      }

    #makeNavigationHeader() {
        return (
            <>
                {this.#makeTitleAndSubtitle()}
                <br />
                <hr />
                <table className="header_table">
                    {this.#makeHeaderLinksTbody()}
                </table>
                <hr />
            </>
        );
    }
}

NavigationHeader.propTypes = {
    headerTitle: PropTypes.string.isRequired,
    headerSubtitle: PropTypes.string.isRequired,
    headerLinksList: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

export default NavigationHeader;