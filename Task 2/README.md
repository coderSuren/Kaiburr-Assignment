# Kaiburr Task 4 CI/CD Pipeline for Spring Boot API
This repository contains the CI/CD pipeline configuration for building and deploying a Spring Boot API (created in Task 1) using GitHub Actions.
## Workflow
### 1. Created a Workflow File `.github/workflows/docker-image.yml` on `deploy` branch
### 2. Specified the workflow, triggers, and jobs in YAML format.
#### docker-image.yml
  ```yml
    name: Docker Image CI
  
    on:
        push:
          branches: [ "deploy" ]
        pull_request:
          branches: [ "deploy" ]
      
      jobs:
      
        build:
  
      runs-on: ubuntu-latest
  
      steps:
      - uses: actions/checkout@v3
      - name: Build the Docker image
        run: docker build . --file Dockerfile --tag my-image-name:$(date +%s)
  ```
### 3. Add a step to build the application and run unit tests.
### 4. Include a `Dockerfile` to set up the Docker environment and build a Docker image.
#### Dockerfile
```Dockerfile
FROM eclipse-temurin:17-jdk-alpine
VOLUME /tmp
COPY target/*.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
EXPOSE 8081
```
### 5. Trigger the workflow by pushing changes to the `deploy` branch.
### 6. Set up any necessary secrets or environment variables in the repository settings.

## Screenshots
  ![image](https://github.com/coderSuren/Kaiburr-Assignment/assets/80509210/bd18b8ec-79f1-48bc-8979-0497e652e234)

  
  ![image](https://github.com/coderSuren/Kaiburr-Assignment/assets/80509210/45d9dca7-1764-4a12-9a07-3f099529aac5)

