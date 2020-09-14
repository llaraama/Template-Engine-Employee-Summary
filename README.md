# Template Engine - Employee Summary

[Link of video showing app's functionality](https://drive.google.com/file/d/10vN-L1tKkg1kKKFRdgSGBwJgZNBRQT0D/view)
One of the most important aspects of programming is writing code that is readable, reliable, and maintainable. Oftentimes, *how* we design our code is just as important as the code itself. The challenge was to build a Node CLI that takes in information about employees and generates an HTML webpage that displays summaries for each person. Since testing is a key piece in making code maintainable, I also ensured that all unit tests passed.

![badmath](https://img.shields.io/github/languages/top/llaraama/Template-Engine-Employee-Summary)

## Table of Contents:
  * [Description](#Description)
 
  * [User Story](#User-Story)
  
  * [Installation](#Installation)

  * [Usage](#Usage)

  * [License](#License)

  * [Contributing](#Contributing)

  * [Technology](#Technology)



## Description 
A software engineering team generator command line application. The application prompts the user for information about the team manager and then information about the team members. The user can input any number of team members, and they may be a mix of engineers and interns. When the user has completed building the team, the application will create an HTML file that displays a nicely formatted team roster based on the information provided by the user. 

## User Story 
```
As a manager
I want to generate a webpage that displays my team's basic info
so that I have quick access to emails and GitHub profiles
```
The project prompts the user to build an engineering team. An engineering
team consists of a manager, and any number of engineers and interns.

### Classes
The project must has the classes: `Employee`, `Manager`, `Engineer`,
`Intern`. The tests for these classes in the `tests` directory passed.

The first class is an `Employee` parent class with the following properties and
methods:

  * name
  * id
  * email
  * getName()
  * getId()
  * getEmail()
  * getRole() // Returns 'Employee'

The other three classes will extend `Employee`. 

In addition to `Employee`'s properties and methods, `Manager` will also have:

  * officeNumber

  * getRole() // Overridden to return 'Manager'

In addition to `Employee`'s properties and methods, `Engineer` will also have:

  * github  // GitHub username

  * getGithub()

  * getRole() // Overridden to return 'Engineer'

In addition to `Employee`'s properties and methods, `Intern` will also have:

  * school 

  * getSchool()

  * getRole() // Overridden to return 'Intern'
The project generates a `team.html` page in the `output` directory, that displays a nicely formatted team roster. Each team member should display the following in no particular order:

  * Name

  * Role

  * ID

  * Role-specific property (School, link to GitHub profile, or office number)


## Installation 
Clone this repo to your local machine using: https://github.com/llaraama/Template-Engine-Employee-Summary.git


## Usage
![Employee Summary 1](./Assets/10-OOP-homework-demo-1.png)
![Employee Summary 2](./Assets/10-OOP-homework-demo-2.png)


## License
MIT License 

## Contributing
Fork this repository. Create a branch: git checkout -b <branch_name>. Add: git add . Make your changes and commit them: git commit -m '<commit_message>' Push to the original branch: git push origin <branch_name> Create the pull request.

## Technology 
Jest, Inquirer, Javascript, Node.js 
