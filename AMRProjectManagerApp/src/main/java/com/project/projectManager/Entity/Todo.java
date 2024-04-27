package com.project.projectManager.Entity;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
@Entity
public class Todo {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	int id;
	String Description;
	boolean Status;
	LocalDateTime CreateDate;
	LocalDateTime UpdateDate;
	@ManyToOne
	Project project;
	public Todo() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Todo(int id, String description, boolean status, LocalDateTime createDate, LocalDateTime updateDate,
			Project project) {
		super();
		this.id = id;
		Description = description;
		Status = status;
		CreateDate = createDate;
		UpdateDate = updateDate;
		this.project = project;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getDescription() {
		return Description;
	}
	public void setDescription(String description) {
		Description = description;
	}
	public boolean isStatus() {
		return Status;
	}
	public void setStatus(boolean status) {
		Status = status;
	}
	public LocalDateTime getCreateDate() {
		return CreateDate;
	}
	public void setCreateDate(LocalDateTime createDate) {
		CreateDate = createDate;
	}
	public LocalDateTime getUpdateDate() {
		return UpdateDate;
	}
	public void setUpdateDate(LocalDateTime updateDate) {
		UpdateDate = updateDate;
	}
	public Project getProject() {
		return project;
	}
	public void setProject(Project project) {
		this.project = project;
	}
	@Override
	public String toString() {
		return "Todos [id=" + id + ", Description=" + Description + ", Status=" + Status + ", CreateDate=" + CreateDate
				+ ", UpdateDate=" + UpdateDate + ", project=" + project + "]";
	}
}
