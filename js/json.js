const endpoint = "https://kea-alt-del.dk/t7/api/categories";

const container = document.querySelector(".jsontest");

// console.log(container);

function getData() {
  fetch(endpoint)
    .then((category) => category.json())
    .then(showData);
}

function showData(data) {
  //   console.log(data);
  data.forEach((category) => {
    container.innerHTML += `<a class="category_mobile" href="produktliste.html">${category.category}</a>`;
  });
}

getData();
