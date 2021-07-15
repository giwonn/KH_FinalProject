package com.kh.swith.dao;

import java.util.List;

import com.kh.swith.dto.MemberDto;

public interface MemberDao {
	public String MemberSelect(String email);
	public int MemberInsert(MemberDto memberDto);
	
	public List<MemberDto> profileSelect(String email);
	public int profileUpdate(MemberDto memberDto);
	
	public String selectMemberNickname(String email);
}
