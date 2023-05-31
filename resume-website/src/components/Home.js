import { PageBaseClass } from "./PageBaseClass";

class Home extends PageBaseClass {
    constructor() {
        super();
        this.makePage();
    }

    makePage() {
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
