const klikCategory = new URLSearchParams(window.location.search).get(
  "category",
);
// console.log(klikCategory);
const endpoint = `https://kea-alt-del.dk/t7/api/products?category=${klikCategory}`;
console.log(endpoint);
const container = document.querySelector(".product-list");

function getData() {
  fetch(endpoint)
    .then((res) => res.json())
    .then(showData);
}

function showData(json) {
  // console.log(json);
  let markup = "";
  json.forEach((product) => {
    markup += `<a href="produkt.html">
    <article class="smallProduct onSale soldOut">
    <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="product image" />
    <h3 class="product">${product.productdisplayname}</h3>
    <p class="categorycard">Tshirts Nike</p>
    <p class="price">DKK <span>${product.price}</span>,-</p> 
    <div class="discounted">
    <p class="price">Now DKK <span class="newprice">974</span>,-</p>
    <p><span>${product.discount}</span>%</p>
    </div>
    </article>
    </a>
    `;
  });
  container.innerHTML = markup;
}

getData();
