package com.kh.swith.test.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.kh.swith.test.dao.TestDao;
import com.kh.swith.test.dto.TestDto;

@RestController
public class TestController {

	private static final Logger logger = LoggerFactory.getLogger(TestController.class);
	@Autowired
	private TestDao dao;
	
	@RequestMapping(value = "test.do", method = RequestMethod.POST)
	@ResponseBody
	public String test(HttpSession session, @RequestBody TestDto dto) {
		logger.info("[Controller] test.do");
		System.out.println(dto.getEmpno());
		
		return dto.getEmpno()+"";
	}
	
	@RequestMapping(value = "selectlist.do", method = RequestMethod.GET)
	@ResponseBody
	public List<TestDto> selectList() {
		logger.info("[Controller] selectlist.do");
		
		return dao.selectList();
	}
	
	@RequestMapping(value = "insert.do", method = RequestMethod.POST)
	@ResponseBody
	public String insert(HttpSession session, @RequestBody TestDto dto) {
		logger.info("[Controller] insert.do");
		
		if (dao.insert(dto) > 0) {
			return "인서트 성공!!";
		}
		
		return "인서트 실패!!";
	}
	
	

}
