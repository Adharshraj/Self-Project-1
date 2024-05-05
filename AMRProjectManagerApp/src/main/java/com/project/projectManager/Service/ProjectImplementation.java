package com.project.projectManager.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.projectManager.Entity.Project;
import com.project.projectManager.Repository.ProjectRepository;

@Service
public class ProjectImplementation implements ProjectService{

	@Autowired
	ProjectRepository pjry;
	@Override
	public String addProject(Project pj) {
		pjry.save(pj);
		return "Project Saved";
	}

	@Override
	public boolean Validate(String title) {
		if(pjry.findByTitle(title)==null) {
			return false;
		}
		else {
		return true;
		}
	}

	@Override
	public String UpdateProject(Project pj) {
		pjry.save(pj);
		return "Project Saved";
	}

	@Override
	public List<Project> ViewProjects() {
		List<Project> proj=pjry.findAll();
		return proj;
	}

	@Override
	public Project ViewAproject(int id) {
		Project pjt=pjry.findById(id).get();
		return pjt;
	}

}
