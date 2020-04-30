const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const questions = require("./index");
const render = require("./lib/htmlRenderer");

// empty arrays for manager, engineerS and internS
const manager = [];
const engineers = [];
const interns = [] ;

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)




function collectData() {
	let i = 0;
	let keepgoing = true;
	
	function askOneQuestion() {
				
		inquirer.prompt(questions.questions[i])
			.then((answer) => {
				

				// check on which question we are
				switch(i) {
					case 0: // create manager
						//manager.push(answer);
						i++;	
						break;
					case 1:	// push to manager
					case 2:	// push to manager
					case 3:	// push to manager
					case 4: // push to manager
						manager.push(answer);
						i++;	
					  	break;			
					case 5: // decide if we want to add a new member
						switch(answer.role) {
							case 'Engineer': // jump to question 6
								i=6;
								break;
							case 'Intern':	// jump to question 10
								i=10;
								break;
							default: // finish
								keepgoing = false;
								break;
						}			
						break;
					case 6: // push to engineers
					case 7: // push to engineers
					case 8: // push to engineers
						engineers.push(answer);
						i++;	
						break;						
					case 9:	// push to engineers and move back to question 5
						engineers.push(answer);
						i=5;
						break;
					case 10: // push to interns
					case 11: // push to interns
					case 12: // push to interns
						interns.push(answer);
						i++;
						break;
					case questions.questions.length -1: //push to interns and move back to question 5
						interns.push(answer);
						i=5;
						break;
					default: // we need to do nothing
					    break;
				  }
				  
				if (keepgoing === true) {
					// move on to the question pointed by index i
					question = questions.questions[i];		
					// recursive invoation 
					askOneQuestion();
				} else {
					throw "Thank you good bye!!!";
				}
			})
			.catch(error => {
				if (error.includes("Thank you")) {
					console.log(manager);
					console.log(engineers);
					console.log(interns);
					console.log("INFO: " + error);   
				} else {
					console.log("ERROR: " + error);   
				}
				
			})
		}

	// here we start 
	askOneQuestion();
}


collectData();



// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
