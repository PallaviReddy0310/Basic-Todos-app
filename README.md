# Todos List Layout Application
Built with the ReactJS.


Table of Contents
----

  * [Introduction](#introduction)
  * [Key Features](#key-features)
  * [Technologies used](#technologies-used)
      - [Client](#client)
      - [Database](#database)
  * [Configuration and Setup](#configuration-and-setup)
  * [Author](#author)


## Introduction
This is a project I've been working on. It's a todo list layout application made using ReactJS, HTML, Bootstrap and CSS. With this application, one can create todos, go through their todos list and work on them.


## Key Features
- Add todos.
- Edit their todos.
- Set time limit for each todo.
- Update status of the task.
- Select the category of the todos.
- Delete a todo.


## Technologies used
This project was created using the following technologies.

#### Client

- React JS
- React-router-dom (To handle routing)
- Axios (For making api calls)


#### Database
Local API (To store the todos)

## Configuration and Setup
In order to run this project locally, simply fork and clone the repository or download as zip and unzip on your machine. 
- Open the project in your prefered code editor.
- Go to terminal -> New terminal (If you are using VS code)
- Split your terminal into two (run the client on one terminal and the database server on the other terminal)

In the first terminal

```
$ npm install (to install client-side dependencies)
$ npm start (to start the client)
```
In the second terminal

```
$ npm install -g json-server (to install server-side dependencies)
$ npx json-server --watch db.json --port 4000 (to start the server)
```


## Author

- Github: [@PallaviReddy0310](https://github.com/PallaviReddy0310)
- Email: [@pallavireddy0310](mailto:pallavireddy0310@gmail.com)
