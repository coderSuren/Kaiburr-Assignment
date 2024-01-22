# Kaiburr Task 3 WEB UI Forms

## Overview
This project is the frontend part of a task management application developed using ReactJS. The application interfaces with the backend implemented in Java using Spring Boot, communicating through the provided REST API endpoints.

## Deployement Sites:
- Frontend (Next.Js): [https://kaiburr-assignment.vercel.app/](https://kaiburr-assignment.vercel.app/)
- Backend (Spring Boot, Maven): [https://kaiburr.onrender.com](https://kaiburr.onrender.com)
> [!NOTE]  
> Please note that the backend server may take some time to initiate. It can take up to 1 minute before it starts responding to requests and reflect in the frontend. This delay is primarily due to resource constraints, as the backend server runs on 500MB compute memory.

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
  - ### Create Task
    ![image](https://github.com/coderSuren/Kaiburr-Assignment/assets/80509210/502a49d2-052e-442d-b7f7-68a9509fde77)
  - ### Task Created Successfully
    ![image](https://github.com/coderSuren/Kaiburr-Assignment/assets/80509210/0392c3e4-0bc7-4ec4-96a5-e003c8421300)
  - ### View Tasks
    ![image](https://github.com/coderSuren/Kaiburr-Assignment/assets/80509210/470682d3-dc9b-4757-b2bd-db7fac8e64ae)

  - ### Search for Tasks
    - ### By Id
      ![image](https://github.com/coderSuren/Kaiburr-Assignment/assets/80509210/b16bbc3e-90c2-47ce-aa26-208b9c77c3a1)
    - ### By Name
      ![image](https://github.com/coderSuren/Kaiburr-Assignment/assets/80509210/6fe32524-9f15-4120-a639-66be4dfb9b8d)
    - ### By Assignee
      ![image](https://github.com/coderSuren/Kaiburr-Assignment/assets/80509210/e69b32ad-7322-46bf-b7f6-d432baf0c3b2)

  - ### Delete Task(s)
    ![image](https://github.com/coderSuren/Kaiburr-Assignment/assets/80509210/929ce2a6-72fa-4f46-947d-b2697466bf3f)
    ![image](https://github.com/coderSuren/Kaiburr-Assignment/assets/80509210/9e888efb-556e-4300-9e4a-b3af5012afb2)

    
  
