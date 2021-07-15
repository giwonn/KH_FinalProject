// Spring과 통신하기위한 결제 설정
import ApiService from "/src/services/.apiservice";
const PaymentService = () => {};

PaymentService.selectList = (memberid) => {
    return ApiService.post("/payment/selectList.do", memberid);
};
PaymentService.selectListPeriod = (PaymentDto) => {
    return ApiService.post("/payment/selectListPeriod.do", PaymentDto);
};
PaymentService.selectOne = (paymentid) => {
    return ApiService.post("/payment/selectOne.do", paymentid);
};
PaymentService.insert = (paymentInfo) => {
    return ApiService.post("/payment/insert.do", paymentInfo);
};
PaymentService.refund = (paymentid) => {
    return ApiService.post("/payment/refund.do", paymentid);
};

export default PaymentService;
