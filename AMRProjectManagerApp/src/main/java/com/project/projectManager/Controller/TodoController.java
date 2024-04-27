package com.project.projectManager.Controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.projectManager.Entity.Data;
import com.project.projectManager.Entity.Data1;
import com.project.projectManager.Entity.Data2;
import com.project.projectManager.Entity.Data3;
import com.project.projectManager.Entity.Data4;
import com.project.projectManager.Entity.Project;
import com.project.projectManager.Entity.Todo;
import com.project.projectManager.Service.ProjectService;
import com.project.projectManager.Service.TodoService;
import java.time.LocalDateTime;

@CrossOrigin("*")
@RestController
public class TodoController {
	int todoId=0;
	
	@Autowired
	TodoService tdsv;
	@Autowired
	ProjectService pjsv;

	@PostMapping("Createtodo")
	public String createTodo(@RequestBody Todo todo) {
		todo.setCreateDate(LocalDateTime.now());
		todo.setStatus(false);
		String msg=tdsv.addTodos(todo);
		return "todo created";
	}
	
	@GetMapping("getproject")
	public List<Project> ProjectUpdater() {
		List<Project> proje=pjsv.ViewProjects();
		System.out.println("Data send");
		return proje;
	}
	@GetMapping("gettodos")
	public List<Todo> TodoUpdater() {
		List<Todo> todo=tdsv.viewTodos();
		return todo;
	}
	@PostMapping("UpdateTodo")
	public String updateTodo(@RequestBody Data4 d2) {
		Todo todo=tdsv.viewTodoById(todoId);
		System.out.println(todo.getDescription());
		System.out.println(d2.getDescription());;
		todo.setDescription(d2.getDescription());
		todo.setUpdateDate(LocalDateTime.now());
		tdsv.UpdateTodo(todo);
		return "Todo updated";
	}
	@PostMapping("fetchalltodos")
	public String fetchTodos(@RequestBody Data3 d3){
		todoId=d3.getId();
		System.out.println(todoId);
		System.out.println("Call received");
		return "Todo id received";
	}
	@GetMapping("deletetodo")
	public String deletetodo() {
		String msg=tdsv.deleteTo(todoId);
		return msg;
	}
	@PostMapping("Updateprojecttodo")
	public String setData(@RequestBody Data id) {
		List<Integer> mi=id.getId();
		List<Todo> tod=new ArrayList<Todo>();
		for(int x=0;x<=mi.size()-1;x++) {
			Todo to=tdsv.viewTodoById(mi.get(x));
			if(to.isStatus()==true) {
				to.setStatus(false);
			}else if(to.isStatus()==false) {
				to.setStatus(true);
			}
			System.out.println(mi.get(x));
			tod.add(to);
			tdsv.UpdateTodo(to);
		}
		System.out.println("Call received");
		return "todo data saved";
	}
}
