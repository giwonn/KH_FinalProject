package com.kh.swith.dao;

import java.util.List;

import com.kh.swith.dto.FeedDto;

public interface FeedDao {

	public String NAMESPACE = "swith.feed-mapper.";
	
	public List<FeedDto> selectFeeds(String memberemail);
	
	public int insertFeed(FeedDto dto);
	
}
