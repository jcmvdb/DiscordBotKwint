function argHandler(args){
    let obj1 = processArgumentsToJson(args)
    return {
        "bot": "peter",
        "verbosity": "low"
    }
}


function processArgumentsToJson(args){
    const validArguments = {
        "bot": ["peter", "thierry"],
        "-v": ["low", "high"],
    }
    console.log(args)

}

module.exports = { argHandler };