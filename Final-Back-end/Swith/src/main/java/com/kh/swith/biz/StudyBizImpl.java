package com.kh.swith.biz;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kh.swith.dao.StudyDao;
import com.kh.swith.dto.StudyDto;

@Service
public class StudyBizImpl implements StudyBiz{
	
	@Autowired
	private StudyDao dao;
	
	@Override
	public List<StudyDto> selectStudyList(Map<String, Float> map) {
		return dao.selectStudyList(map);
	}
	
	@Override
	public List<StudyDto> searchStudyList(String search){
		return dao.searchStudyList(search);
	}

	@Override
	public StudyDto selectOneStudy(int study_group_id) {
		return dao.selectOneStudy(study_group_id);
	}

	@Override
	public int insertStudy(StudyDto dto, String memberemail) {
		int insertres = dao.insertStudy(dto);
		int insertuserres = 0;
		
		System.out.println("after insert study get study group id = "+dto.getStudygroupid() );
		
		Map <String, String> param = new HashMap();
		
		if(insertres > 0) {
			int studygroupid = dto.getStudygroupid();
			
			param.put("studygroupid", studygroupid+"");
			param.put("memberemail", memberemail);
			param.put("role", "admin");
			
			insertuserres = dao.insertStudyMember(param);
		}
		
		return insertuserres;
	}

	@Override
	public int updateStudy(StudyDto dto) {
		return dao.updateStudy(dto);
	}

	@Override
	public List<StudyDto> selectMyStudyList(String usermail) {
		List<StudyDto> list = new ArrayList<StudyDto> ();
		
		list = dao.selectMyStudyList(usermail);
		
		return list;
	}

}
