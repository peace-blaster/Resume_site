import React, { Component } from 'react';
import skillData from '../data/Skills.json'

const { skills } = skillData;

class Skills extends Component {
    render() {
        return this.makePage()
    }

    makeSkillsTable() {
        return (
            <div className = "skills_table">
                <table>
                    <tbody>
                        {this.makeSkillsTableEntries()}
                    </tbody>
                </table>
            </div>
        )
    }

    makeSkillsTableEntries() {
        let jsx = [];
        for (let skill of skills) {
            jsx.push(this.makeSkillsTableEntry(skill));
        }
        return jsx;
    }

    makeSkillsTableEntry(skill) {
        return (
            <tr>
                <td className="skills_skillCell">
                    <a href={skill.link}
                        className="main-font skills_skillCell_link"
                        target="_blank"
                        rel="noopener noreferrer">{skill.name}</a>
                </td>
                <td className="skill_description_cell">
                    <h2 className="skills_description">
                        {skill.description}
                    </h2>
                    <h2 className="skill_title_bullets">
                        Job Experience:
                    </h2>
                    {this.makeExperienceBullets(skill.experience)}
                </td>
            </tr>
        )
    }

    makeExperienceBullets(experience) {
        let jsx = experience.map((experience, index) => 
            (<li key={index} className="skills_bulletPointText">{experience.title} at {experience.employer}</li>)
        );
        return <ul> {jsx} </ul>;
    }

    makePage() {
        return (
            <div className="scroll_fix content_bg">
                {this.makeSkillsTable()}
            </div>
        );
    }
}

export default Skills;
