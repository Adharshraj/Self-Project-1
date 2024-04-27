package com.project.projectManager.Controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.projectManager.Entity.Data;
import com.project.projectManager.Entity.Data2;
import com.project.projectManager.Entity.Project;
import com.project.projectManager.Entity.ProjectData;
import com.project.projectManager.Entity.Todo;
import com.project.projectManager.Service.ProjectService;
import com.project.projectManager.Service.TodoService;
import java.time.LocalDateTime;

@CrossOrigin("*")
@RestController
public class ProjectController {
	
	int dataforproject=0;
	List<Todo> todos=new ArrayList<Todo>();
	
	@Autowired
	ProjectService ptsv;
	@Autowired
	TodoService Tdsv;
	@PostMapping("CreatePjt")
	public String addProject(@RequestBody ProjectData pd) {
		Project pj=new Project();
		pj.setTitle(pd.getTitle());
		pj.setDate(LocalDateTime.now());
		
		List<Todo> todo=new ArrayList<Todo>();
		List<Integer> id=pd.getIds();
 		for(int a:id) {
			Todo tod=Tdsv.viewTodoById(a);
			todo.add(tod);
			System.out.println(tod.getDescription());
 		}
 		pj.setTodo(todo);
 		String msg=ptsv.addProject(pj);
		for(Todo x : todo) {
			x.setProject(pj);
			System.out.println(x.getDescription());
			Tdsv.UpdateTodo(x);
		}
		
		System.out.println(msg);
		return msg;
	}
	@PostMapping("setdata")
	public String setData(@RequestBody Data id) {
		List<Integer> li=id.getId();
		for(int x:li) {
			dataforproject=x;
			System.out.println(dataforproject);
		}
		return "data saved";
	}
	@GetMapping("viewallpjt")
	public List<Project> viewAllProjects(){
		List<Project> proj=ptsv.ViewProjects();
		return proj;	
	}
	@GetMapping("viewproject")
	public Project viewProject() {
		Project dj=ptsv.ViewAproject(dataforproject);
		List<Todo> li=dj.getTodo();
		todos.clear();
		todos.addAll(li);
		for(Todo x:li) {
			System.out.println(x.getDescription());
		}
		System.out.println("Data send successfully");
		return dj;
	}
	@GetMapping("viewprojecttodos")
	public List<Todo> viewTodoList(){
		return todos;
	}
	@PostMapping("updateTitle")
	public String UpdatePjtTitle(@RequestBody Data2 d2) {
		String title=d2.getTitle();
		Project po=ptsv.ViewAproject(dataforproject);
		po.setTitle(title);
		ptsv.UpdateProject(po);
		return "Title Updated";
	}

}
