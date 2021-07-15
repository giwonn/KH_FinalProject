package com.kh.swith.biz;

import java.util.List;

import com.kh.swith.dto.TodoMyDto;


public interface TodoMyBiz {
	public int uploadMyTodo (TodoMyDto dto);
	public List<TodoMyDto>selectMyTodoList(String useremail);
	public int updateMyTodo (TodoMyDto dto);
	public int deleteMyTodo(int myTodoId);
	public int toggleMyTodo(int todomyid);
}
