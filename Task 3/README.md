# Kaiburr Task 3 WEB UI Forms

## Overview
This project is the frontend part of a task management application developed using ReactJS. The application interfaces with the backend implemented in Java using Spring Boot, communicating through the provided REST API endpoints.

## Deployement Sites:
- Frontend (Next.Js): [https://kaiburr-assignment.vercel.app/](https://kaiburr-assignment.vercel.app/)
- Backend (Spring Boot, Maven): [https://kaiburr.onrender.com](https://kaiburr.onrender.com)
## Installation Steps
### Prerequisites
- Ensure that you have Node.js and npm installed on your machine.
- Clone the Repository using `git clone` command

## For Frontend
- cd `./frontend`
- Run `npm install` to install the required dependencies.
- Configure Backend Endpoint in `src/components/next.config.js`. For example, if the backend is running locally on http://localhost:8081, set the endpoint in `next.config.js`
- Run `npm start` to start the development server.
- The application will be accessible at `http://localhost:3000`

## For Backend
- cd `./Backend`
- Ensure MongoDB is installed and running
- Update the MongoDB connection properties in the application configuration file located at  `src/main/resources/application.properties`.
- Use your preferred IDE or build tool to run the Spring Boot application.
- Use Postman or any HTTP client to test the backend API.

## Screenshots
### Create Task
  ![image](https://github.com/coderSuren/Kaiburr-Assignment/assets/80509210/502a49d2-052e-442d-b7f7-68a9509fde77)
### Task Created Successfully
  ![image](https://github.com/coderSuren/Kaiburr-Assignment/assets/80509210/0392c3e4-0bc7-4ec4-96a5-e003c8421300)
### View Tasks
  ![image](https://github.com/coderSuren/Kaiburr-Assignment/assets/80509210/81e7008e-8e55-4803-9176-6b2d2ff9071d)
### Search for Tasks
  - ### By Name
    ![image](https://github.com/coderSuren/Kaiburr-Assignment/assets/80509210/4dce4565-a4f1-49d8-a4e2-14658484a6f1)
  - ### By Assignee
    ![image](https://github.com/coderSuren/Kaiburr-Assignment/assets/80509210/cf040f79-45b1-40df-96dd-4031ce4e8d66)
### Delete Task
  ![image](https://github.com/coderSuren/Kaiburr-Assignment/assets/80509210/79d65329-9526-4252-9a27-247b2253f9a7)

    
  
