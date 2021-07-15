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
import org.springframework.web.bind.annotation.ResponseBody;

import com.kh.swith.biz.StudyIntroduceBiz;
import com.kh.swith.dto.StudyDto;


@Controller
public class SutdyInroduceController {
	private static final Logger logger = LoggerFactory.getLogger(SutdyInroduceController.class);

	@Autowired
	private StudyIntroduceBiz studyIntroduceBiz;

	@RequestMapping(value = "studyIntroduceSelectOne.do", method = RequestMethod.POST)
	@ResponseBody
	public List<StudyDto> studyIntroduceSelectOne(HttpSession session, @RequestBody String group_study_id) {
		logger.info("[Controller] studyIntroduceSelectOne.do");
		
		group_study_id = group_study_id.split("=")[0];
		
		System.out.println("STUDYINTROSELECTONE TEST : " + group_study_id);
		
		return studyIntroduceBiz.studyIntroduceSelectOne(Integer.parseInt(group_study_id));
	}

	
}
