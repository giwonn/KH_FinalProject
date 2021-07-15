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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.kh.swith.biz.TodoMyBiz;
import com.kh.swith.dao.FeedDao;
import com.kh.swith.dao.MemberDao;
import com.kh.swith.dto.FeedDto;
import com.kh.swith.dto.TodoMyDto;

@Controller
public class TodoMyController {
	private static final Logger logger = LoggerFactory.getLogger(TodoMyController.class);
	
	@Autowired
	private TodoMyBiz biz;
	
	@Autowired
	private FeedDao dao;

	@Autowired
	private MemberDao mdao;
	
	
	// ========================== insert to do ========================== // 
	@RequestMapping(value="/mytodo.do", method=RequestMethod.POST)
	@ResponseBody
	public Map insertMyTodo (@RequestBody TodoMyDto dto, @RequestHeader("Email") String email) {
		int res = 0;
		Map map = new HashMap();
		
		if(email == null || email.length() < 1 ) {
			// 유저 정보 없음 
			map.put("success" , "false");
			System.out.println("here");
			return map;
		}
		// ========= 이메일 세팅 후 업로드 
		dto.setMemberemail(email);
//		System.out.println(dto.getTitle());
		res = biz.uploadMyTodo(dto);
		
		if(res > 0) {
			map.put("success", "true");
			map.put("todo", dto);
		}else {
			map.put("success" , "false");
		}
		return map;
	}

	// ========================== get to do ========================== //
	@RequestMapping(value="/mytodo.do", method=RequestMethod.GET)
	@ResponseBody
	public List<TodoMyDto> getMyTodos (@RequestHeader("Email") String email) {
		List<TodoMyDto> list = new ArrayList<TodoMyDto>();
		
		list = biz.selectMyTodoList(email);
		
		return list;
	}
	
	// ========================== delete to do ========================== //
	@RequestMapping(value="/mytodo.do", method=RequestMethod.DELETE)
	@ResponseBody
	public Map deleteMyTodo (@RequestParam("id") String id) {
		Map map = new HashMap();
		
		int res = biz.deleteMyTodo(Integer.parseInt(id));
		if(res > 0) {
			map.put("success", "true");
		}else {
			map.put("success", "false");
		}
		
		return map;
	}
	
	// ========================== update to do ========================== //
	@RequestMapping(value="/mytodo.do", method=RequestMethod.PUT)
	@ResponseBody
	public Map updateMyTodo (@RequestBody TodoMyDto dto, @RequestHeader("Email") String email) {
		
		Map res = new HashMap();
		
		if(email == null || email.length() < 1) {
			res.put("success", "false");
			return res; 
		}
		dto.setMemberemail(email);
		biz.updateMyTodo(dto);
		
		res.put("success","true");
		return res;
	}
	
	// ========================== toggle to do ========================== //
	@RequestMapping(value="/mytodo.do", method=RequestMethod.PATCH)
	@ResponseBody
	public Map toggleMyTodo (@RequestBody TodoMyDto todoDto) {
		Map map = new HashMap();
		int id = todoDto.getTodomyid();
		int res = biz.toggleMyTodo(id);
		
		
		if(res > 0) {
			map.put("success" , "true");
			//============ toggle todo성공 ========//
			if(todoDto.getIsdone() == 0 ) {
				FeedDto feedDto = new FeedDto();
				String memberEmail = todoDto.getMemberemail();
				String memberNickname = todoDto.getMembernickname();
				
				feedDto.setMemberemail(memberEmail);
				if(memberNickname == null || memberNickname.trim().length() < 1) {
					memberNickname = mdao.selectMemberNickname(memberEmail);
				}
				feedDto.setFeedcontent( memberNickname + "님이 " + todoDto.getContent() + "을 성공하셨습니다. ");
			
				dao.insertFeed(feedDto);
			}
	
			map.put("id" ,id);
		}else {
			map.put("success", "false");
		}
		
		
		return map;
	}
	
}
