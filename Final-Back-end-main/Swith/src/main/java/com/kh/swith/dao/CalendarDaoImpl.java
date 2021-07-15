package com.kh.swith.dao;

import java.util.ArrayList;
import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.kh.swith.dto.CalendarDto;

@Repository
public class CalendarDaoImpl implements CalendarDao {

	@Autowired
	private SqlSessionTemplate sqlSession;
	
	@Override
	public List<CalendarDto> calendarSelectList() {
		List<CalendarDto> list = new ArrayList<CalendarDto>();
		try {
			list = sqlSession.selectList("swith.calendarmapper.selectList");
		} catch (Exception e) {
			e.printStackTrace();
		}
		return list;
	}

	@Override
	public List<CalendarDto> calendarSelectMember(String member_email) {
		
		List<CalendarDto> list = new ArrayList<CalendarDto>();
		try {
			list = sqlSession.selectList("swith.calendarmapper.selectMember", member_email);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return list;
	}
	
	@Override
	public List<CalendarDto> calendarSelectStudy(int study_group_id) {
		
		List<CalendarDto> list = new ArrayList<CalendarDto>();
		
		try {
			list = sqlSession.selectList("swith.calendarmapper.selectStudy", study_group_id);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return list;
	}

	@Override
	public int calendarInsert(CalendarDto calendarDto) {
		int res = 0;
		
		try {
			res = sqlSession.insert("swith.calendarmapper.insert", calendarDto);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return res;
	}

	@Override
	public int calendarUpdate(CalendarDto calendarDto) {
		int res = 0;
		
		try {
			res = sqlSession.update("swith.calendarmapper.update", calendarDto);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return res;
	}

	@Override
	public int calendarDelete(int calendar_id) {
		int res = 0;
		
		try {
			res = sqlSession.delete("swith.calendarmapper.delete", calendar_id);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return res;
	}

}
