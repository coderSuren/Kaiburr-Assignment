# Kaiburr Task 4 CI/CD Pipeline for Spring Boot API
### This repository contains the CI/CD pipeline configuration for building and pushing a Spring Boot App (created in [Task 1](https://github.com/coderSuren/Kaiburr-Assignment/tree/main/Task%201)) docker image to DockerHub using GitHub Actions.
## Links
 - [GitHub Actions](https://github.com/coderSuren/Kaiburr-Assignment/actions/runs/7602911168/job/20704006486)
 - [Docker Hub](https://hub.docker.com/r/surendrangn/kaiburr-task4-cicd-pipeline)

## Workflow of the CI-CD Pipeline
### 1. Created a Workflow File `.github/workflows/maven.yml` on [deploy](https://github.com/coderSuren/Kaiburr-Assignment/tree/deploy) branch
### 2. Specified the workflow, triggers, and jobs in YAML format.

### maven.yml
  ```yml
  name: Java CI with Maven

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
      - name: Set up JDK 17
        uses: actions/setup-java@v3
        with:
          java-version: '17'
          distribution: 'temurin'
          cache: maven
      - name: Build with Maven
        run: mvn clean install
  
      - name: Build & push Docker image
        uses: mr-smithers-excellent/docker-build-push@v6
        with:
          image: surendrangn/kaiburr-task4-cicd-pipeline
          tags: latest
          registry: docker.io
          dockerfile: Dockerfile
          username: ${{ secrets.DOCKER_USERNAME }}
          password: ${{ secrets.DOCKER_PASSWORD }}
  ```
### 3. Steps in the CI-CD workflow:
  - The workflow is triggered on pushes and pull requests to the "deploy" branch.
  - Configures the workflow to use JDK 17 for building the Java application
  - Uses Maven to build the Spring Boot application by executing the clean and install phases.
  - Builds a Docker image using the Dockerfile and pushes the image to the specified Docker registry
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
### 6. Configuring GitHub Secrets:
  - Navigate to your GitHub repository.
  - Go to `Settings` -> `Secrets`
  - Add two secrets:
```
    $DOCKER_USERNAME: Docker Hub username
    $DOCKER_PASSWORD: Docker Hub password or access token
```
## Screenshots
  - ### Github Actions
    ![image](https://github.com/coderSuren/Kaiburr-Assignment/assets/80509210/25651c39-529e-4126-8e20-ef494a8d3637)
    ![image](https://github.com/coderSuren/Kaiburr-Assignment/assets/80509210/bdf92546-92a8-4a53-9bdf-d6a13ff67a0c)
  - ### Docker Hub
    ![image](https://github.com/coderSuren/Kaiburr-Assignment/assets/80509210/c8642367-fa5d-431b-90c2-40577820d30c)
    ![image](https://github.com/coderSuren/Kaiburr-Assignment/assets/80509210/29ee70e7-4211-414c-9963-f79500d27b14)

