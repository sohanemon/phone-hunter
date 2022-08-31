const searchBox = $("search");
searchBox.addEventListener("change", (e) => {
  dataFetch(`Showing result for "${e.target.value}"`, e.target.value);
});
searchBox.addEventListener("input", (e) => {
  e.target.value === "" && dataFetch("Our Recent Collections");
});
