package com.example.kaiburr.model;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

@Document("tasks")
public class Task {


    private String id;
    private String name;
    private String assignee;
    private String project;
    private Date startTime;
    private String SurendranProperty;

    public Task() {
    }

    public Task(String name, String id, String assignee, String project, Date startTime, String SurendranProperty ) {
        this.name = name;
        this.id= id;
        this.assignee = assignee;
        this.project = project;
        this.startTime = startTime;
        this.SurendranProperty = SurendranProperty;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAssignee() {
        return assignee;
    }

    public void setAssignee(String assignee) {
        this.assignee = assignee;
    }

    public String getProject() {
        return project;
    }

    public void setProject(String project) {
        this.project = project;
    }

    public Date getStartTime() {
        return startTime;
    }

    public void setStartTime(Date startTime) {
        this.startTime = startTime;
    }

    public String getSurendranProperty() {
        return SurendranProperty;
    }

    public void setSurendranProperty(String surendranProperty) {
        SurendranProperty = surendranProperty;
    }
}
