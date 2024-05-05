package com.project.projectManager.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.projectManager.Entity.Todo;

public interface TodoRepository extends JpaRepository<Todo, Integer>{

}
