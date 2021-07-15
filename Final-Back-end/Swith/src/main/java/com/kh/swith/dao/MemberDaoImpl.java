package com.kh.swith.dao;

import java.util.ArrayList;
import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.kh.swith.dto.MemberDto;

@Repository
public class MemberDaoImpl implements MemberDao {
	
	@Autowired
	private SqlSessionTemplate sqlSession;

	@Override
	public String MemberSelect(String email) {
		
		String res = "";
		System.out.println("biz : " +email);
		
		try {
			res = sqlSession.selectOne("swith.membermapper.selectOne",email);
		}catch (Exception e) {
			e.printStackTrace();
		}
		System.out.println("biz res : " + res );
		
		return res;
	}

	@Override
	public int MemberInsert(MemberDto memberDto) {
		
		int res = 0;
		
		try {
			res = sqlSession.insert("swith.membermapper.insert",memberDto);
		}catch (Exception e) {
			e.printStackTrace();
		}
		System.out.println("inset res : " + res);
		
		return res;
	}
	
	@Override
	public List<MemberDto> profileSelect(String email) {
		
		List<MemberDto> list = new ArrayList<MemberDto>();
		
		try {
			list = sqlSession.selectList("swith.membermapper.profileSelect", email);
		}catch (Exception e) {
			e.printStackTrace();
		}
		
		return list;
	}

	@Override
	public int profileUpdate(MemberDto memberDto) {
		int res = 0;
		
		try {
			res = sqlSession.update("swith.membermapper.profileUpdate", memberDto);
		} catch (Exception e) {
			e.printStackTrace();
		}
		System.out.println("update res : " + res);
		
		return res;
	}

	@Override
	public String selectMemberNickname(String email) {
		String res = "";
		try {
			res = sqlSession.selectOne("swith.membermapper.selectNickname", email);
		}catch(Exception e) {
			e.printStackTrace();
		}
		return res;
	}


}
