import React, { Component } from 'react';
import experienceData from '../data/Experience.json'

const { jobs } = experienceData;
class Experience extends Component {
    render() {
        return this.#makePage()
    }

    #makeJobsTable() {
        return (
            <table className="content_bg">
                <tbody>
                    {this.#makeJobsTableEntries()}
                </tbody>
            </table>
        )
    }

    #makeJobsTableEntries() {
        let jsx = [];
        for (let job of jobs) {
            jsx.push(this.#makeJobsTableEntry(job));
        }
        return jsx;
    }

    #makeJobsTableEntry(job) {
        return (
            <tr className="whole_row">
                <td className="jobs_jobCell">
                    <div className="jobs_jobCell_title">{job.title}</div>
                    <br />
                    <a href={job.employer.website}
                        className="main-font jobs_jobCell_company_link"
                        target="_blank"
                        rel="noopener noreferrer">{job.employer.name}</a>
                    <br />
                    <div className="jobs_jobCell_start_end">{job.startDate} - {job.endDate}</div>
                </td>
                <td className="jobs_skill_duties_cell">
                <h2 className="jobs_jobCell_bulletPointTitles">
                        Duties:
                    </h2>
                    {this.#makeJobDescriptionBullets(job.descriptionBullets)}
                    <h2 className="jobs_jobCell_bulletPointTitles">
                        Skills:
                    </h2>
                    {this.#makeJobSkills(job.skills)}
                    <br />
                </td>
            </tr>
        )
    }

    #makeJobDescriptionBullets(descriptionBullets) {
        let jsx = descriptionBullets.map((bulletPoint, index) => 
            (<li key={index} className="jobs_jobCell_bulletPointText">{bulletPoint}</li>)
        );
        return <ul> {jsx} </ul>;
    }
    
    #makeJobSkills(skills) {
        let skillsStr = skills.join(', ');
        return <div className="jobs_jobCell_bulletPointText"> {skillsStr} </div>;
    }    

    #makePage() {
        return (
            <div className = "scroll_fix">
                {this.#makeJobsTable()}
            </div>);
    }
}

export default Experience;