import { cart } from "../data/cart.js";
import { products } from "../data/products.js";
import { fomartprice } from "./utils/money.js";

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

let carthtml="";
cart.forEach((cartItem)=>{

    const productId =cartItem.productId;

    let matchingProduct;
    products.forEach((product)=>{
      if(productId === product.id){
        matchingProduct=product
      }
    })

  carthtml+=`
  <div class="order-product-container">
          <div class="order-delivary-date">Delivery date:Tuesday, June 21</div>
          <div class="order-product-summary">

            <img  class="order-product-img" src=${matchingProduct.image} alt="intermediate-composite-basketball">

            <div class="checkout-product-details">
              <div class="checkout-product-name">${matchingProduct.name}</div>
              <div class="checkout-product-cost">${(fomartprice(matchingProduct.priceCents))}</div>
              <div class="checkout-quantity">
              <span class="quantity">
                Quantity: <span class="quantity-label"> ${cartItem.quantity}</span></span>
              
              <span class="update-quantity-link link-primary"> Update</span>
              <span data-product-id class="update-quantity-link link-primary js-delete-cart">Delete</span>
              </div>
            </div>

            <div class="delivery-option">
              <div class="delivery-title"> Choose a delivery option:</div>
              <div class="delivery-option-flex">
                <input type="radio" name="delivery-option-${cartItem.productId}" class="delivery-option-input">
                <div>
                  <div class="delivery-option-date">Tuesday, June 16
                  </div>
                  <div class="delivery-type">
                    FREE Shipping                 
                  </div>
                </div>
                
              </div>

              <!--  -->
              <div class="delivery-option-flex">
                <input type="radio" name="delivery-option-${cartItem.productId}" class="delivery-option-input">
                <div>
                  <div class="delivery-option-date">Wednesday, June 10
                  </div>
                  <div class="delivery-type">
                    $4.99 Shipping                 
                  </div>
                </div>
                
              </div>


              <!--  -->
              <div class="delivery-option-flex">
                <input type="radio" name="delivery-option-${cartItem.productId}" class="delivery-option-input">
                <div>
                  <div class="delivery-option-date">monday, June 8
                  </div>
                  <div class="delivery-type">
                    $9.99 Shipping                 
                  </div>
                </div>
                
              </div>

            </div>
            

          
             
          </div>

        </div>
      </div>`


      
});


document.querySelector(".cart-js").innerHTML=carthtml;


console.log(cart)

document.querySelectorAll('.js-delete-cart').forEach((deleted)=>{
  deleted.addEventListener('click',()=>{
    const productId=button.dataset.productId;
    cart.forEach((cartItem)=>{
      if(cartItem.productId === productId ){
        cart.remove(cartItem);
      }
    })
  })
})


console.log(cart)