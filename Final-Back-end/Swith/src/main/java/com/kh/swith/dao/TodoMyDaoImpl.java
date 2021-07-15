package com.kh.swith.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.kh.swith.dto.TodoMyDto;

@Repository
public class TodoMyDaoImpl implements TodoMyDao{
	
	@Autowired
	private SqlSessionTemplate sqlSession;
	
	@Override
	public int insertMyTodo(TodoMyDto dto) {
		return sqlSession.insert(NAMESPACE+"insertTodo", dto);
	}

	@Override
	public List<TodoMyDto> selectMyTodoList(String useremail) {
		return sqlSession.selectList(NAMESPACE + "selectTodos", useremail);
	}

	@Override
	public int updateMyTodo(TodoMyDto dto) {
		return sqlSession.update(NAMESPACE + "updateTodo", dto);
	}

	@Override
	public int deleteMyTodo(int myTodoId) {
		return sqlSession.delete(NAMESPACE + "deleteTodo", myTodoId);
	}

	@Override
	public int toggleMyTodo(int todomyid) {
		return sqlSession.update(NAMESPACE + "toggleTodo", todomyid);
	}

}
