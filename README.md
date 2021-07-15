# KH_FinalProject

> _함께 공부하고 싶을 땐 Swith! 함께 공부할 수 있는 사람들을 찾고자 할 때 사용할 수 있는 플랫폼_    

_접속링크 : [http://qclass.iptime.org:3000](http://qclass.iptime.org:3000/)_    

## 이 프로젝트를 보시기 위해선...

1. git clone https://github.com/gareen9342/Final-Front-end.git    
2. cd Final-Front-end 루트에서 npm i   
3. npm run dev (개발모드)    

## 사용된 기술   

### Frontend

- Node.js    
- React.js    
- React-Router-Dom
- Webpack    
- Babel    
- Tailwind    
- Full Calendar    
- Toast Editor   
- Material UI    
- Axios    
- Styled Components
- PM2       

### Backend   

- Spring    
- Oracle   
- My Batis    
- AWS S3 Bucket    

## 기능   

- [x] 로그인 Google, Naver, Kakao Login    
- [x] 온라인 / 오프라인, 비공개 스터디 등 종류를 분리해서 관리되도록 함    
- [x] 지도의 범위와 위치를 설정하여 지역별 검색, 온라인 스터디    
- [x] 캘린더에 일정 추가, 수정, 삭제 등 관리, 관리시 드래그 앤 드롭 가능    
- [x] 프리미엄 기능 이용할 시 결제 기능      
- [x] 멤버들 끼리 서로 팔로우, 팔로잉     
- [x] 투두리스트 사용 시 속해있는 스터디 멤버의 피드에 표시
- [x] 스터디 생성, 수정 및 가입 대기인원에 한하여 가입승인 후 가입될 수 있도록 함    


## Commit 규칙

주요사항 : 제목
- 추가 :whale: 
- 수정 :star:
- 삭제 :boom:


## 파일구조

- pages  
  _페이지 단위당 구성 요소_

- components  
  _header, footer 등 분리되어서 쓸 수 있는 컴포넌트들_

- util  
  _자주 쓰는 유틸함수_

- hooks  
  _React hooks_

- service  
  _API server와 연동_

## dependencies

### react

```json
  "react": "^17.0.2",
  "react-dom": "^17.0.2",
  "react-router-dom": "^5.2.0"
```

### 웹팩

```json
  "webpack": "^5.38.1",
  "webpack-cli": "^4.7.2",
  "webpack-dev-server": "^3.11.2"
  "react-refresh": "^0.10.0",
  ========== webpack
  "@babel/core": "^7.14.3"
  "@babel/preset-env": "^7.14.4",
  "@babel/preset-react": "^7.13.13",
  "@babel/plugin-transform-runtime" : regenerator runtime해결
  ==== 참고 문서 https://velog.io/@haebin/React-regeneratorRuntime-is-not-defined-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0
  ========== Babel
  "babel-loader": "^8.2.2",
  "html-loader": "^2.1.2",
  "html-webpack-plugin": "^5.3.1",
  "css-loader": "^5.2.6",
  "style-loader": "^2.0.0",
  ========== loaders
```

### css

```json
  "autoprefixer": "^10.2.6",
  "tailwindcss": "^2.1.4",
  "postcss": "^8.3.0",
  "postcss-loader": "^5.3.0",
  "mini-css-extract-plugin": "^1.6.0",
```
