

function Cart(localkey){

const cart={

cartItems :JSON.parse(localStorage.getItem(localkey)) || [
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
    localStorage.setItem(localkey, JSON.stringify(this.cartItems));
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
  
    this.cartItems = newcart;
  
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

return cart;
}




const cart1=Cart('cart1-object')
console.log(cart1);

cart1.addTocart("54e0eccd-8f36-462b-b68a-8182611d9add");
cart1.deleteProduct("54e0eccd-8f36-462b-b68a-8182611d9add")


const cart2=Cart('cart2-object');
console.log(cart2);




  

  
  
  
  
   
  