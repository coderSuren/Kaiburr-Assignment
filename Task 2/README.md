# Kaiburr Task 2 Kubernetes


## Overview
This task uses the application created in Task #1 to build and deploy application in a Kubernetes Cluster. The deployment includes creating Docker images for the application, generating Kubernetes YAML manifests for deployment and service, and setting up a local Kubernetes cluster using Minikube with Docker as the runtime. Additionally, MongoDB will be deployed to the cluster with a persistent volume of 1GB and a replica set.


## Steps

### 1. Create Docker Images
  #### Build Docker images for the Spring boot application as `spring-mongo-service:1.0`
   ![image](https://github.com/coderSuren/Kaiburr-Assignment/assets/80509210/7db86e25-4e29-42e7-b105-af402033f6cb)

  
### 2. Create Kubernetes YAML Manifests
  Create YAML manifests for the application deployment and service. Sample files can be found in the `Task 2\src\main\resources` directory.
   - ConfigMap: [mongo-config.yml](https://github.com/coderSuren/Kaiburr-Assignment/blob/main/Task%202/src/main/resources/mongo-config.yml)
   - Deployment: [deployment.yml](https://github.com/coderSuren/Kaiburr-Assignment/blob/main/Task%202/src/main/resources/deployment.yml), [mongo-deployment.yml](https://github.com/coderSuren/Kaiburr-Assignment/blob/main/Task%202/src/main/resources/mongo-deployment.yml)
   - Service: [application.yml](https://github.com/coderSuren/Kaiburr-Assignment/blob/main/Task%202/src/main/resources/application.yml)
   - Secrets: [mongo-secret.yml](https://github.com/coderSuren/Kaiburr-Assignment/blob/main/Task%202/src/main/resources/mongo-secret.yml)

### 3. Set Up Local Kubernetes Cluster

  Start Minikube with Docker as the runtime
  ```bash
    minikube start --driver=docker
  ```
  ![image](https://github.com/coderSuren/Kaiburr-Assignment/assets/80509210/d179e9a0-526f-4e09-96a5-da8c506a9d0c)


### 4. Apply Kubernetes Manifests and Deploy MongoDB to the Cluster
  - Deploy MongoDB to the cluster using the provided `mongo-deployment.yml` file. This file includes configurations for a persistent volume of 1GB and 1 replica.
    ![image](https://github.com/coderSuren/Kaiburr-Assignment/assets/80509210/71b512d0-eac7-4a16-aef7-10e0d492a315)
  - Persistent Volume Store of 1GB
    ![image](https://github.com/coderSuren/Kaiburr-Assignment/assets/80509210/4eb767b8-889c-4aa8-8a69-a13364b8f31a)



### 5. Verify Deployment
  - Checking the status of application and MongoDB pods:
    ![image](https://github.com/coderSuren/Kaiburr-Assignment/assets/80509210/9c612bdb-f91c-431c-bc85-e71aa076d440)
  - Kubectl log of springboot application
    ![image](https://github.com/coderSuren/Kaiburr-Assignment/assets/80509210/4b2c6d43-8e90-4ad0-94b9-082895f900fa)


### 6. Access Application Endpoints
  - Port forwarding to make the application endpoints accessible from the host machine 
    ![image](https://github.com/coderSuren/Kaiburr-Assignment/assets/80509210/6f10c69d-f758-44cb-a264-f5099f58aab5)
  - PUT Request a task object to empty database `tasksdb`
    ![image](https://github.com/coderSuren/Kaiburr-Assignment/assets/80509210/44be6c0a-9893-40f4-a260-d7f384d612f8)
  - GET Request to retrieve all tasks
    ![image](https://github.com/coderSuren/Kaiburr-Assignment/assets/80509210/50e67cb3-206a-48ca-b526-f95a621ce723)


### 7. Cleanup
  When finished, clean up resources by stopping Minikube:
  ```bash
    minikube stop
  ```
