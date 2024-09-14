// const products = [
//   {
//     img: "images/products/intermediate-composite-basketball.jpg",
//     name: "Intermediate Size Basketball",
//     rating: {
//       stars: 4,
//       count: 127,
//     },
//     priceCents: 2095,
//   },
//   {
//     img: "images/products/athletic-cotton-socks-6-pairs.jpg",
//     name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
//     rating: {
//       stars: 4.5,
//       count: 87,
//     },
//     priceCents: 1090,
//   },
//   {
//     img: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
//     name: "Adults Plain Cotton T-Shirt - 2 Pack",
//     rating: {
//       stars: 4.5,
//       count: 56,
//     },
//     priceCents: 799,
//   },
// ];

// the above code we  already have data file we  can add it

let productsHtml = "";
products.forEach((product) => {
  // const itemHtml =`
  productsHtml += `
            <div class="each-product">
                <div class="product-img-containter">
                  <img class="product-img" src=${product.image}
                  alt="intermediate-composite-basketball">
                </div>
                <div class="product-name limit-text-to-2-lines">
                  ${product.name}
                </div>
                <div class="product-rating-container">
                  <img class="product-rating" src="images/ratings/rating-${
                    product.rating.stars * 10
                  }.png" alt="rating">
                  <div class="rating-count">${product.rating.count}</div>
                </div>
                <div class="product-price">$${(
                  product.priceCents / 100
                ).toFixed(2)}</div>
                <div class="product-quantity-container">


                  <select >
                    <option  selected value="1">1</option>
                    <option   value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option   value="5">5</option>
                    <option   value="6">6</option>
                    <option  value="7">7</option>
                    <option value="8">8</option>
                    <option  value="9">9</option>
                    <option   value="10">10</option>

                  </select>
                </div>

                <div class="product-spacer"></div>
                  <div class="add-to-cart"> 
                    <img src="images/icons/checkmark.png" alt="checkmark">Added</div>
                
                  
                  <button class="add-to-button button-p">Add to Cart</button>
                


              </div>
          `;
});

document.querySelector(".products-js").innerHTML = productsHtml;




