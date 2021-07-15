package com.kh.swith.controller;

import java.util.HashMap;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.kh.swith.biz.StudyMemberBiz;
import com.kh.swith.dto.StudyMemberDto;

@RestController
@RequestMapping(path="/groupstudy")
public class StudyMemberController {
	private static final Logger logger = LoggerFactory.getLogger(StudyMemberController.class);
	
	@Autowired
	private StudyMemberBiz studymemberbiz;
	
	@RequestMapping(value="groupStudySelectRole.do", method = RequestMethod.POST)
	@ResponseBody
	public String selectRole(@RequestBody StudyMemberDto dto) {
		
		logger.info("[GroupStudyController] groupStudySelectRole.do");
		
		System.out.println(dto.getEmail());
		System.out.println(dto.getStudyId());
		String res = studymemberbiz.selectRole(dto);
		System.out.println("role : " + res);
		
		return res;
	}
	
	@RequestMapping(value="groupStudygetList.do", method = RequestMethod.POST)
	@ResponseBody
	public List<StudyMemberDto> studyGetList(@RequestBody StudyMemberDto dto){
		
		logger.info("[GroupStudyController] groupStudygetList.do");
		
		System.out.println("스터디 번호 : " + dto.getStudyId());
		
		return studymemberbiz.studyGetList(Integer.parseInt(dto.getStudyId()));
	}
	
	@RequestMapping(value="groupStudySignIn.do", method = RequestMethod.POST)
	@ResponseBody
	public int groupStudySignIn(@RequestBody StudyMemberDto dto) {
		
		logger.info("[GroupStudyController] groupStudySignIn.do");
		
		System.out.println(dto.getEmail());
		System.out.println(dto.getStudyId());
		
		int res = studymemberbiz.StudySignIn(dto);
		System.out.println("res의 값" + res);
		
		return res;
	}
	
	@RequestMapping(value="groupStudySignOut.do", method = RequestMethod.POST)
	@ResponseBody
	public int groupStudySignOut(@RequestBody StudyMemberDto dto) {
		
		logger.info("[GroupStudyController] groupStudySignOut.do");
		
		System.out.println(dto.getEmail());
		System.out.println(dto.getStudyId());
		int res = studymemberbiz.StudySignOut(dto);
		
		System.out.println("res의 값" + res);
		return res;
	}
	
	@RequestMapping(value="groupStudyWaitingList.do", method = RequestMethod.POST)
	@ResponseBody
	public List<StudyMemberDto> StudySignJoin(@RequestBody StudyMemberDto dto){
		
		logger.info("[GroupStudyController] groupStudyWaitingList.do");
		
		System.out.println("스터디 번호 : " + dto.getStudyId());
		
		return studymemberbiz.groupStudyWaitingList(Integer.parseInt(dto.getStudyId()));
	}
	
	@RequestMapping(value="groupStudyJoin.do", method = RequestMethod.POST)
	@ResponseBody
	public int groupStudyJoin(@RequestBody StudyMemberDto dto) {
		
		logger.info("[GroupStudyController] groupStudyJoin.do");
		
		System.out.println(dto.getEmail());
		System.out.println(dto.getStudyId());
		
		int res = studymemberbiz.StudyJoin(dto);
		System.out.println("res의 값" + res);
		
		return res;
	}
}
