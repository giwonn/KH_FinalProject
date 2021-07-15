package com.kh.swith.controller;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.kh.swith.biz.MemberBiz;
import com.kh.swith.dto.MemberDto;

@Controller
public class MemberController {
	private static final Logger logger = LoggerFactory.getLogger(MemberController.class);

	@Autowired
	private MemberBiz memberBiz;

	@RequestMapping(value = "/MemberCheck.do", method = RequestMethod.POST)
	@ResponseBody
	public String selectMember(@RequestBody MemberDto dto) {

		System.out.println(dto.getEmail());

		String res = memberBiz.MemberSelect(dto.getEmail());

		System.out.println(res);

		if (res == null) {
			return "NotUser";
		}
		return res;
	}

	@RequestMapping(value = "/MemberInsert.do", method = RequestMethod.POST)
	@ResponseBody
	public String InsertMember(@RequestBody MemberDto memberDto) {
		System.out.println("Test : " + memberDto.getEmail());
		System.out.println("Test : " + memberDto.getNickName());
		System.out.println("Test : " + memberDto.getPhoneNumber());
		System.out.println("Test : " + memberDto.getIntro());
		System.out.println("Test : " + memberDto.getLocation());

		if (memberBiz.MemberInsert(memberDto) > 0) {
			return "회원가입성공!";
		}

		return "회원가입실패!";
	}
	
	@RequestMapping(value = "/profileSelect.do", method = RequestMethod.POST)
	@ResponseBody
	public List<MemberDto> profileSelect(@RequestBody MemberDto memberDto) {
		
		//email = email.split("%40")[0] + "@" + email.split("%40")[1];
		//email = email.split("=")[0];
		
		System.out.println(memberDto.getEmail());
		
		List<MemberDto> list = new ArrayList<MemberDto>();

		list = memberBiz.profileSelect(memberDto.getEmail());
		

		return list;
	}
	
	@RequestMapping(value = "/profileUpdate.do", method = RequestMethod.POST)
	@ResponseBody
	public boolean profileUpdate(@RequestBody MemberDto dto) {
		
		logger.info("[MemberController] profileUpdate.do");

		System.out.println("update : " + dto.getEmail());
		if (memberBiz.profileUpdate(dto) > 0) {
			return true;
		}

		return false;
	}
}
