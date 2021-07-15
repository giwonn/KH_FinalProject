package com.kh.swith.dao;

import java.util.List;

import com.kh.swith.dto.TodoMyDto;

public interface TodoMyDao {
	public String NAMESPACE = "swith.todolist-my-mapper.";
	public int insertMyTodo (TodoMyDto dto);
	public List<TodoMyDto> selectMyTodoList(String useremail);
	public int updateMyTodo (TodoMyDto dto);
	public int deleteMyTodo(int myTodoId);
	public int toggleMyTodo(int todomyid);
}
