// concats together list of JSX code

function concatJSX (concatList) {
    let jsx = (<></>);
    for (let obj in concatList) {
        jsx = (<> {jsx} {obj} </>)
    }
}

export default concatJSX