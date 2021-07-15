package com.kh.swith.biz;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kh.swith.dao.MemberDao;
import com.kh.swith.dto.MemberDto;

@Service
public class MemberBizImpl implements MemberBiz {
	
	@Autowired
	private MemberDao memberDao;

	@Override
	public String MemberSelect(String email) {
		return memberDao.MemberSelect(email);
	}

	@Override
	public int MemberInsert(MemberDto memberDto) {
		return memberDao.MemberInsert(memberDto);
	}

	@Override
	public List<MemberDto> profileSelect(String email) {
		return memberDao.profileSelect(email);
	}
	
	@Override
	public int profileUpdate(MemberDto memberDto) {
		return memberDao.profileUpdate(memberDto);
	}

	
	
}
