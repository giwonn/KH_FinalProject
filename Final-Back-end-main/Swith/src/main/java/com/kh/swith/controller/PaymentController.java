package com.kh.swith.controller;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.kh.swith.biz.PaymentBiz;
import com.kh.swith.dto.PaymentDto;

/* 결제 기능 */
@RestController
@RequestMapping(path="/payment")
public class PaymentController {

	private static final Logger logger = LoggerFactory.getLogger(PaymentController.class);
	
	@Autowired
	private PaymentBiz biz;

	@RequestMapping(value="selectList.do", method = RequestMethod.POST)
	public List<PaymentDto> selectList(HttpSession session, @RequestBody String memberemail) {
		logger.info("[PaymentController] selectList.do");
		return new ArrayList<>(biz.selectList(memberemail));
	}
	
	@RequestMapping(value="selectListPeriod.do", method = RequestMethod.POST)
	public List<PaymentDto> selectListPeriod(HttpSession session, @RequestBody PaymentDto dto) {
		logger.info("[PaymentController] selectListPeriod.do");
		return new ArrayList<>(biz.selectListPeriod(dto));
	}
	
	@RequestMapping(value="selectOne.do", method = RequestMethod.POST)
	public PaymentDto selectOne(HttpSession session, @RequestBody String paymentid) {
		logger.info("[PaymentController] selectOne.do");
		return biz.selectOne(paymentid);
	}
	
	@RequestMapping(value="insert.do", method = RequestMethod.POST)
	public String insert(HttpSession session, @JsonFormat(pattern = "yyyy-MM-dd") @RequestBody PaymentDto dto) {
		logger.info("[PaymentController] insert.do");
		return (biz.insert(dto) > 0) ? "success" : "false";
	}

	@RequestMapping(value="premiumCheck.do", method = RequestMethod.POST)
	public Boolean premiumCheck(HttpSession session, @RequestParam("email") String email) {
		logger.info("[PaymentController] premiumCheck.do");
		return (biz.premiumCheck(email)) ? true : false;
	}
}
