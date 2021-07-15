package com.kh.swith.biz;

import java.util.List;

import com.kh.swith.dto.MemberDto;

public interface MemberBiz {
	public String MemberSelect(String email);
	public int MemberInsert(MemberDto memberDto);
	
	public List<MemberDto> profileSelect(String email);
	public int profileUpdate(MemberDto memberDto);
}
