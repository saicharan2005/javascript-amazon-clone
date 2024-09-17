export let cart = JSON.parse(localStorage.getItem("cart")) || [
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
];

function saveToLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function addTocart(productId) {
  let matchingitem;
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingitem = cartItem;
    }
  });

  if (matchingitem) {
    matchingitem.quantity += 1;
  } else {
    cart.push({
      productId: productId,
      quantity: 1, 
      deliveryoption: "1"
    });
  }

  saveToLocalStorage();
}

export function deleteProduct(productId) {
  const newcart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newcart.push(cartItem);
    }
  });

  cart = newcart;

  saveToLocalStorage();
}

export function choosedeliveryOption(productId, deliveryoptionId) {
  let matchingitem;
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingitem = cartItem;
    }
  });

  matchingitem.deliveryoption = deliveryoptionId;

  saveToLocalStorage();
}
