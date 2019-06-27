package com.task.springboot;

import com.task.springboot.Todo;
import com.task.springboot.TodoHardcodedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
public class TodoResource {
  @Autowired
  private TodoHardcodedService todoservice;

  @GetMapping("/list")
  public List<Todo> getAllTodo() {
    return todoservice.findAll();
  }

  @PostMapping("/delete/{id}")
  public ResponseEntity<Void> deleteTodo(@PathVariable long id) {
    Todo todo = todoservice.deleteById(id);
    if (todo != null) {
      return ResponseEntity.noContent().build();
    } else {
      return ResponseEntity.notFound().build();
    }

  }
  @PostMapping("/create/todo")
  public ResponseEntity<Todo> createTodo(@RequestBody Todo todo) {
    Todo todoUpdated = todoservice.save(todo);
   return new ResponseEntity<Todo>(todoUpdated, HttpStatus.OK);

  }
}
