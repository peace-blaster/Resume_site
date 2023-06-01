import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import toCamelCase from '../util/toCamelCase'
import headerData from '../data/navigationHeaderInfo.json'

const { headerTitle, headerSubtitle, headerLinksList } = headerData;

class NavigationHeader extends Component {
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
        const tbodyElements = headerLinksList.map(headerLinkText => this.#makeHeaderLinksTbodyTd(headerLinkText));
    
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
          <div className="header_title_and_subtitle_box">
            <div className="header_title">
              <Link to="/" className="header_title_link">{headerTitle}</Link>
            </div>
            <div className="header_subtitle">
              {headerSubtitle}
            </div>
          </div>
        );
      }

    #makeNavigationHeader() {
        return (
            <div class="whole_header">
                {this.#makeTitleAndSubtitle()}
                <table className="header_table">
                    {this.#makeHeaderLinksTbody()}
                </table>
            </div>
        );
    }
}

NavigationHeader.propTypes = {
    headerTitle: PropTypes.string.isRequired,
    headerSubtitle: PropTypes.string.isRequired,
    headerLinksList: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

export default NavigationHeader;