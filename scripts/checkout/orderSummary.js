import { cart,deleteProduct,choosedeliveryOption} from "../../data/cart.js";
import { products,matchingProductfun} from "../../data/products.js";
import { fomartprice } from "../utils/money.js";

import { deliveryoptions ,getdelivarydateMatch } from "../../data/deliveryoptions.js";

import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

import { paymentSummary } from './paymentSummary.js';

// const cart=[
//   {
//     delivary_date:"Tuesday, June 21",
//     product_summary:{
//         Image:"images/products/intermediate-composite-basketball.jpg",
//         name:"Black and Gray Athletic Cotton Socks - 6 Pairs",
//         cost:"$10.90",
//         quantity:"1"
//     }



    
//   }
// ];   we can import from cart and search for cart item from the products




 export function orderSummary(){

  let carthtml="";
  cart.forEach((cartItem)=>{

      const productId =cartItem.productId;

      const  matchingProduct= matchingProductfun(productId);
        
      const deliveryoptionId =cartItem.deliveryoption;
      const deliverydateMatch = getdelivarydateMatch(deliveryoptionId)

      const today=dayjs();
      const deliverydate =today.add(deliverydateMatch.deliverydays,'days')

      const deliveryDate=deliverydate.format(
        'dddd , MMMM D'
      )



    carthtml+=`
    <div class="order-product-container js-order-product-container-${matchingProduct.id}">
            <div class="order-delivary-date">Delivery date : ${deliveryDate}</div>
            <div class="order-product-summary">

              <img  class="order-product-img" src=${matchingProduct.image} alt="intermediate-composite-basketball">

              <div class="checkout-product-details">
                <div class="checkout-product-name">${matchingProduct.name}</div>
                <div class="checkout-product-cost">${(fomartprice(matchingProduct.priceCents))}</div>
                <div class="checkout-quantity">
                <span class="quantity">
                  Quantity: <span class="quantity-label"> ${cartItem.quantity}</span></span>
              

                <span class="update-quantity-link link-primary"> Update</span>
                <span  class="delete-quantity-link link-primary js-delete-cart" data-product-id="${matchingProduct.id}">Delete</span>
                </div>
              </div>

              <div class="delivery-option">
                <div class="delivery-title"> Choose a delivery option:</div>
                ${deliveryOptionshtml(matchingProduct,cartItem)}

              </div>
              

            
              
            </div>

          </div>
        </div>`


        
  });


  document.querySelector(".cart-js").innerHTML=carthtml;



  document.querySelectorAll('.js-delete-cart').forEach((deleted)=>{
    deleted.addEventListener('click',()=>{
      const productId=deleted.dataset.productId;
      deleteProduct(productId);
      
      
      const removeContainer =document.querySelector(`.js-order-product-container-${productId}`);
      removeContainer.remove();

      paymentSummary();
    
      
    })
  })



  function deliveryOptionshtml(matchingProduct,cartItem){
    let optionshtml=""
    deliveryoptions.forEach((option)=>{

      const today=dayjs();
      const deliverydate =today.add(option.deliverydays,'days')

      const deliveryDate=deliverydate.format(
        'dddd , MMMM D'
      )
      

      const priceString =option.pricecents === 0? 'Free ' : `$${fomartprice(option.pricecents)}`;
      
      const ischecked = option.id === cartItem.deliveryoption;

      optionshtml+=`
      <div data-product-id="${matchingProduct.id}"
      data-delivery-id="${option.id}" class="delivery-option-flex js-delivery-option" >
                  <input type="radio" ${ ischecked ? 'checked': ''} name="delivery-option-${matchingProduct.id}" class="delivery-option-input">
                  <div>
                    <div class="delivery-option-date">${deliveryDate}
                    </div>
                    <div class="delivery-type">
                          ${priceString}-Shipping        
                    </div>
                  </div>
                  
                </div>`
    })
    
  return optionshtml;
  }


  document.querySelectorAll('.js-delivery-option').forEach((element)=>{
    element.addEventListener('click',()=>{
      const {productId ,deliveryId} =element.dataset;

      choosedeliveryOption(productId,deliveryId);
      orderSummary();
      paymentSummary();

    });
  });



}



