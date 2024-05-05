package com.project.projectManager.Service;

import java.util.List;

import com.project.projectManager.Entity.Todo;

public interface TodoService {
	public String addTodos(Todo td);
	public List<Todo> viewTodos();
	public String UpdateTodo(Todo td);
	public Todo viewTodoById(int id);
	public String deleteTo(int id);
}
