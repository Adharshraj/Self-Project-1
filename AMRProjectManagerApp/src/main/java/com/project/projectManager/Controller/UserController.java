package com.project.projectManager.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.projectManager.Entity.LoginData;
import com.project.projectManager.Entity.User;
import com.project.projectManager.Service.UserService;

import jakarta.servlet.http.HttpSession;

@CrossOrigin("*")
@RestController
public class UserController {

	@Autowired
	UserService usry;
	
	@PostMapping("register")
	public String adduser(@RequestBody User us) {
		if(usry.validate(us.getEmail())) {
			System.out.println("User already exits");
			return "Registerfail";
		}
		else {
			String msg=usry.addUser(us);
			System.out.println(msg);
			return "Registersuccess";
		}
	}
	
	@PostMapping("login")
	public String userLogin(@RequestBody LoginData ld, HttpSession session,Model model) {
		if(usry.validate(ld.getEmail())) {
		session.setAttribute("email", ld.getEmail());
		User se=usry.findUser(ld.getEmail());
		if(se.getPassword().equals(ld.getPassword())) {
			return "Success";
		}
		else {
		return "Unsuccess";
		}
		}
		else {
			return "Usernotexist";
		}
		
	}
	
	@PostMapping("restpsw")
	public String resetPws(@RequestParam String email,@RequestParam String username,@RequestParam String ps1,@RequestParam String ps2) {
		if(usry.validate(email)) {
			if(usry.userValidate(email, username)) {
				User us=usry.findUser(email);
				if(ps1.equals(ps2)) {
				us.setPassword(ps1);
				usry.Updateuser(us);
				return "login";
				}
				else {
					return "passwordmismatch";
				}
			}
			else {
				return "pswresetfailed";
			}
		}
		else {
			return "pswresetfailed";
		}
	}
}
