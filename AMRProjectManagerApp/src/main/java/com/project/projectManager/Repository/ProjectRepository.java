package com.project.projectManager.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.projectManager.Entity.Project;

public interface ProjectRepository extends JpaRepository<Project, Integer>{

	public Project findByTitle(String title);
}
