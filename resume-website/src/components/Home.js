import { PageBaseClass } from "./PageBaseClass";

export class Home extends PageBaseClass {
    constructor(headerTitle, headerSubtitle, headerLinksList) {
        super(headerTitle, headerSubtitle, headerLinksList);
        this.#makePage();
    }

    #makePage() {
        this.appendJSX(
            <>
                <h1>
                    Welcome!
                </h1>
                <h2>
                    This is the content of the home page
                </h2>
            </>
        );
    }
}
