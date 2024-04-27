package com.project.projectManager.Entity;

import java.util.List;

public class Data1 {

	List<Todo> todo;
	List<Project> project;
	public Data1() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Data1(List<Todo> todo, List<Project> project) {
		super();
		this.todo = todo;
		this.project = project;
	}
	public List<Todo> getTodo() {
		return todo;
	}
	public void setTodo(List<Todo> todo) {
		this.todo = todo;
	}
	public List<Project> getProject() {
		return project;
	}
	public void setProject(List<Project> project) {
		this.project = project;
	}
	@Override
	public String toString() {
		return "Data1 [todo=" + todo + ", project=" + project + "]";
	}
	
}
