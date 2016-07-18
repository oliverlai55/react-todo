# React To-Do List

## Contents
* [Project Overview](#project-overview)
* [Installation](#installation)
* [Git Workflow](#git-workflow)
* [Assets](#assets)
    * [Stylesheets](#stylesheets)
* [Vendor JavaScript](#vendor-javascript)
* [Task Runner](#task-runner)

## Project Screenshot
![ScreenShot](/img/react-todo.png)

## Project Overview
React To-Do is a simple app that allows users to add a task to a list.  The user is also able to update the task information, or delete it all together.  Whenever the user adds a task, the information is being sent to Firebase.

## Installation
1. Clone repo.
2. In terminal, navigate to the local project folder you just created.
3. Run `npm install`. This will install the project's dependencies and libraries.
4. After everything is installed, run `gulp` in terminal. Gulp will then run any default tasks and start up a local web server at http://localhost:8000.

**NOTE:** Dependency management is currently only in place for modules Gulp needs to run tasks. Dependencies like jQuery, etc are managed manually. Eventually, these will also be managed by something like Bower.

## Git Workflow
1. Create your own feature branch off of `master`. Name your branch `your-initials-here/specific-feature-description`
2. Do work. Commit to your local branch.
3. When ready to merge back into `master`, rebase the `master` branch onto your local branch. If there are conflicts, fix them.
4. Once there are no conflicts, push your local feature branch to your remote feature branch.
5. Create a Pull Request from your remote feature branch to the `master` branch (on "origin").
6. Grab a cup of coffee and watch this [video](https://www.youtube.com/watch?v=uAuL_noJLoo)

## Assets (any specific info about assets like images, video, sound, documents)

### Stylesheets
* **Bootstrap**
http://v4-alpha.getbootstrap.com/

Bootstrap is a HTML, CSS, and JavaScript framework for developing responsive, mobile first projects on the web.  Bootstrap is used in this project for styling and UI features.

## Vendor JavaScript (list of third party libraries and use)
Nerdmaster Intern Project Frontend also makes use of several third-party JavaScript plugins:
* **React**
https://facebook.github.io/react/index.html

React is a JavaScript library for creating user interfaces by Facebook and Instagram. React views are typically rendered using components that contain additional components specified as custom HTML tags.

React promises programmers a model in which subcomponents cannot directly affect enclosing components ("data flows down"); efficient updating of the HTML document when data changes; and a clean separation between components on a modern single-page application.

* **JSX**
https://facebook.github.io/react/docs/jsx-in-depth.html

JSX is a JavaScript syntax extension that looks similar to XML.

JSX is used to help make concise syntax for defining tree structures with attributes.

In this project, the user is able to locate

## Task Runner
Nerdmaster uses [Gulp](http://gulpjs.com/) as its task runner.
