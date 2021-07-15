package com.kh.swith.dto;

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
public class StudyMemberDto {
	
	private int study_group_member;
	private String email;
	private String studyId;
	private String role;
	private String member_nickname;
	private String member_phonenumber;
	private String member_loc;

}
