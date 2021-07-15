package com.kh.swith.test.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class TestDto {

	private int empno;
	private String ename;
	private String job;
	private String mgr;
	
	public TestDto() {
		// TODO Auto-generated constructor stub
	}

	public TestDto(int empno, String ename, String job, String mgr) {
		this.empno = empno;
		this.ename = ename;
		this.job = job;
		this.mgr = mgr;
	}

	public int getEmpno() {
		return empno;
	}

	public void setEmpno(int empno) {
		this.empno = empno;
	}

	public String getEname() {
		return ename;
	}

	public void setEname(String ename) {
		this.ename = ename;
	}

	public String getJob() {
		return job;
	}

	public void setJob(String job) {
		this.job = job;
	}

	public String getMgr() {
		return mgr;
	}

	public void setMgr(String mgr) {
		this.mgr = mgr;
	}	
}
