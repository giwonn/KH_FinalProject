package com.kh.swith.dto;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TodoStudyDto {
	private String todostudyid;
	private String title;
	private String content;
	private String isdone;
	private String studygroupid;
	private String memberemail;
	private Date createdat;
	private Date doneat;
}
