package com.kh.swith.dao;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Repository;

import com.kh.swith.dto.StudyDto;


public interface StudyDao {
	public String NAMESPACE = "swith.studymapper.";
	
	public List<StudyDto> selectStudyList(Map<String, Float> map);
	public List<StudyDto> searchStudyList(String searched);
	public StudyDto selectOneStudy(int study_group_id);
	public List<StudyDto> selectMyStudyList(String memberemail);
	public int insertStudy(StudyDto dto);
	public int insertStudyMember(Map paramMap);	
	public int updateStudy(StudyDto dto);
}