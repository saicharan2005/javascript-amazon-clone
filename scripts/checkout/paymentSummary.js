import { cart} from "../../data/cart.js";

import { matchingProductfun } from "../../data/products.js";

import { getdelivarydateMatch } from "../../data/deliveryoptions.js"

import { fomartprice } from "../utils/money.js";




export  function paymentSummary(){

  let subtotalPrice=0;
  let  shippingPrice=0
  cart.forEach((cartItem)=>{
    
    const  matchingProduct= matchingProductfun(cartItem.productId);
     subtotalPrice += matchingProduct.priceCents *cartItem.quantity;

     const deliverydateMatchid = getdelivarydateMatch(cartItem.deliveryoption);

     shippingPrice +=deliverydateMatchid.pricecents;
  })

  const totalPrice =subtotalPrice+shippingPrice;

  const tax =totalPrice*(0.1)
  

  const overallprice =totalPrice+tax;

   const paymenthtml=`
  <div class="payment-summary-tittle">Order Summary</div>
        <div class="payment-summary-row">
          <div>Items (3):</div>
          <div class="payment-summary-money">
            $${fomartprice(subtotalPrice)}</div>
        </div>

        <div class="payment-summary-row">
          <div>Shipping &amp; handling:</div>
          <div class="payment-summary-money">$${fomartprice(shippingPrice)}</div>
        </div>

        <div class="payment-summary-row subtotal-row">
          <div>Total before tax:</div>
          <div class="payment-summary-money">$${fomartprice(totalPrice)}</div>
        </div>

        <div class="payment-summary-row">
          <div>Estimated tax (10%):</div>
          <div class="payment-summary-money">$${fomartprice(tax)}</div>
        </div>

        <div class="payment-summary-row total-row">
          <div>Order total:</div>
          <div class="payment-summary-money">$${fomartprice(overallprice)}</div>
        </div>

        <button class="place-order-button button-p">
          Place your order
        </button>
        
      `

      document.querySelector('.js-payment-summary').innerHTML=paymenthtml
}

