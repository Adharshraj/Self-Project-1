package com.project.projectManager.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.projectManager.Entity.User;
import com.project.projectManager.Repository.UserRepository;

@Service
public class UserImplemention implements UserService{
	@Autowired
	UserRepository usry;

	@Override
	public String addUser(User us) {
		usry.save(us);
		return "User data saved";
	}

	@Override
	public User findUser(String email) {
		User us=usry.findByEmail(email);
		return us;
	}

	@Override
	public boolean validate(String email) {
		if(usry.findByEmail(email)==null) {
			return false;
		}
		else {
		return true;
		}
	}

	@Override
	public boolean userValidate(String email, String username) {
		User user=usry.findByEmail(email);
		if(user.getUsername().equals(username)) {
			return true;
		}
		else {
		return false;
		}
	}

	@Override
	public void Updateuser(User us) {
		usry.save(us);
		
	}

}
