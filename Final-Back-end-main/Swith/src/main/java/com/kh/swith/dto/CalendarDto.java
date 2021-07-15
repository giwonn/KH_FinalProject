package com.kh.swith.dto;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class CalendarDto {
	
	
	private int calendar_id;
	private String member_email;
	private int study_group_id;
	private String title;
	private String content;
	@JsonFormat(pattern="yyyy-MM-dd'T'HH:mm")
	private Date start;
	@JsonFormat(pattern="yyyy-MM-dd'T'HH:mm")
	private Date end;
	@JsonFormat(pattern="yyyy-MM-dd'T'HH:mm")
	private Date regdate;
}
