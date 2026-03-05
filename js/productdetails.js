const id = new URLSearchParams(window.location.search).get("id");
const endpoint = `https://kea-alt-del.dk/t7/api/products/${id}`;
// console.log(endpoint);
const container = document.querySelector(".product-page");

function getData() {
  fetch(endpoint)
    .then((res) => res.json())
    .then(showData);
}

function showData(json) {
  //   console.log(id);
  //   console.log(endpoint);
  container.innerHTML = `
      <div class="${json.soldout && "card-img-soldout"}">
        ${json.soldout ? `<p class="soldout"></p>` : ""}
          <img
            src="https://kea-alt-del.dk/t7/images/webp/640/${json.id}.webp"
            alt="Produkt billede"
          />
        </div>
        <div class="product-info">
          <h1 class="h1_font">${json.productdisplayname}</h1>
          <p class="price">Brand: ${json.brandname}</p>
          <p class="price">Color: ${json.colour1}</p>
          <p class="price inventory">Item no: ${json.id}</p>
          <p class="price">DKK ${json.price},-</p>
          ${json.discount ? `<p class="discount"><span>${json.discount}%</span></p>` : ""}
          <form class="size-form">
            <label for="size" class="price inventory">SIZE</label>
            <select id="size" name="size">
              <option value="">Select size</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
            <button class="add-to-basket price ${json.soldout && "soldoutbutton"}">Add to basket</button>
          </form>
        </div>`;
}

getData();
