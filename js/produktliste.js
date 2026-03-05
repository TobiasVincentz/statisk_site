const klikCategory = new URLSearchParams(window.location.search).get(
  "category",
);
// console.log(klikCategory);
const endpoint = `https://kea-alt-del.dk/t7/api/products?category=${klikCategory}&limit=100`;
// console.log(endpoint);
const container = document.querySelector(".product-list");

document
  .querySelectorAll("button")
  .forEach((knap) => knap.addEventListener("click", filter));

let allData;

// function getData() {
//   fetch(endpoint)
//     .then((res) => res.json())
//     .then(showData);
// }

function getData() {
  fetch(endpoint)
    .then((response) => response.json())
    .then((data) => {
      allData = data; // gem alle produkter //
      showProducts(allData);
    });
}

function filter(e) {
  const valgt = e.target.textContent;
  if (valgt == "All") {
    showProducts(allData);
  } else {
    const udsnit = allData.filter((element) => element.gender == valgt);
    showProducts(udsnit);
  }
}

function showProducts(json) {
  // console.log(json);
  let markup = "";
  json.forEach((product) => {
    markup += `
    <article>
    <a href="productdetails.html?id=${product.id}">
      <div class="card-img ${product.soldout && "card-img-soldout"}">
      <p class="${product.soldout && "soldout"}"></p>
      <img
      src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp"
      alt="Product"
      />
    </div>
    <h3 class="product">${product.productdisplayname}</h3>
    <p class="categorycard">Tshirts Nike</p>
    ${product.discount ? `<p class="price">DKK <span class="beforeprice">${product.price}</span>,-</p>` : `<p class="price">DKK ${product.price},-</p>`}
    <div class="discounted">
    ${product.discount ? `<p class="price">Now DKK <span class="price newprice">${Math.round(product.price - (product.price * product.discount) / 100)}</span>,-</p>` : ""}
    ${product.discount ? `<p class="discount"><span>${product.discount}%</span></p>` : ""}
          </p>
    </div>
    </a>
    </article>
    `;
  });
  container.innerHTML = markup;
}

getData();
