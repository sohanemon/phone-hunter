document.body.addEventListener("click", () => {
  $("modal").innerHTML = "";
});
dataFetch("Our recent collections");

window.onscroll = () => {
  console.log("sro");

  /* all may return heigt of navbar element
  console.log($("navbar").scrollHeight);
  console.log($("navbar").clientHeight);
  console.log($("navbar").offsetHeight); */

  const navClass = $("navbar").classList;
  if ($("navbar").offsetTop >= 100) {
    navClass.remove("w-3/4");
    navClass.add("w-full");
    console.log("more");
  } else {
    console.log("less");
    navClass.remove("w-full");
    navClass.add("w-3/4");
  }
};
