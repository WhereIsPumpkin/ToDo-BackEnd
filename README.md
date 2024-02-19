# To-Do Backend API 

> A robust Node.js and Express.js backend API providing CRUD operations for task management within a To-Do application.

## Table of Contents

* [General Information](#general-information)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Setup](#setup)
* [Usage](#usage)
* 
## General Information

This backend API powers the task management system of a To-Do application. Key features include creating, reading, updating, and deleting tasks, underpinned by a MongoDB database. The API design offers RESTful endpoints to streamline data interactions.

## Technologies Used

* **Node.js:** Runtime Environment for JavaScript execution
* **Express.js:** Web application framework for building APIs
* **Mongoose:** MongoDB Object Modeling (ODM) for easier data interaction
* **dotenv:** Loads environment variables securely from a `.env` file
* **CORS:** Enables controlled cross-origin resource sharing  
* **Swagger UI:** Interactive API documentation

## Features

* **Create New Tasks:** Add tasks to the database with a description (`todoTask`) and status (`done`).
* **Retrieve All Tasks:** Fetch a complete list of tasks.
* **Update Task Status:** Mark tasks as complete or incomplete (toggle `done` status). 
* **Delete Tasks:** Remove tasks from the database.

## Setup

**Prerequisites**

* Node.js and npm (or yarn) installed on your system.
* A MongoDB instance (local or cloud-based)

**Installation**

1. Clone this repository
2. Navigate to the project directory: `cd to-do-backend`
3. Install dependencies: `npm install`
4. Create a `.env` file in the root of the project and configure the following: 
MONGO_URL=**your_mongodb_connection_string**
5. Run `npm start` (or your configured start script).

## Usage

The API offers the following RESTful endpoints:

* **GET `/api/getTasks`:** Retrieve a list of all tasks.
* **POST `/api/addTask`:** Create a new task.
* **PATCH `/api/toggleTask/:id`:** Update the `done` status of a task.
* **DELETE `/api/deleteTask/:id`:** Delete a task.
