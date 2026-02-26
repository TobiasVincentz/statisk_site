const endpoint = "https://kea-alt-del.dk/t7/api/categories";

const container = document.querySelector(".jsontest");

// console.log(container);

function getData() {
  fetch(endpoint)
    .then((fisk) => fisk.json())
    .then(showData);
}

function showData(data) {
  //   console.log(data);
  data.forEach((fisk) => {
    container.innerHTML += `<a class="category_mobile" href="produktliste.html">${fisk.category}</a>`;
  });
}

getData();
