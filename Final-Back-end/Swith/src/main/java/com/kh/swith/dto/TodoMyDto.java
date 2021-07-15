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
public class TodoMyDto {
	private int todomyid;
	private String title;
	private String content;
	private int isdone;
	private String memberemail;
	private String membernickname;
	private Date createdat;
	private Date doneat;
}
