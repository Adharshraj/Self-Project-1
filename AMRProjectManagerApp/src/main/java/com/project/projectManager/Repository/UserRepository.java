package com.project.projectManager.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.projectManager.Entity.User;

public interface UserRepository extends JpaRepository<User, Integer>{
	public User findByEmail(String email);
}
