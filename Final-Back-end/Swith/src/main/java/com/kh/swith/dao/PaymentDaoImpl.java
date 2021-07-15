package com.kh.swith.dao;

import java.util.ArrayList;
import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.kh.swith.dto.PaymentDto;

@Repository
public class PaymentDaoImpl implements PaymentDao {
	
	@Autowired
	private SqlSessionTemplate sqlSession;

	@Override
	public List<PaymentDto> selectList(String memberemail) {
		List<PaymentDto> list = new ArrayList<>();
		
		try {
			list = sqlSession.selectList(NAMESPACE+"selectList", memberemail);
		} catch(Exception e) {
			e.printStackTrace();
		}
		 
		return list;
	}

	// 기간 검색
	@Override
	public List<PaymentDto> selectListPeriod(PaymentDto dto) {
		List<PaymentDto> list = new ArrayList<>();
		
		try {
			list = sqlSession.selectList(NAMESPACE+"selectListPeriod", dto);
		} catch(Exception e) {
			e.printStackTrace();
		}
		
		
		return list;
	}
	
	@Override
	public PaymentDto selectOne(String paymentid) {
		PaymentDto dto = new PaymentDto();
		
		try {
			dto = sqlSession.selectOne(NAMESPACE+"selectOne", paymentid);
		} catch(Exception e) {
			e.printStackTrace();
		}
		
		return dto;
	}
	
	@Override
	public int insert(PaymentDto dto) {
		int res = 0;
		System.out.println(dto.getPaymentdate());
		try {
			res = sqlSession.insert(NAMESPACE+"insert", dto);
		} catch(Exception e) {
			e.printStackTrace();
		}
		
		return res;
	}
	
	@Override
	public boolean premiumCheck(String memberemail) {
		int res = 0;
		System.out.println("email : " + memberemail);
		try {
			res = sqlSession.selectOne(NAMESPACE+"premiumCheck", memberemail);
		} catch(Exception e) {
			e.printStackTrace();
		}
		System.out.println("res : " + res);
		if (res > 0) {
			return true;
		}
		
		return false;
	}

}
