import React from "react";

export const PaymentCustomRadio = ({id, title, content, onchange}) => {
    return (
        <>
            <div className="">
                <label htmlFor={id} className="text-md text-gray-600">
                    {title}
                </label>
            </div>
            <div className="">
                <select
                    className="h-15 p-3 w-full border-2 border-gray-300 mb-3 rounded-md z-0"
                    id={id}
                    value={content}
                    onChange={onchange}
                >
                    <option value="신용카드">신용카드</option>
                    <option value="계좌이체">계좌이체</option>
                    <option value="무통장입금">무통장입금</option>
                    <option value="카카오페이">카카오페이</option>
                    <option value="페이코">페이코</option>
                </select>
            </div>
        </>
    );
}
