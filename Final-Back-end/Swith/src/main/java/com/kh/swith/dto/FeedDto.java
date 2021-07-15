package com.kh.swith.dto;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class FeedDto {
	private int feedid;
	private String feedcontent;
	private int studygroupid;
	private String memberemail;
	private Date createdat;
}
