const create = ({ brand, image, phone_name: name, slug: id }) => {
  /* --------------------------------------------------------------------- */
  /*               note: getting slug with different name id               */
  /* --------------------------------------------------------------------- */
  console.log(brand, image, name, id);
  const div = document.createElement("div");
  div.classList.add("card", "mt-10", "shadow", "hover:shadow-lg");
  div.innerHTML = `
    <div class="card-header mx-4 -mt-6">
      <img
        class="object-cover rounded-lg w-auto mx-auto"
        src=${image}
      />
  </div>
  <div class="card-body">
    <a href="#">
      <h4 class="font-medium tracking-wide">${name}</h4>
    </a>
    <p class="opcacity-60 mb-3 tracking-wide">
     Brand: <span class='font-medium'>${brand}</span>.
    </p>
    <button class="button button-pink" data-ripple-light="true">
      Details
    </button>
  </div>
    `;
  div.querySelector("button").addEventListener("click", (e) => {
    e.stopPropagation();
    toggleModal();
  });
  $("showcase").appendChild(div);
};
