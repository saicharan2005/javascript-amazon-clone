import { cart } from "../data/cart.js";
import { products,matchingProductfun} from "../data/products.js";
import { deliveryoptions ,getdelivarydateMatch } from "../data/deliveryoptions.js";

import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

// import {paymentSummary,getPaymentSummary  } from '../scripts/checkout/paymentSummary.js';


const  orderplaced = [
    {
        Image:"images/products/intermediate-composite-basketball.jpg",
        name:"Black and Gray Athletic Cotton Socks - 6 Pairs",
        arrivingOn:"Monday,june 17",
        quantity:"1"

    
},
{
    Image:"images/products/intermediate-composite-basketball.jpg",
    name:"Black and Gray Athletic Cotton Socks - 6 Pairs",
    arrivingOn:"Monday,june 17",
    quantity:"1"


}
]


const  order_date=dayjs().format(
    'dddd D');

    
 const total_amount=3500
const orderid="27cnajdhdeueybfjfldgyeome-fhe6---4f";

 const orderhtml=`
<div class="order-left-header"> 
            <div class="order-date">
              <div class="order-header-label">Order Placed:</div>
              <div class="order-date-value">${order_date}</div>
            </div>
            <div class="order-cost">
              <div class="order-header-label">Total:</div>
              <div class="order-cost-value">$${total_amount}</div>
            </div>
              
          </div>
          <div class="order-right-header">
            <div class="order-header-label">Order ID:</div>
            <div class="order-id-value">${orderid}</div>
          </div>
          `

document.querySelector('.js-order-details').innerHTML=orderhtml;


let orderitem ="";

cart.forEach((cartItem)=> {

    const productId =cartItem.productId;

      const  matchingProduct= matchingProductfun(productId);

      const deliveryoptionId =cartItem.deliveryoption;
      const deliverydateMatch = getdelivarydateMatch(deliveryoptionId)

      const today=dayjs();
      const deliverydate =today.add(deliverydateMatch.deliverydays,'days')

      const deliveryDate=deliverydate.format(
        'dddd  D'
      )


    orderitem += `
    <div class="order-img-container">
            <img class="order-img" src=${matchingProduct.image} alt="intermediate-composite-basketball">
          </div>
          <div class="order-detail">
            <div class="order-details-name">
              ${matchingProduct.name}
            </div>
            <div class="order-arriving-date">Arriving on : ${deliveryDate}</div>
            <div class="order-quantity">Quantity:${cartItem.quantity}</div>
            <button class="buy-gain-button button-p">
              <img class="button-img" src="images/icons/buy-again.png" alt="buy-again">
              <span>Buy it again</span>
            </button>


          </div>
          <div class="track-package">
            <a class="track-package-link" href="#">Track package</a>
          </div>`
});

console.log(orderitem);

document.querySelector('.js-order-cart').innerHTML= orderitem;