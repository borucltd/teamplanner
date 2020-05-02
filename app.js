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

// empty array of employees
const employees = []

// empty arrays for manager, engineerS and internS
const manager = [];
const engineers = [];
const interns = [] ;

// makes object from array of objects
function concatenateObjects(arrayOfObjects) {

	let mergedObject = {};
	arrayOfObjects.forEach((element) => {
		mergedObject = {...mergedObject, ...element};
	});

	return mergedObject;
};


// Write code to use inquirer to gather information about the development team members,
function collectData() {
	let i = 0;
	let keepgoing = true;
	
	function askOneQuestion() {
				
		inquirer.prompt(questions.questions[i])
			.then((answer) => {
				
				// check on which question we are
				switch(i) {
					case 0: // pick up team name - not important for now
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
					case 9:	// push to engineers and move back to question 5
						if ( i < 9) {
							i++;
						} else {
							i=5;
						}
						engineers.push(answer);
						break;
					case 10: // push to interns
					case 11: // push to interns
					case 12: // push to interns
					case questions.questions.length -1: //push to interns and move back to question 5
						if ( i < questions.questions.length -1 ) {
							i++;
						} else {
							i=5;
						}
						interns.push(answer);
						break;
					default: // we need to do nothing
					    break;
				  }
				  
				// exit condition
				if (keepgoing === true) {
					// move on to the question pointed by index i
					question = questions.questions[i];		
					// recursive invoation 
					askOneQuestion();
				} else {
					// we throw a fake error and will process the result in catch... 
					throw "Thank you good bye!!!";
				}
			})
			.catch(error => {
				if (error.includes("Thank you")) {
					
					console.log("INFO: " + error);  

					// generate manager object
					const managerInput = concatenateObjects(manager);
					employees.push(new Manager(managerInput.name,managerInput.id,managerInput.email,managerInput.number));

					// generate engineer objects
					let tmp = [];
					let j=0;
					if (engineers.length !== 0) {
						for (let i=0;i<=engineers.length;i++) {
							if (i%4 === 0 && i !== 0) {
								// generate
								const engineerInput = concatenateObjects(tmp);
								employees.push(new Engineer(engineerInput.name,engineerInput.id,engineerInput.email,engineerInput.github));
								// reset tmp
								j=0;
								tmp[j] = engineers[i];
							} else {
								tmp[j] = engineers[i];
							}
							j++;				
						}
					}
					// generate intern objects
					j=0;
					if (interns.length !== 0) {
						for (let i=0;i<=interns.length;i++) {
							if (i%4 === 0 && i !== 0) {
								// generate
								const internInput = concatenateObjects(tmp);
								employees.push(new Intern(internInput.name,internInput.id,internInput.email,internInput.school));
								// reset tmp
								j=0;
								tmp[j] = interns[i];
							} else {
								tmp[j] = interns[i];
							}
							j++;				
						}
					}	
					
								
					// `output` folder. You can use the variable `outputPath` above target this location.
					// Hint: you may need to check if the `output` folder exists and cre
					

					// create directory
					const OUTPUT_DIR = './output'; 
					if (!fs.existsSync(OUTPUT_DIR)){
						fs.mkdirSync(OUTPUT_DIR);
					}

					// create a file
					fs.writeFile(outputPath, render(employees), function (err) {
						if (err) throw err;
						console.log('Saved!');
					});




				} else {
					console.log("ERROR: " + error);   
				}
			})
		}

	// here we start 
	askOneQuestion();

	
}

// ======================
// start here
// ======================
collectData();





