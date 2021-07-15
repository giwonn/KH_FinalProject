package com.kh.swith.controller;

import java.awt.image.BufferedImage;
import java.io.IOException;
import java.util.UUID;

import javax.imageio.ImageIO;
import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.kh.swith.biz.AwsS3Biz;

 @Controller
public class FileUploadController {
	private static final Logger logger = LoggerFactory.getLogger(FileUploadController.class);

	@Autowired
	private AwsS3Biz s3Service;
	@Value("${aws.accesskey}")
	private String accessKey;
	
	// 파일 업로드 처리
	@RequestMapping(value = "/image.do", method = RequestMethod.POST)
	@ResponseBody
	public String uploadFile(HttpServletRequest request, MultipartFile file) throws Exception {
		
		String originalFileName = file.getOriginalFilename(); 
		
		// ========= 파일명 중복 방지 처리 ========= //
		String uuidFileName = getUuidFileName(originalFileName);
		
		// ========= 이미지 파일 사이즈 체크 ========= //  
		int[] imageSize = checkImageSize(file);
		System.out.println("width = "+ imageSize[0] + "height = " + imageSize[1]);
		
		// ========= 서버에 파일 저장 ========= // 
		String res = s3Service.uploadObject(file, uuidFileName);
		System.out.println(res);
		return "https://swith-bucket.s3.ap-northeast-2.amazonaws.com//"+uuidFileName;
	}

	private static String getUuidFileName(String originalFileName) {
		return UUID.randomUUID().toString() + "_" + originalFileName;
	}  
	
	private static int[] checkImageSize (MultipartFile file) {
		int[] result = new int[2] ;
		BufferedImage image;
		try {
			image = ImageIO.read(file.getInputStream());
			Integer width = image.getWidth();
			Integer height = image.getHeight();
			result[0] = width;
			result[1] = height;
		} catch (IOException e) {
			e.printStackTrace();
		}
		
		return result;
	}
	public static void imageResize(String orgFilePath, String fileName) {
		
	}
}
