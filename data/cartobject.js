

const cart={

cartItems :JSON.parse(localStorage.getItem("cart-object")) || [
    {
      productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 1,
      deliveryoption: "1",
    },
    {
      productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
      quantity: 2,
      deliveryoption: "2",
    },
  ],


  saveToLocalStorage() {
    localStorage.setItem("cart-object", JSON.stringify(this.cartItems));
  },
  
   addTocart(productId) {
    let matchingitem;
    this.cartItems.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingitem = cartItem;
      }
    });
  
    if (matchingitem) {
      matchingitem.quantity += 1;
    } else {
      this.cartItems.push({
        productId: productId,
        quantity: 1, 
        deliveryoption: "1"
      });
    }
  
    this.saveToLocalStorage();
  },


deleteProduct(productId) {
    const newcart = [];
  
    this.cartItems.forEach((cartItem) => {
      if (cartItem.productId !== productId) {
        newcart.push(cartItem);
      }
    });
  
    cart = newcart;
  
    this.saveToLocalStorage();
  },

choosedeliveryOption(productId, deliveryoptionId) {
    let matchingitem;
    this.cartItems.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingitem = cartItem;
      }
    });
  
    matchingitem.deliveryoption = deliveryoptionId;
  
    this.saveToLocalStorage();
  }
}

console.log(cart);


cart.addTocart("3ebe75dc-64d2-4137-8860-1f5a963e534b");

  
  
  
  
  
   
  