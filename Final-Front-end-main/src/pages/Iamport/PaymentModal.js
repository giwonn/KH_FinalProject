import React, { useState } from "react";
import Modal from "../../components/Modal";
import { PaymentButton } from "./PaymentButton";
import { PaymentCustomInput } from "./UI/PaymentCustomInput";
import { PaymentCustomRadio } from "./UI/PaymentCustomRadio";
import useInput from "../../hooks/useInput";
import "./Payment.css";

export const PaymentModal = ({ info, closeModal, modalVisible, setPremium }) => {
  const [email, setEmail] = useState(info.email);
  const [phone, setPhone] = useState(info.phone);
  const [payMethod, onChangePayMethod] = useInput("신용카드");
  const paymentInfo = {
      name: info.name,
      price: info.price,
      email: info.email,
      phone: info.phone,
      payMethod: payMethod
  }

  const width_100per = {
    width: "100%",
  };

  /* onChange Function */
  const emailChange = (e) => {
    setEmail(e.target.value);
  };
  const phoneChange = (e) => {
    setPhone(e.target.value);
  };
  /*********************/

  return (
    <>
      {/* <div onClick="">
        <button
          onClick={openModal}
          className="bg-blue-500 text-white p-2 rounded text-2xl font-bold"
        >
          Open Modal
        </button>
      </div> */}
      {modalVisible && (
        <Modal visible={modalVisible} maskClosable={true} onClose={closeModal} bgColor={"rgba(0,0,0,0.3)"}>
            <div className="main-modal w-full inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster">
                <div className="border border-blue-500 shadow-lg modal-container bg-white md:max-w-11/12 mx-auto rounded-xl shadow-lg z-50 overflow-y-auto" style={width_100per}>
                    <div className="modal-content py-4 text-left px-6">
                        {/* Title */}
                        <div className="flex justify-between items-center pb-3">
                            <p className="text-2xl font-bold text-gray-500">
                                SWith 프리미엄 기능 결제
                            </p>
                            <div className="modal-close cursor-pointer z-50" onClick={closeModal}>
                                <svg className="fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
                                </svg>
                            </div>
                        </div>
                        {/* Body */}
                        <div className="my-5 mr-5 ml-5 flex justify-center">
                            <div className="w-full">
                                {/* 결제명 */}
                                <PaymentCustomInput id="names" title="결제명" content={info.name} readonly={true} />
                                {/* 가격 */}
                                <PaymentCustomInput id="price" title="가격" content={info.price} readonly={true} />
                                {/* 핸드폰 번호 */}
                                <PaymentCustomInput id="phone" title="핸드폰 번호" content={phone} onchange={phoneChange} />
                                {/* 이메일 */}
                                <PaymentCustomInput id="email" title="이메일" content={email} onchange={emailChange} />
                                {/* 지불 방법 */}
                                <PaymentCustomRadio id="paymethod" title="지불 방법" content={payMethod} onchange={onChangePayMethod} />
                            </div>
                        </div>
                        {/* Footer */}
                        <div className="flex justify-end pt-2 space-x-14">
                            <button onClick={closeModal} className="px-4 bg-gray-200 p-3 rounded text-black hover:bg-gray-300 font-semibold">취소</button>
                            <PaymentButton name="결제" info={paymentInfo} closeModal={closeModal} setPremium={setPremium} />
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
      )}
    </>
  );
};
