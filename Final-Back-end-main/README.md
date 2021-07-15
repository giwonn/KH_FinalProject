# Final-Back-end
---
함께 공부할 사람들을 찾고 싶을 때 좋은 플랫폼
통장잔고 2조의 백엔드!


# Commit 규칙
---
Commit 규칙
주요사항 : 제목

추가 🐳  
수정 ⭐  
삭제 💥  


# Front-end
---
[프론트 서버 (React)](http://qclass.iptime.org:3000)  
위 링크로 접속하시면 React로 구현한 프론트엔드단을 보실 수 있습니다~!  
백엔드와 연결되어 있어 바로 테스트 가능합니다~  
[프론트 서버 Github](https://github.com/gareen9342/Final-Front-end)  

# File Setting
---
📦Swith  
 ┣ 📂.settings  
 ┣ 📂src  
 ┃ ┣ 📂main  
 ┃ ┃ ┣ 📂java  
 ┃ ┃ ┃ ┗ 📂com  
 ┃ ┃ ┃ ┃ ┗ 📂kh  
 ┃ ┃ ┃ ┃ ┃ ┗ 📂swith  
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂biz -> Service단  
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂common  
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂config  
 ┃ ┃ ┃ ┃ ┃ ┃ ┃ ┗ 📂filter -> Spring단으로 들어오는 송수신 데이터 필터 처리  
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂controller -> Controller단 (외부에서 들어오는 통신 송수신)  
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dao -> Data Access Object (SQL쿼리문 생성 후 DB 통신)  
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂dto -> Data Transfer Object (프로세스 간 데이터 전달 객체)  
 ┃ ┃ ┃ ┃ ┃ ┃ ┣ 📂test -> 테스트용으로 만들었던 디렉토리  
 ┃ ┃ ┣ 📂resources  
 ┃ ┃ ┃ ┣ 📂config -> 여러 설정 파일들  
 ┃ ┃ ┃ ┣ 📂mybatis -> Mybatis를 이용한 sql쿼리문 설정 파일  
 ┃ ┃ ┃ ┗ 📜log4j.xml  
 ┃ ┃ ┗ 📂webapp  
 ┗ 📜pom.xml  
