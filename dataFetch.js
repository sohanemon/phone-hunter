const dataFetch = (message, key = "iphone") => {
  $("showcase").innerHTML = "";
  fetch(` https://openapi.programming-hero.com/api/phones?search=${key}`)
    .then((res) => res.json())
    .then((data) => {
      data.data.map((item) => create(item));
      $("heading").innerText = message;
    });
};
