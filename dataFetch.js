const dataFetch = (message, key = "iphone") => {
  $("showcase").innerHTML = "";
  fetch(` https://openapi.programming-hero.com/api/phones?search=${key}`)
    .then((res) => res.json())
    .then((data) => {
      if (!data?.data?.length) {
        console.log("if");
        $("heading").innerText = "Item not found.";
      } else {
        data.data.map((item) => create(item));
        console.log("el");
        $("heading").innerText = message;
      }
    });
};
