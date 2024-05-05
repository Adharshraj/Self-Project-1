package com.project.projectManager.Entity;

import java.util.List;

public class Data {
	List<Integer> id;

	public Data() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Data(List<Integer> id) {
		super();
		this.id = id;
	}

	public List<Integer> getId() {
		return id;
	}

	public void setId(List<Integer> id) {
		this.id = id;
	}

	@Override
	public String toString() {
		return "Data [id=" + id + "]";
	}
	
}
