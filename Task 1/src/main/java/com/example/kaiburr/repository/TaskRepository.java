package com.example.kaiburr.repository;

import com.example.kaiburr.model.Task;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TaskRepository extends MongoRepository<Task, String> {
    @Query("{'name': { $regex: ?0, $options: 'i' }}")
    List<Task> findTasksByName(String name);

    @Query("{'assignee': ?0}.limit(10)")
    List<Task> findTasksByAssignee(String assignee);
}
