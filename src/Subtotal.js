import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";

function Subtotal() {
  return (
    <div className="subtotal">
      <p>
        Subtotal:{" "}
        <CurrencyFormat
          decimalScale={2}
          displayType={Text}
          thousandSeperator={true}
          prefix={"$"}
        />
      </p>

      <small className="subtotal__gift">
        <input type="checkbox" />
        This order contains a gift
      </small>
      <button>Proceed to Basket</button>
    </div>
  );
}

export default Subtotal;
