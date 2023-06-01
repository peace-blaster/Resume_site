import React, { Component } from 'react';
import concatJSX from '../util/concatJSX'
import experienceData from '../data/Experience.json'

const { jobs } = experienceData;
class Experience extends Component {
    render() {
        return this.#makePage()
    }

    #makeJobsTable() {
        return (
            <div className = "jobs_table">
                <table>
                    <tbody>
                    {this.#makeJobsTableEntries()}
                    </tbody>
                </table>
            </div>
        )
    }

    #makeJobsTableEntries() {
        let jsx = <></>;
        for (let job of jobs) {
            jsx = concatJSX(jsx, this.#makeJobsTableEntry(job));
        }
    }

    #makeJobsTableEntry(job) {
        return (
            <tr>
                <td className="jobs_jobCell">
                    <a href={job.employer.website} className="jobs_jobCell_company_link">{job.employer.name}</a>
                    <br />
                    <br />
                    <font className="jobs_jobCell_start_end">{job.startDate} - {job.endDate}</font>
                </td>
                <td>
                <h2 className="jobs_jobCell_bulletPointTitles">
                        Duties:
                    </h2>
                    {this.#makeJobDescriptionBullets(job.descriptionBullets)}
                    <br />
                    <h2 className="jobs_jobCell_bulletPointTitles">
                        Skills:
                    </h2>
                    <br />
                    {this.#makeJobDescriptionBullets(job.skills)}
                </td>
            </tr>
        )
    }

    #makeJobDescriptionBullets(descriptionBullets) {
        let jsx = descriptionBullets.map(bulletPoint => (<li className="jobs_jobCell_bulletPointText">{bulletPoint}</li>));
        return concatJSX(<ul> {jsx} </ul>);
    }

    #makePage() {
        return (
            <div className = "jobs_table_border">
                {this.#makeJobsTable}
            </div>);
    }
}

export default Experience;