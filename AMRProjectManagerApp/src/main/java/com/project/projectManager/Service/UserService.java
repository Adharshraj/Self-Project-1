package com.project.projectManager.Service;

import com.project.projectManager.Entity.User;

public interface UserService {
	public String addUser(User us);
	public User findUser(String email);
	public boolean validate(String email);
	public boolean userValidate(String email, String username);
	public void Updateuser(User us);
}
