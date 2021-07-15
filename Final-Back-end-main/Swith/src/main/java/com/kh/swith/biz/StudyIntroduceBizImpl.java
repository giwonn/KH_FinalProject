package com.kh.swith.biz;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kh.swith.dao.StudyIntroduceDao;
import com.kh.swith.dto.StudyDto;

@Service
public class StudyIntroduceBizImpl implements StudyIntroduceBiz {
	
	@Autowired
	private StudyIntroduceDao studyIntroduceDao;

	@Override
	public List<StudyDto> studyIntroduceSelectOne(int study_group_id) {
		return studyIntroduceDao.studyIntroduceSelectOne(study_group_id);
	}

}
