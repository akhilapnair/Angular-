package com.task.springboot;

import org.springframework.stereotype.Service;

import javax.swing.event.ListDataEvent;
import java.util.ArrayList;
import java.util.List;
@Service
public class TodoHardcodedService {
  public static List<Todo> todos = new ArrayList();

  static {
    todos.add(new Todo(1, "task a", "In-progress"));
    todos.add(new Todo(2, "task b", "Completed"));
    todos.add(new Todo(3, "task c", "In-progress"));
    todos.add(new Todo(4, "task d", "Completed"));
  }

  private int idCounter;

  public List<Todo> findAll() {
    return todos;
  }

  public Todo save(Todo todo){
    if(todo.getId() == -1 || todo.getId() == 0) {

  todo.setId(++idCounter);
    todos.add(todo);
    } else {
      deleteById(todo.getId());
      todos.add(todo);
      }
return todo;
  }
  public Todo deleteById(long id) {
    Todo todo = findById(id);
    if(todo == null){
      return null;
    }
    if( todos.remove(todo)) {
      return todo;
    }
    return null;

  }

  private Todo findById(long id) {
    for (Todo todo : todos) {
      if (todo.getId() == id) {
        return todo;
      }
    }
    return null;

  }
}
