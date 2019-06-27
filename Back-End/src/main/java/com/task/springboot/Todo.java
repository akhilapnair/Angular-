package com.task.springboot;

import java.util.Objects;

public class Todo {
  private long id;
  private String name;
  private String status;
  public Todo(long id, String name, String status) {
    this.id = id;
    this.name = name;
    this.status = status;
  }

  public long getId() {
    return id;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    Todo todo = (Todo) o;
    return id == todo.id;
  }

  @Override
  public int hashCode() {
    return Objects.hash(id);
  }

  public void setId(long id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getStatus() {
    return status;
  }

  public void setStatus(String status) {
    this.status = status;
  }



}
