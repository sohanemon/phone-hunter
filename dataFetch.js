const dataFetch = async (message, key = "iphone") => {
  $("showcase").innerHTML = "";
  const res = await fetch(
    ` https://openapi.programming-hero.com/api/phones?search=${key}`
  );
  const data = await res.json();

  if (!data?.data?.length) {
    $("heading").innerText = "Item not found.";
  } else {
    if (data.data.length < 10) $("show-all").classList.add("hidden");
    else $("show-all").classList.remove("hidden");
    const supplied = data.data.slice(0, 9);
    const remains = data.data.slice(9);
    $("show-all").addEventListener("click", (e) => {
      remains.map((item) => create(item));
      $("show-all").classList.add("hidden");
      return;
    });
    supplied.map((item) => create(item));
    $("heading").innerText = message;
  }
};
