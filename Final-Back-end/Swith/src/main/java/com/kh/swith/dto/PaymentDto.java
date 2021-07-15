package com.kh.swith.dto;

import java.util.Date;

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
public class PaymentDto {
	private String paymentid;
	private String memberemail;
	private int paymentprice;
	private Date paymentdate;
	private String paymentcontent;
	private String paymentkinds;
	// 아래는 날짜 제한 검색용
	private Date startdate;
	private Date enddate;
}
