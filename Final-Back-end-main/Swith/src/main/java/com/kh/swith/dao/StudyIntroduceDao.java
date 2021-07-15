package com.kh.swith.dao;

import java.util.List;

import com.kh.swith.dto.StudyDto;

public interface StudyIntroduceDao {
	
	public List<StudyDto> studyIntroduceSelectOne(int study_group_id);

}
