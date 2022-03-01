[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-f059dc9a6f8d3a56e377f745f24479a46679e63a5d9fe6f495e02850cd0d8118.svg)](https://classroom.github.com/online_ide?assignment_repo_id=7057225&assignment_repo_type=AssignmentRepo)
# Introduction
This test is to evaluate the proficiency of essential technical skills required for this job. You are going to extend the Meteor React-based Todo sample application (*Todo app*). The Meteor installation guide, a step-by-step tutorial about the Todo app, and the GitHub repository of the Todo app source code can be found here:
 - Meteor installation: https://www.meteor.com/install
 - The tutorial: https://react-tutorial.meteor.com/simple-todos/
 - Github repository: https://github.com/meteor/react-tutorial

You are supposed to install the Meteor environment in your (virtual) machine and then follow Step 1-6 in the tutorial to build a Todo app. Although you can find the complete code in (https://github.com/meteor/react-tutorial/tree/master/src/simple-todos/step06), it is recommended that you go through the tutorial to familiar the environment.

# Your Tasks
This test consists of two tasks. We will judge your submission based on the correctness and efficiency of the code, the clarity of documentation, and the design and creativity of the new feature.

# Task 1
Your first task is to modify the app to enable users to add/update a due date to the existing and new tasks. The due dates should store in the database with the tasks and should be displayed to users when they list the tasks. You can use *any* methods or libraries to read/show the due date from/on the interface. This [Example](https://www.caida.org/~cskpmok/tododemo.png) is for reference only. You can freely design the way of input or display the due date for the best user experience (UX).

# Task 2
Your second task is to suggest and implement *one* feature that could **improve the UX of the app**. The feature could be, but not be limited to, a better user interface design, a new functionality, and more efficient implementation. However, it could not be similar to any features in further steps in the tutorial (e.g., enabling user accounts). Please describe the details of your new feature by modifying the next section of this README.md file.

# Description of new features
Please write a description of the new feature:
## Features:
This is a simple todo app to manages tasks
- it can create a task with due date, add tags, can set task complete by using switch. 
- A new sheet will popup in the bottom when click + button on top right of main page.
- Can update or delete a task by clicking into the task's title.
- Can filter task by some feature such as "overdue", "undone", "completed" and "due today".
- Can order by date.
- I added a switch button to easy set a task complete, will have highlight by color for status condition.
- I have showed some demo below for convenience.
## Technologies:
- Meteor
- React.js framework
- Functional component
- UI framework: Ant Design
- Responsive design.

## Demos:
- Main App layout:\
![alt text](https://github.com/caida-ricky-classroom/web-developer-reu-test-breezyltv/blob/main/demo/todo.png?raw=true)
- Add a task:\
![alt text](https://github.com/caida-ricky-classroom/web-developer-reu-test-breezyltv/blob/main/demo/addtaskaction.gif?raw=true)
- Update a task:\
![alt text](https://github.com/caida-ricky-classroom/web-developer-reu-test-breezyltv/blob/main/demo/set-task-complete-in-detail.gif?raw=true)
# Submission
Please submit your code within **2 weeks** after we sent you the invitation link. Upon completion of the test, you can send the repo URL to [Dr. Ricky Mok](mailto:cskpmok@caida.org) with the title "Web developer REU test submission - *your name*".
