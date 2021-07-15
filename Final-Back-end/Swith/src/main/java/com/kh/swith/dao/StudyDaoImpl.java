package com.kh.swith.dao;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.kh.swith.dto.StudyDto;

@Repository
public class StudyDaoImpl implements StudyDao{
	
	@Autowired
	private SqlSessionTemplate sqlSession;
	
	@Override
	public List<StudyDto> selectStudyList(Map<String, Float> map) {
		List<StudyDto> resList = new ArrayList<StudyDto>();
		try {
			resList = sqlSession.selectList(NAMESPACE + "selectList", map);
		}catch(Exception e) {
			e.printStackTrace();
		}
		return resList;
	}
	
	@Override
	public List<StudyDto> searchStudyList(String searched){
		List<StudyDto> resList = new ArrayList<StudyDto>();
		System.out.println("search text = " + searched);
		try {
			resList = sqlSession.selectList(NAMESPACE + "searchList", searched);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return resList;
	}

	@Override
	public StudyDto selectOneStudy(int study_group_id) {
		StudyDto dto = new StudyDto();
		try {
			dto = sqlSession.selectOne(NAMESPACE + "selectStudyById", study_group_id);
		}catch(Exception e) {
			e.printStackTrace();
		}
		return dto;
	}

	@Override
	public int insertStudy(StudyDto dto) {
		int res = 0;
		
		try {
			res = sqlSession.insert(NAMESPACE+"insert",dto);
		}catch(Exception e) {
			e.printStackTrace();
		}
		return res;
	}

	@Override
	public int updateStudy(StudyDto dto) {
		int res = 0;
		try {
			res = sqlSession.update(NAMESPACE+ "updateStudy", dto);
		}catch(Exception e) {
			e.printStackTrace();
		}
		return res;
	}

	@Override
	public List<StudyDto> selectMyStudyList(String memberemail) {
		List<StudyDto> resultList = new ArrayList<StudyDto> ();
		
		try {
			resultList = sqlSession.selectList(NAMESPACE + "selectListByUserEmail", memberemail);
		}catch(Exception e) {
			e.printStackTrace();
		}
		return resultList;
	}

	@Override
	public int insertStudyMember(Map paramMap) {
		int res = 0;
		try {
			res = sqlSession.insert(NAMESPACE + "insertStudyMember",paramMap);
		}catch(Exception e) {
			e.printStackTrace();
		}
		return res;
	}

}
