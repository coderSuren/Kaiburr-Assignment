package com.example.kaiburr.controller;

import com.example.kaiburr.model.Task;
import com.example.kaiburr.repository.TaskRepository;
import com.example.kaiburr.resource.TaskRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@CrossOrigin
public class TaskController {

    private final TaskRepository taskRepository;

    public TaskController(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @GetMapping("/task")
    public ResponseEntity<List<Task>> getAllTasks() {

        return ResponseEntity.ok(this.taskRepository.findAll());
    }
    @GetMapping("/task/{id}")
    public ResponseEntity<?> getAllTaskById(@PathVariable String id) {
        Optional<Task> task = this.taskRepository.findById(id);
        if(task.isPresent()){
            return ResponseEntity.ok(task.get());
        } else {
            return ResponseEntity.status(404).body("The Task with Id: "+id+" was not found. ");
        }
    }

    @GetMapping("/findByName/{name}")
    public ResponseEntity<?> getTasksByName(@PathVariable String name) {
        List<Task> tasks = taskRepository.findTasksByName(name);
        if (tasks.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No tasks found with the given name");
        } else {
            return ResponseEntity.ok(tasks);
        }
    }

    @GetMapping("/findByAssignee/{assignee}")
    public ResponseEntity<?> getTasksByAssignee(@PathVariable String assignee) {
        List<Task> tasks = taskRepository.findTasksByAssignee(assignee);
        tasks=tasks.stream()
                .sorted(Comparator.comparing(Task::getStartTime))
                .limit(10)
                .collect(Collectors.toList());
        if (tasks.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("No tasks found with the given name");
        } else {
            return ResponseEntity.ok(tasks);
        }
    }

    @PutMapping("/task")
    public ResponseEntity<Task> updateTask(@RequestBody TaskRequest taskRequest) {
        Task task = new Task();
        task.setName(taskRequest.getName());
        task.setId(taskRequest.getId());
        task.setAssignee(taskRequest.getAssignee());
        task.setProject(taskRequest.getProject());
        task.setStartTime(taskRequest.getStartTime());
        task.setSurendranProperty(taskRequest.getSurendranProperty());

        return ResponseEntity.status(201).body(this.taskRepository.save(task));
    }

    @PostMapping("/task")
    public ResponseEntity<Task> createTask(@RequestBody TaskRequest taskRequest) {
        Task task = new Task();
        task.setName(taskRequest.getName());
        task.setId(taskRequest.getId());
        task.setAssignee(taskRequest.getAssignee());
        task.setProject(taskRequest.getProject());
        task.setStartTime(taskRequest.getStartTime());
        task.setSurendranProperty(taskRequest.getSurendranProperty());

        return ResponseEntity.status(201).body(this.taskRepository.save(task));
    }



    @DeleteMapping("/task/{id}")
    public ResponseEntity<?> deleteTask(@PathVariable String id) {
        Optional<Task> task = taskRepository.findById(id);
        if (task.isPresent()) {
            taskRepository.deleteById(id);
            return ResponseEntity.ok("Task deleted successfully");
        } else {
            return ResponseEntity.status(404).body("The Task with Id: " + id + " was not found.");
        }
    }
}
