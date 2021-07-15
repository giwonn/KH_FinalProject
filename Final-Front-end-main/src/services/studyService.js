import ApiService from "./.apiservice";

const StudyService = () => {};

StudyService.uploadStudy = (data, email) => {
  return ApiService.postWithHeader("/study.do", data, email);
};

StudyService.searchStudy = (lat, lng, dist) => {
  return ApiService.get(`/studylist.do?lat=${lat}&lng=${lng}&dist=${dist}`);
};

StudyService.searchAllStudy = (searched) => {
  return ApiService.get(
    `/searchstudy.do?searched=${encodeURIComponent(searched)}`
  );
};

StudyService.getMyStudies = (email) => {
  return ApiService.getWithHeader("/mystudy.do", email);
};

StudyService.getStudy = (id) => {
  return ApiService.get(`/study.do?id=${id}`);
};

StudyService.updateStudy = (data) => {
  return ApiService.put("/study.do", data);
};

export default StudyService;
