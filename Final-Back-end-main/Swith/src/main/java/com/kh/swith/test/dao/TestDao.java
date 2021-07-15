package com.kh.swith.test.dao;

import java.util.ArrayList;
import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.kh.swith.test.dto.TestDto;

@Repository
public class TestDao {

	@Autowired
	private SqlSessionTemplate sqlSession;
	
	public List<TestDto> selectList() {
		List<TestDto> list = new ArrayList<TestDto>();
		
		try {
			list = sqlSession.selectList("swith.testmapper.selectList");
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return list;
	}
	
	public int insert(TestDto dto) {
		int res = 0;
		
		try {
			res = sqlSession.insert("swith.testmapper.insert", dto);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return res;
	}
}
