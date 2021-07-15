package com.kh.swith.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class StudyDto {
	private int studygroupid;
	private String studygroupname;
	private String studygroupdesc;
	private String studygroupoffline;
	private String studygrouparea;
	private String studygrouplat;
	private String studygrouplng;
	private String studygroupaddr;
	private String studygroupadmin;
	private String studygrouppw;
	private int studyusercnt;
	private int study_member_count;
}
