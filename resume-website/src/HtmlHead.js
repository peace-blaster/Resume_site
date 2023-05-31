export class HtmlHead {
    constructor() {}

    makeHtmlHead() { //add favicon later
        return (
            <>
            <head>
                <title>Hire Julian</title>
                <link rel="stylesheet" href="%PUBLIC_URL%/css/header_style.css" />
                <link rel="stylesheet" href="%PUBLIC_URL%/css/index.css" />
            </head>
            </>
        );
    }
}