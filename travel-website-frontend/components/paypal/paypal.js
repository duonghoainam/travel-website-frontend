import React,{useRef} from "react";
import ReactDOM from "react-dom"
// const PayPalButton = paypal.Buttons.driver("react", { React, ReactDOM });
export default function Paypal() {
  
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: "0.01",
          },
        },
      ],
    });
  };
  const onApprove = (data, actions) => {
    return actions.order.capture();
  };
  return (
    // <PayPalButton
    //   createOrder={(data, actions) => createOrder(data, actions)}
    //   onApprove={(data, actions) => onApprove(data, actions)}
    // />
    <h1>aaaaa</h1>
  );
}