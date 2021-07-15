import React, { useEffect, useState } from "react";
import { PaymentModal } from "./PaymentModal";

const Payment = ({ children, setPremium }) => {
  useEffect(() => {
    const jquery = document.createElement("script");
    jquery.src = "https://code.jquery.com/jquery-1.12.4.min.js";
    const iamport = document.createElement("script");
    iamport.src = "https://cdn.iamport.kr/js/iamport.payment-1.1.7.js";
    document.head.appendChild(jquery);
    document.head.appendChild(iamport);
    return () => {
      document.head.removeChild(jquery);
      document.head.removeChild(iamport);
    };
  }, []);

  const [modalVisible, setModalVisible] = useState(false);

  /* 모달 open, close */
  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  const info = {
    name: "프리미엄 기능",
    price: "1000",
    email: localStorage.getItem("email"),
    phone: "",
  }; // 주문명, 금액, 이메일, 전화번호 들어가야함

  return (
    <>
      <div onClick={openModal} className="paymentDiv">
        <div style={{"opacity" : "0.5", "backgrounColor" : "gray", "pointerEvents": "none"}}>
          {children} {/* <Payment>태그 안쪽에 들어가는 DOM을 children이란 이름으로 가져옴 */}
        </div>
      </div>
      <PaymentModal info={info} closeModal={closeModal} modalVisible={modalVisible} setPremium={setPremium} />
    </>
  );
};

export default Payment;
