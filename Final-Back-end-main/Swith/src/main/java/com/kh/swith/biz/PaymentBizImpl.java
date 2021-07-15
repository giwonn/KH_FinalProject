package com.kh.swith.biz;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kh.swith.dao.PaymentDao;
import com.kh.swith.dto.PaymentDto;

@Service
public class PaymentBizImpl implements PaymentBiz {
	
	@Autowired
	private PaymentDao dao;

	@Override
	public List<PaymentDto> selectList(String memberemail) {
		return dao.selectList(memberemail);
	}

	@Override
	public List<PaymentDto> selectListPeriod(PaymentDto dto) {
		return dao.selectListPeriod(dto);
	}

	@Override
	public PaymentDto selectOne(String paymentid) {
		return dao.selectOne(paymentid);
	}

	@Override
	public int insert(PaymentDto dto) {
		return dao.insert(dto);
	}
	
	@Override
	public boolean premiumCheck(String memberemail) {
		return dao.premiumCheck(memberemail);
	}

}
