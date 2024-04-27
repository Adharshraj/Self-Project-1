package com.project.projectManager.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.projectManager.Entity.Todo;
import com.project.projectManager.Repository.TodoRepository;

@Service
public class TodoImplementation implements TodoService{
	
	@Autowired
	TodoRepository tdry;
	@Override
	public String addTodos(Todo td) {
		tdry.save(td);
		return "Todo Saved";
	}

	@Override
	public List<Todo> viewTodos() {
		List<Todo> todos=tdry.findAll();
		return todos;
	}

	@Override
	public String UpdateTodo(Todo td) {
		tdry.save(td);
		return "Todo Updated";
	}

	@Override
	public Todo viewTodoById(int id) {
		Optional<Todo> todo=tdry.findById(id);
		Todo tod=todo.get();
		return tod;
	}

	@Override
	public String deleteTo(int id) {
		tdry.deleteById(id);
		return "Todo Deleted";
	}

}
