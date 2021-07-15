package com.kh.swith.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.kh.swith.dto.FeedDto;

@Repository
public class FeedDaoImpl implements FeedDao{

	@Autowired
	private SqlSessionTemplate sqlSession;
	
	@Override
	public List<FeedDto> selectFeeds(String memberemail) {
		return sqlSession.selectList(NAMESPACE+"selectFeeds",memberemail);
	}

	//insert feed		
	@Override
	public int insertFeed(FeedDto dto) {
		return sqlSession.insert(NAMESPACE+"insertFeed", dto);
	}

}