package com.kh.swith.biz;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kh.swith.dao.StudyMemberDao;
import com.kh.swith.dto.StudyMemberDto;

@Service
public class StudyMemberBizImpl implements StudyMemberBiz {
	
	@Autowired
	private StudyMemberDao groupstudyDao;

	@Override
	public String selectRole(StudyMemberDto dto) {
		return groupstudyDao.selectRole(dto);
	}

	@Override
	public List<StudyMemberDto> studyGetList(int studyId) {
		return groupstudyDao.studyGetList(studyId);
	}

	@Override
	public int StudySignIn(StudyMemberDto dto) {
		return groupstudyDao.StudySignIn(dto);
	}

	@Override
	public int StudySignOut(StudyMemberDto dto) {
		return groupstudyDao.StudySignOut(dto);
	}

	@Override
	public List<StudyMemberDto> groupStudyWaitingList(int studyId) {
		return groupstudyDao.groupStudyWaitingList(studyId);
	}

	@Override
	public int StudyJoin(StudyMemberDto dto) {
		return groupstudyDao.StudyJoin(dto);
	}

	


}
