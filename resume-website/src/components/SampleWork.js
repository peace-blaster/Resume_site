import React, { Component } from 'react';
import sampleWorkRaw from '../data/SampleWork.json'

const { sampleWork } = sampleWorkRaw;
class SampleWork extends Component {
    render() {
        return this.#makePage()
    }

    makeSampleWorkTable() {
        return (
            <div>
                <table>
                    <tbody>
                        {this.#makeSampleWorkTableEntries()}
                    </tbody>
                </table>
            </div>
        )
    }

    #makeSampleWorkTableEntries() {
        let jsx = [];
        for (let sample of sampleWork) {
            jsx.push(this.#makeSampleWorkTableEntry(sample));
        }
        return jsx;
    }

    #makeSampleWorkTableEntry(sample) {
        return (
            <tr className="whole_row">
                <td className="SampleWork_sampleWorkCell">
                    <a href={sample.link}
                        className="main-font SampleWork_sampleWorkCell_link"
                        target="_blank"
                        rel="noopener noreferrer">{sample.name}</a>
                    <br />
                    <a href={sample.source}
                        className="main-font SampleWork_sampleWorkCell_link"
                        target="_blank"
                        rel="noopener noreferrer">source</a>
                </td>
                <td className="sampleWork_description_cell">
                    <h2 className="SampleWork_description">
                        {sample.description}
                    </h2>
                    <h2 className="sampleWork_title_bullets">
                        Skills:
                    </h2>
                    {this.#makeSkillBullets(sample.skills)}
                </td>
            </tr>
        )
    }

    #makeSkillBullets(skills) {
        let jsx = skills.map((skill, index) => 
            (<li key={index} className="SampleWork_bulletPointText">{skill}</li>)
        );
        return <ul> {jsx} </ul>;
    }

    #makePage() {
        return (
            <div className="scroll_fix">
                {this.makeSampleWorkTable()}
            </div>
        );
    }
}

export default SampleWork;