// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = ["what is the title of your project?","what was the motivation for this project?","why did you build this project?","what problem does this project aim to solve?","explain the installation instructions","provide instructions and examples for use","provide relevant license information","provide information on contributors","provide relevant testing information","provide FAQ information"];

// TODO: Create a function to write README file
function writeToFile(fileName, template) {
    fs.writeFile(fileName,template, function(err){
        if (!err) {
            console.log(`index page created`)
        } else {console.log(`error ${err}`)}
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: questions[0]
        },
        {
            type: "input",
            name: "what",
            message: questions[1]
        },
        {
            type: "input",
            name: "why",
            message: questions[2]
        },
        {
            type: "input",
            name: "aim",
            message: questions[3]
        },
        {
            type: "input",
            name: "inst",
            message: questions[4]
        },
        {
            type: "input",
            name: "use",
            message: questions[5]
        },
        {
            type: "input",
            name: "license",
            message: questions[6]
        },
        {
            type: "input",
            name: "team",
            message: questions[7]
        },
        {
            type: "input",
            name: "exp",
            message: questions[8]
        },
        {
            type: "input",
            name: "faq",
            message: questions[9]
        },
    ]).then(result => {
        let userTitle = result.title;
        console.log(`user title: ${userTitle}`);

        let userWhat = result.what;
        console.log(`what desc: ${userWhat}`)

        let userWhy = result.why;
        console.log(`why desc: ${userWhy}`)

        let userAim = result.aim;
        console.log(`aim desc: ${userAim}`)

        let userInst = result.inst
        console.log(`user instructions: ${userInst}`)
        
        let userUse = result.use
        console.log(`usage info: ${userUse}`)
        
        let userLicense = result.license
        console.log(`license info: ${userLicense}`)
        
        let userCont = result.team
        console.log(`contributor info: ${userCont}`)
        
        let userExp = result.exp
        console.log(`user experimental info: ${userExp}`)
        
        let userFAQ = result.faq
        console.log(`FAQ: ${userFAQ}`)

        let template = `
        # ${userTitle}

        ## Description
        ${questions[1]}
        -${userWhat}
        
        ${questions[2]}
        -${userWhy}

        ${questions[3]}
        -${userAim}

        ## Table of Contents

        [Installation]

        [Usage]

        [Credits]

        [License]

        ## Installation
        - ${userInst}

        ## Usage
        - ${userUse}

        ## Credits
        - ${userCont}

        ## License
        - ${userLicense}


        `
    })
}

// Function call to initialize app
init();
