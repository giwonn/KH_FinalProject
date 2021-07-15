package com.kh.swith.biz;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kh.swith.dao.TodoMyDao;
import com.kh.swith.dto.TodoMyDto;


@Service
public class TodoMyBizImpl implements TodoMyBiz{
	
	@Autowired
	private TodoMyDao dao;
	
	@Override
	public int uploadMyTodo(TodoMyDto dto) {
		return dao.insertMyTodo(dto);
	}

	@Override
	public List<TodoMyDto> selectMyTodoList(String useremail) {
		return dao.selectMyTodoList(useremail);
	}

	@Override
	public int updateMyTodo(TodoMyDto dto) {
		return dao.updateMyTodo(dto);
	}

	@Override
	public int deleteMyTodo(int myTodoId) {
		return dao.deleteMyTodo(myTodoId);
	}

	@Override
	public int toggleMyTodo(int todomyid) {
		return dao.toggleMyTodo(todomyid);
	}

}
