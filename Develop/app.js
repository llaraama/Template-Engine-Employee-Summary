const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

var teamMembers=[];
getManager()
function getManager(){
    inquirer.prompt([
        {
            type:"input",
            name:"managername",
            message:"What is your manager's name?"

        },
        {
            type:"input",
            name:"managerid",
            message:"What is your manager's id?"
        },
        {
            type:"email",
            name:"manageremail",
            message:"What is your manager's email?"
        },
        {
            type:"input",
            name:"officenumber",
            message:"What's your manager's office number?"
        }
    ]).then(results=>{
        let {managername,managerid,manageremail,officenumber} =results;
        // parse ID string
        let mid = JSON.parse(managerid);
        let officenum=JSON.parse(officenumber)

        // Create a new Engineer Instance
        let managerMember = new Manager(managername, mid, manageremail, officenum);

        // add the new OBJ to our teammember ARRAY
        teamMembers.push(managerMember)

        //-- TESTING --//
        buildTeam();

  
    })
}



function buildTeam(){
    inquirer.prompt([
        {
            type:"list",
            name:"member",
            message:"Which type of team member would you like to add?",
            choices:[
                "Engineer",
                "Intern",
                "I don't want to add anymore team members"

            ]
        } 
    ]).then(val=>{
        console.log(val)
        if(val.member==="Engineer"){
            console.log("you picked engineer")
            getengineer();
            // will prompt engineer questions 

        }else if(val.member==="Intern"){
            console.log("you picked intern")
            // will prompt intern questions 
            getintern()

        }else if(val.member==="I don't want to add anymore team members"){
            console.log("you picked manager")
            createHTML()
            // will prompt manager quesions 
         

        }
    })
}



        
// change to a switch statement ***
    




function getengineer(){
    inquirer.prompt([
        {
            type:"input",
            name:"engineername",
            message:"What is your engineer's name?"

        },
        {
            type:"input",
            name:"engineerid",
            message:"What is your engineer's id?"

        },
        {
            type:"email",
            name:"engineeremail",
            message:"What is your engineer's email?"
        },
        {
            type:"input",
            name:"github",
            message:"What is your engineer's GitHub username?"
        }
    ]).then(results=>{
        console.log(results)
      
        let { engineername, engineerid, engineeremail, github} = results;
        // parse ID string
        let eid = JSON.parse(engineerid);

        // Create a new Engineer Instance
        let engineerMember = new Engineer(engineername, eid, engineeremail, github);

        // add the new OBJ to our teammember ARRAY
        teamMembers.push(engineerMember)

        buildTeam();
    })
}

function getintern(){
    inquirer.prompt([
        {
            type:"input",
            name:"internname",
            message:"What is your intern's name?"

        },
        {
            type:"input",
            name:"internid",
            message:"What is your intern's id?"

        },
        {
            type:"email",
            name:"internemail",
            message:"What is your intern's email?"
        },
        {
            type:"input",
            name:"school",
            message:"What is your intern's school?"
        }
    ]).then(results=>{
        let {internname,internid,internemail,school} =results;
        // parse ID string
        let iid = JSON.parse(internid);
       

        // Create a new Engineer Instance
        let internMember = new Intern(internname,iid,internemail,school);

        // add the new OBJ to our teammember ARRAY
        teamMembers.push(internMember)

        //-- TESTING --//

        buildTeam();

  
    })
}

function createHTML(){
if(!fs.existsSync(OUTPUT_DIR)){
    fs.mkdirSync(OUTPUT_DIR);
}

fs.writeFileSync(outputPath,render(teamMembers),"utf-8");
}
