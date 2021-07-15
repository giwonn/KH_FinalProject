package com.kh.swith.dao;

import java.util.List;

import com.kh.swith.dto.CalendarDto;

public interface CalendarDao {
	public List<CalendarDto> calendarSelectList();
	public List<CalendarDto> calendarSelectMember(String member_email);
	public List<CalendarDto> calendarSelectStudy(int study_group_id);
	public int calendarInsert(CalendarDto calendarDto);
	public int calendarUpdate(CalendarDto calendarDto);
	public int calendarDelete(int calendar_id);
}
