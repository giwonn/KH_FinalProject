package com.kh.swith.biz;


import java.io.IOException;

import org.apache.commons.io.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.amazonaws.AmazonServiceException;
import com.amazonaws.services.iot.model.CannedAccessControlList;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.DeleteObjectRequest;
import com.amazonaws.services.s3.model.GetObjectRequest;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.amazonaws.services.s3.model.S3Object;
import com.amazonaws.services.s3.model.S3ObjectInputStream;

/**
 * ================ 참고자료 ================
 * https://charlie-choi.tistory.com/236
 * https://www.baeldung.com/aws-s3-java
 * https://ecsimsw.tistory.com/entry/AWS-%EC%82%AC%EC%9A%A9%EA%B8%B0-S3-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0?category=989733
 */
@Service
public class AwsS3Biz {
	
	@Autowired
	private AmazonS3 s3Client;
	
	@Value("${aws.bucketname}")
	private String bucketName;
	
	public String uploadObject(MultipartFile multipartFile, String storedFileName) throws IOException {

		String filePath = "/" + storedFileName;
		// 1. bucket name, 2. key : full path to the file 3. file : new File로 생성한 file instance  
		// 2. PutObjectRequest로 구현 가능 
		s3Client.putObject(new PutObjectRequest(bucketName, filePath, multipartFile.getInputStream(), null));
		
		return s3Client.getUrl(bucketName, filePath).toString();
	}

	public void deleteObject( String storedFileName) throws AmazonServiceException {
		s3Client.deleteObject(new DeleteObjectRequest(bucketName + "/" , storedFileName));
	}

	// 이건 안 쓸 것 같은데....
	// bucket에 올라간 파일을 바이트 단위로 출력하게 해줌
	public Resource getObject(String date, String storedFileName) throws IOException {
		S3Object o = s3Client.getObject(new GetObjectRequest(bucketName + "/" + date, storedFileName));
		S3ObjectInputStream objectInputStream = o.getObjectContent();
		byte[] bytes = IOUtils.toByteArray(objectInputStream);
		
		Resource resource = new ByteArrayResource(bytes);
		return resource;
	}
}
