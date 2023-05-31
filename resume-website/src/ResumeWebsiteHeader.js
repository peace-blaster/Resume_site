export class ResumeWebsiteHeader {
    constructor(headerTitle, headerSubtitle, headerLinksList) {
        this.headerLinksList = headerLinksList; // example: ['skills', 'resume', 'experience', 'sample_work', 'contact']
        this.headerTitle = headerTitle; //example: 'Julian DeVille'
        this.headerSubtitle = headerSubtitle; //example: 'Data Engineer'
    }

    #makeHeaderLinksTbodyTd(headerLinkText) {
        return (
            <td className="header_cell">
                <a href={`${headerLinkText}.html`} className="header_link">{headerLinkText}</a>
            </td>
        );
    }
    
    #makeHeaderLinksTbody() {
        const tbodyElements = this.headerLinksList.map(headerLinkText => this.#makeHeaderLinksTbodyTd(headerLinkText));
    
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
                    <a href='index.html' className="header_title_link">{this.headerTitle}</a>
                </h>
                <br />
                <h className="header_subtitle">
                    {this.headerSubtitle}
                </h>
                <br />
            </>
        );
    }
    

    makeHeader() {
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