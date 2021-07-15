package com.kh.swith.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.kh.swith.biz.CalendarBiz;
import com.kh.swith.dto.CalendarDto;

@Controller
public class CalendarController {
	private static final Logger logger = LoggerFactory.getLogger(CalendarController.class);

	@Autowired
	private CalendarBiz calendarBiz;

	
	@RequestMapping(value = "calendarSelectList.do", method = RequestMethod.GET)
	@ResponseBody
	public List<CalendarDto> selectList() {
		logger.info("[Controller] calendarSelectlist.do");
		
		System.out.println("SELECT TEST : " + calendarBiz.calendarSelectList());
		
		return calendarBiz.calendarSelectList();
	}
	
	// 멤버별 List출력
	@RequestMapping(value = "calendarSelectMember.do", method = RequestMethod.POST)
	@ResponseBody
	public List<CalendarDto> calendarSelectMember(HttpSession session, @RequestBody String member_email) {
		logger.info("[Controller] calendarSelectMember.do");
		
		// react 서버에서 넘오올때 @ -> %40으로 변환되고 마지막에는 =가 붙어서 잘라내주기 위해 split 사용
		member_email = member_email.split("%40")[0] + "@" + member_email.split("%40")[1];
		member_email = member_email.split("=")[0]+"";
		
		System.out.println("SELECTMEMBER TEST : " + member_email);
		
		return calendarBiz.calendarSelectMember(member_email);
	}
	
	
	// 스터디별 List 출력
	@RequestMapping(value = "calendarSelectStudy.do", method = RequestMethod.POST)
	@ResponseBody
	public List<CalendarDto> calendarSelectStudy(HttpSession session, @RequestParam String studyGroupId) {
		logger.info("[Controller] calendarSelectStudy.do");
		
		System.out.println("SELECTSTUDY TEST : " + studyGroupId);
		
		return calendarBiz.calendarSelectStudy(Integer.parseInt(studyGroupId));
	}
	
	
	@RequestMapping(value = "calendarInsert.do", method = RequestMethod.POST)
	@ResponseBody
	public String calendarInsert(HttpSession session, @RequestBody CalendarDto calendarDto) {
		logger.info("[Controller] calendarInsert.do");
		
		System.out.println("INSERT TEST : " + calendarDto.getTitle());
		
		if (calendarBiz.calendarInsert(calendarDto) > 0) {
			return "일정 등록 성공!";
		}
		
		return "일정 등록 실패!";
	}
	
	@RequestMapping(value = "calendarUpdate.do", method = RequestMethod.POST)
	@ResponseBody
	public String calendarUpdate(HttpSession session, @RequestBody CalendarDto calendarDto) {
		logger.info("[Controller] calendarUpdate.do");
		
		System.out.println("UPDATE TEST : " + calendarDto.getCalendar_id());
		System.out.println("calendar_id : " + calendarDto.getCalendar_id());
		System.out.println("title : " + calendarDto.getTitle());
		System.out.println("content : " + calendarDto.getContent());
		System.out.println("start : " + calendarDto.getStart());
		System.out.println("end : " + calendarDto.getEnd());
		
		
		if (calendarBiz.calendarUpdate(calendarDto) > 0) {
			return "일정 수정 성공!";
		}
		
		return "일정 수정 실패!";
	}
	
	@RequestMapping(value = "calendarDelete.do", method = RequestMethod.POST)
	@ResponseBody
	public String calendarDelete(HttpSession session, @RequestBody CalendarDto calendarDto) {
		logger.info("[Controller] calendarDelete.do");
		
		System.out.println("DELETE TEST : " + calendarDto.getCalendar_id());
		
		if (calendarBiz.calendarDelete(calendarDto.getCalendar_id()) > 0) {
			return "일정 삭제 성공!";
		}
		
		return "일정 삭제 실패!";
	}
	
}
