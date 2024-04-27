package com.project.projectManager.Entity;

import java.util.List;

public class ProjectData {
	String title;
	List<Integer> ids;
	public ProjectData() {
		super();
		// TODO Auto-generated constructor stub
	}
	public ProjectData(String title, List<Integer> ids) {
		super();
		this.title = title;
		this.ids = ids;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public List<Integer> getIds() {
		return ids;
	}
	public void setIds(List<Integer> ids) {
		this.ids = ids;
	}
	@Override
	public String toString() {
		return "ProjectData [title=" + title + ", ids=" + ids + "]";
	}
	
	
}
