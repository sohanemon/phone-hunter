const toggleModal = async (id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phone/${id}`
  );
  const {
    data: {
      brand,
      image,
      mainFeatures: { chipSet, displaySize, memory, sensors, storage },
      name,
      others,
      releaseDate,
    },
  } = await res.json();

  const div = document.createElement("div");
  div.className = "w-screen h-screen bg-black fixed z-40 top-0 bg-opacity-10";
  /* ---------------------------- for above ☝️ --------------------------- */
  /* ------ note:we used position fixed as the modal may not scroll ------ */
  /* ------------ we respect to html. But we want to fixed it ------------ */
  /* ------------------- for the width of total screen ------------------- */

  /* -------------- note: overflow-hidden is important here -------------- */
  /* -------- because rounded-lg style may not apply over children ------- */
  /* ---- the background div may be rounded but the foreground may not --- */
  /* ------ so, the style of rounded-lg will not be visible anymore ------ */
  /* ---------------------------- for below 👇 --------------------------- */
  div.innerHTML = `
<div class= "card card-plain fixed z-50 w-1/2 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
  <div class="flex relative shadow-2xl rounded-lg overflow-hidden -space-x-2">
  <i class="fa-solid fa-xmark absolute h-10 w-10 grid place-content-center text-xl m-5 right-0 cursor-pointer bg-pink-100 text-pink-500 hover:bg-pink-200 rounded-full p-2"></i>
    <div class="w-1/3 bg-white">
      <img
        class="w-full p-10  object-cover"
        src=${image}
        alt="card image"
      />
    </div>
    <div class="card-body w-2/3 bg-white">
      <span class="font-bold uppercase text-blue-500">${brand}</span>
      
        <h3 class="mt-4 text-xl font-medium">${name}</h3>
 
      <div class="mb-5 text-xl space-y-2">
        <div class='grid grid-cols-12 gap-5 items-center'><i class="place-self-center fa-solid fa-mobile-screen-button text-sky-400"></i> <span class='col-span-11 text-base'>${displaySize}</span></div>
        <div class='grid grid-cols-12 gap-5 items-center'><i class="place-self-center fa-solid fa-microchip text-teal-600"></i> <span class='col-span-11 text-base'>${chipSet}</span></div>
        <div class='grid grid-cols-12 gap-5 items-center'><i class="place-self-center fa-solid fa-memory text-orange-300"></i> <span class='col-span-11 text-base'>${memory}</span></div>
        <div class='grid grid-cols-12 gap-5 items-center'><i class="place-self-center fa-solid fa-database text-cyan-700"></i><span class='col-span-11 text-base'>${storage}</span></div>
        
      </div>
      <p>by <span class="font-bold">${brand}</span>${
    releaseDate ? " , " + releaseDate : ""
  }</p>
    </div>
  </div>
</div>
    `;
  div.querySelector(".fa-xmark").addEventListener("click", (e) => {
    $("modal").innerHTML = "";
  });
  div.querySelector(".card").addEventListener("click", (e) => {
    e.stopPropagation();
  });
  $("modal").appendChild(div);
};
