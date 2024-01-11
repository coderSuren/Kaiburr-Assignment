package com.example.kaiburr.resource;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@JsonFormat(shape = JsonFormat.Shape.STRING, pattern="yyyy-MM-d'T'HH:mm:ss.SSS")
public class TaskRequest {


    private String id;
    private String name;
    private String assignee;
    private String project;
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:SSS")
    private Date startTime;
    private String surendranProperty;

    public TaskRequest() {
        this.setSurendranProperty();
    }

    public TaskRequest(String name, String id, String assignee, String project, Date startTime) {
        this.name = name;
        this.id = id;
        this.assignee = assignee;
        this.project = project;
        this.startTime = startTime;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
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
        return surendranProperty;
    }

    public void setSurendranProperty() {
        this.surendranProperty = generateRandomProperty();
    }

    private String generateRandomProperty() {
        // Logic to generate 5 random characters from 'Surendran'
        String candidateName = "Surendran";
        StringBuilder property = new StringBuilder();

        List<Character> availableCharacters = candidateName.chars()
                .mapToObj(c -> (char) c)
                .collect(Collectors.toList());

        for (int i = 0; i < 5; i++) {
            int randomIndex = (int) (Math.random() * availableCharacters.size());
            char chosenChar = availableCharacters.remove(randomIndex);
            property.append(chosenChar);
        }

        return property.toString();
    }
}
