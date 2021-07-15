package com.kh.swith.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.kh.swith.dao.FeedDao;
import com.kh.swith.dto.FeedDto;

@Controller
public class FeedController {
	private static final Logger logger = LoggerFactory.getLogger(FeedController.class);
	
	@Autowired
	private FeedDao dao;
	
	@RequestMapping(value="/feed.do",method=RequestMethod.POST)
	@ResponseBody
	public Map insertFeed(@RequestBody FeedDto dto) {
		Map map = new HashMap();
		int res = dao.insertFeed(dto);
		System.out.println(res);
		if(res > 0) {
			map.put("success", "true");
		}else {
			map.put("success", "false");
		}
		return map;
	}
	@RequestMapping(value="/feed.do", method=RequestMethod.GET)
	@ResponseBody
	public Map selectFeeds(@RequestHeader("Email")String email) {
		Map map = new HashMap();
		List<FeedDto> list = new ArrayList<FeedDto>();
		list = dao.selectFeeds(email);
		
		map.put("list", list);
		return map;
	}
	
}
