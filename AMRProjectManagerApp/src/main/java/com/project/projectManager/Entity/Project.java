package com.project.projectManager.Entity;

import java.time.LocalDateTime;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class Project {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	int id;
	String title;
	LocalDateTime date;
	@OneToMany
	@JsonIgnore
	List<Todo> todo;
	public Project() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Project(int id, String title, LocalDateTime date, List<Todo> todo) {
		super();
		this.id = id;
		this.title = title;
		this.date = date;
		this.todo = todo;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public LocalDateTime getDate() {
		return date;
	}
	public void setDate(LocalDateTime date) {
		this.date = date;
	}
	public List<Todo> getTodo() {
		return todo;
	}
	public void setTodo(List<Todo> todo) {
		this.todo = todo;
	}
	@Override
	public String toString() {
		return "Project [id=" + id + ", Title=" + title + ", date=" + date + ", todo=" + todo + "]";
	}
}
