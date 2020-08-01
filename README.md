# MSK UI
A library of MSK widgets.
This project is inspired by material-ui

---
# Running the project
Open terminal in the project root directory.

run `npm i;`

run `npm start;`

The app will start on http://localhost:6501/

---

# Getting started guide

### Contribution steps

If you are a student or an entry level developer and want to get started with the contribution, you will need to learn few concepts first before starting your contribution to this project.

If you are already an experience developer, you can directly goto **Step 5**.

##### Let's get started.

- Read basics of [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML), [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) and [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- Read basics of [JSX](https://reactjs.org/docs/introducing-jsx.html) and [JSS](https://cssinjs.org/?v=v10.3.0)
- A brief introduction to [React](https://reactjs.org/docs/getting-started.html)
- Commonly used [npm commands](https://docs.npmjs.com/cli/npm)

**Once you are comfortable with the above basic concepts, you need to learn to use the below tools**

- Install [Git](https://git-scm.com/) ( learn [forking](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo), [cloning](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository), [commiting](https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging) and raising [pull requests](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests) )
- Install [VS Code](https://code.visualstudio.com/) and get familiar with the code editor

Now you are ready to start coding.

#### Step 1 : Fork this repository.

Once you fork, git will create a copy of msk-ui to your personal github space.

#### Step 2 : Clone your forked repo into your local machine

Once you clone, you will have the project in your computer. Go ahead and open the project in VS Code.

Set the original repository as the upstream remote.

run `git remote add upstream https://github.com/MSK-Documents/msk-ui.git`

So, whenever other developers merge their code, the master branch of the original repository gets updated. You can get the latest code into the master branch of your fork with the below command.

run `git checkout master`

run `git pull upstream master` 

Now you can create a separate [branch](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-branches) and start working.

#### Step 3 : Install Node

Node is required to run this project as this is a react app.

#### Step 4 : Run the project

run `npm install` in the project root directory. This will install all the [node_modules](https://docs.npmjs.com/about-packages-and-modules#about-modules) required. 

run `npm start`. This will open the application on http://localhost:6501/


#### Step 5 : Create a branch and start coding

There is a folder called [**sample**](https://github.com/MSK-Documents/msk-ui/tree/master/src/modules/resume/sample) inside the [**resume**](https://github.com/MSK-Documents/msk-ui/tree/master/src/modules/resume) module. Go ahead and check all the files inside. There is a detailed documentation at the beginning of each file. This should give you enough explanation about the file and certain rules and best practices to be followed.

Once you are familiar with the sample widget, go ahead and add your own widgets. Research online and identify different widgets inside vaarious documents.

#### Step 6 : Submit your pull request

After finishing your code, you are ready to contribute. Go ahead and make a commit and push the changes to your fork branch. Then submit a pull request to msk-ui/master.

##### ✅ Pull request rules:
- Add atleast 5 reviewers in the PR
- Always submit a PR from a named branch from your fork
- Attach Desktop & Mobile screenshots to the PR
- Choose the label in the PR ( bug / enhancement / maintenance etc., ) 
- Add a proper title & description


#### Step 7 : Get your code reviewed

Assign few contributors as reviewers and get your code reviewed. You will need approvals from 3 other contributors for your pull request to get merged.

---

### Not sure what to contribute ?

Check the **issues** section where you will find new ideas / challenges / bugs. You can pick one by adding a comment to the thread that you will be working on it. ( This will avoid duplicate work )

**Please close the issue when your corresponding pull request gets merged.**

---

I wish you all the best in this journey.

Let's create an incredible product !

---
**THANK YOU**



