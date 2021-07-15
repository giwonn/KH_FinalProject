package com.kh.swith.dao;

import java.util.ArrayList;
import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.kh.swith.dto.StudyDto;

@Repository
public class StudyIntroduceDaoImpl implements StudyIntroduceDao {
	
	@Autowired
	private SqlSessionTemplate sqlSession;

	@Override
	public List<StudyDto> studyIntroduceSelectOne(int study_group_id) {
		
		
		List<StudyDto> list = new ArrayList<StudyDto>();
		try {
			list = sqlSession.selectList("swith.studyintroducemapper.studyIntroduceSelectOne", study_group_id);
		} catch (Exception e) {
			e.printStackTrace();
		}
				
		return list;
	}
	

}
