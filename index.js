const questions = [
    {
        type: 'input',
        name: 'teamName',
        message: "What is your team's name?: ",
        validate: (input) => {

            // validate input is not empty
            if (input.match(/[a-z0-9]/gi)) { 
                return true;
            } 
        
            return "ERROR: must not be empty and can only be letters and numbers!";            
        }      
    },
    {
        type: 'input',
        name: 'name',
        message: "What is your manager's name?: ",
        validate: (input) => {

            // validate input is not empty
            if (input.match(/[a-z]/gi)) { 
                return true;
            } 
        
            return "ERROR: must not be empty and must be letters only!";            
        }   
    },
    {
        type: 'input',
        name: 'id',
        message: "What is your manager's id?: ",
        validate: (input) => {

	        // must be a number
            if (input.match(/[0-9]/gi)) { 
                return true;
            } 
        
            return "ERROR: must not be empty and must be number!";            
        } 
    },
	{
        type: 'input',
        name: 'email',
        message: "What is your manager's email?: ",
        validate: (input) => {

	        // must be e-mail format bla@bla
            if (input.match(/[a-z0-9]+@[a-z0-9.]+/gi)) {
                return true;
            }

            return "ERROR: must not be empty and must be valid email address!";
        }
    },
	{
        type: 'input',
        name: 'number',
        message: "What is your manager's office number: ",
        validate: (input) => {

            // must be a number
            if (input.match(/[0-9]/gi)) {
                return true;
            }

            return "ERROR: must not be empty and must be number!";
        }
    },
    {   
        type: 'list',
        name: 'role',
        message: "What type of team member would you like to add?: ",
	    choices: [ "Engineer", "Intern", "I don't want to add any more team members" ],
    },
    {
        type: 'input',
        name: 'name',
        message: "What is your engineer's name?: ",
        validate: (input) => {

            // validate input is not empty
            if (input.match(/[a-z]/gi)) { 
                return true;
            } 
        
            return "ERROR: must not be empty and must be letters only!";            
        }   
    },
    {
        type: 'input',
        name: 'id',
        message: "What is your engineer's id?: ",
        validate: (input) => {

	        // must be a number
            if (input.match(/[0-9]/gi)) { 
                return true;
            } 
        
            return "ERROR: must not be empty and must be number!";            
        } 
    },
	{
        type: 'input',
        name: 'email',
        message: "What is your engineer's email?: ",
        validate: (input) => {

	        // must be e-mail format bla@bla
            if (input.match(/[a-z0-9]+@[a-z0-9.]+/gi)) {
                return true;
            }

            return "ERROR: must not be empty and must be valid email address!";
        }
    },
	{
        type: 'input',
        name: 'github',
        message: "What is your engineer's GitHub username: ",
        validate: (input) => {

            // must be a number
            if (input.match(/[0-9a-z]+/gi)) {
                return true;
            }

            return "ERROR: must not be empty!";
        }
    },
    {
        type: 'input',
        name: 'name',
        message: "What is your intern's name?: ",
        validate: (input) => {

            // validate input is not empty
            if (input.match(/[a-z]/gi)) { 
                return true;
            } 
        
            return "ERROR: must not be empty and must be letters only!";            
        }   
    },
    {
        type: 'input',
        name: 'id',
        message: "What is your  intern's id?: ",
        validate: (input) => {

	        // must be a number
            if (input.match(/[0-9]/gi)) { 
                return true;
            } 
        
            return "ERROR: must not be empty and must be number!";            
        } 
    },
	{
        type: 'input',
        name: 'email',
        message: "What is your  intern's email?: ",
        validate: (input) => {

	        // must be e-mail format bla@bla
            if (input.match(/[a-z0-9]+@[a-z0-9.]+/gi)) {
                return true;
            }

            return "ERROR: must not be empty and must be valid email address!";
        }
    },
	{
        type: 'input',
        name: 'number',
        message: "What is your  intern's school?: ",
        validate: (input) => {

            // must be a number
            if (input.match(/[0-9a-z]+/gi)) {
                return true;
            }

            return "ERROR: must not be empty!";
        }
    },
];





function writeToFile(fileName, data) {
}

function init() {

   
}


module.exports = {
    questions: questions

}
