package com.project.projectManager.Service;

import java.util.List;

import com.project.projectManager.Entity.Project;

public interface ProjectService {
	public String addProject(Project pj);
	public boolean Validate(String title);
	public String UpdateProject(Project pj);
	public List<Project> ViewProjects();
	public Project ViewAproject(int id);
}
