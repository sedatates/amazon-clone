import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="chackout__left">
        <img
          className="checkout__ad"
          src="https://cdn.iphoneincanada.ca/wp-content/uploads/2018/04/amazon-prime-video.png"
          alt=""
        ></img>

        <div>
          <h2 className="checkout__title">Your Shopping basket</h2>
          {/**item */}
          {/**item */}
          {/**item */}
          {/**item */}
          {/**item */}
          {/**item */}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
        
      </div>
    </div>
  );
}

export default Checkout;
