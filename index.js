// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    "What is the title of your project?",
    "What was the motivation for this project?",
    "Why did you build this project?",
    "What problem does this project aim to solve?",
    "explain and provide the installation instructions",
    "provide examples for uses of this project",
    "choose relevant license for this project",
    "provide information on and for contributors (if none please state so)",
    "provide relevant testing information",
    "provide FAQ information",
    "What is your gitHub username",
    "What is your email?"
];

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
            type: "list",
            name: "license",
            message: questions[6],
            choices: ['apache','bsd','mit','none']
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
        {
            type: "input",
            name: "gitname",
            message: questions[10]
        },
        {
            type: "input",
            name: "email",
            message: questions[11]
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

    let alicense = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`

    let alicenseInfo = `Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.`



    let blicense = `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`

        let blicenseInfo = `Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`

    let mlicense = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`

    let mlicenseInfo = `Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`

    let nlicense = " "

        let licenseInfo;
        let licenseText;

        if(userLicense == 'apache') {
            licenseInfo = alicense
            licenseText = alicenseInfo
        } else if (userLicense == 'bsd') {
            licenseInfo = blicense
            licenseText = blicenseInfo
        } else if (userLicense == 'mit') {
            licenseInfo = mlicense
            licenseText = mlicenseInfo
        } else {licenseInfo = nlicense}
        
        let userCont = result.team
        console.log(`contributor info: ${userCont}`)
        
        let userExp = result.exp
        console.log(`user experimental info: ${userExp}`)
        
        let userFAQ = result.faq
        console.log(`FAQ: ${userFAQ}`)

        let userGitname = result.gitname
        console.log(`user github link: ${userGitname}`)

        let userEmail = result.email
        console.log(`user email: ${userEmail}`)






        let readTemp = `
${licenseInfo}
# ${userTitle} 

## Description
${questions[1]}
-${userWhat}

${questions[2]}
-${userWhy}

${questions[3]}
-${userAim}

## Table of Contents
[Installation](#installation)

[Usage](#usage)

[Contribution](#contribution)

[License](#license)

## Installation
- ${userInst}

## Usage
- ${userUse}

## Contribution
- ${userCont}

## License
- ${userLicense}
${licenseText}

## Tests
- ${userExp}

## Questions
FAQ 
${userFAQ}

Find me on github at https://github.com/${userGitname}
For further questions please email me at ${userEmail}
`

    writeToFile('README.md', readTemp)
    
    })
}

// Function call to initialize app
init();
