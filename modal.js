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
  if (!name) {
    $("modal").innerText = "";
    $("modal").innerHTML = "Network Error";
    return;
  }
  const div = document.createElement("div");
  div.className = "w-screen h-screen bg-black fixed z-40 top-0 bg-opacity-20";
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
<div class= "card card-plain fixed z-40 w-1/2 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
  <div class="flex relative shadow-2xl rounded-lg overflow-hidden -space-x-2">
  <i class="fa-solid fa-xmark absolute h-10 w-10 grid place-content-center text-xl m-5 right-0 cursor-pointer bg-pink-100 text-pink-500 hover:bg-pink-200 rounded-full p-2 hover:scale-105"></i>
    <div class="w-1/3 bg-white flex items-center">
      <img
        class="w-full p-10  object-cover"
        src=${image}
        alt="card image"
      />
    </div>
    <div class="card-body w-2/3 bg-white">
      <span class="font-bold uppercase text-blue-500">${brand}</span>
   

     <ul
      class="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4"
      id="tabs-tab3"
      role="tablist"
    >
      <li class="nav-item" role="presentation">
        <a
          href="#main"
          class="nav-link w-full block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent active"
          id="tabs-home-tab3"
          data-bs-toggle="pill"
          data-bs-target="#main"
          role="tab"
          aria-controls="main"
          aria-selected="true"
          >main</a
        >
      </li>
      <li class="nav-item" role="presentation">
        <a
          href="#others"
          class="nav-link w-full block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent"
          id="tabs-profile-tab3"
          data-bs-toggle="pill"
          data-bs-target="#others"
          role="tab"
          aria-controls="others"
          aria-selected="false"
          >Others</a
        >
      </li>
    </ul>
    <div class="tab-content" id="tabs-tabContent3">
      <div
        class="tab-pane fade show active"
        id="main"
        role="tabpanel"
        aria-labelledby="tabs-home-tab3"
      >
             <h3 class="my-4 text-xl font-medium">${name}</h3>
 
      <div class="mb-5 text-xl space-y-2">
        <div class='grid grid-cols-12 gap-5 items-center'><i class="place-self-center fa-solid fa-mobile-screen-button text-sky-400"></i> <span class='col-span-11 text-sm'>${displaySize}</span></div>
        <div class='grid grid-cols-12 gap-5 items-center'><i class="place-self-center fa-solid fa-microchip text-teal-600"></i> <span class='col-span-11 text-sm'>${chipSet}</span></div>
        <div class='grid grid-cols-12 gap-5 items-center'><i class="place-self-center fa-solid fa-memory text-orange-300"></i> <span class='col-span-11 text-sm'>${memory}</span></div>
        <div class='grid grid-cols-12 gap-5 items-center'><i class="place-self-center fa-solid fa-database text-cyan-700"></i><span class='col-span-11 text-sm'>${storage}</span></div>
        
      </div>
      <p>by <span class="font-bold">${brand}</span>${
    releaseDate ? " , " + releaseDate : ""
  }</p>   </div>
      <div
        class="tab-pane fade"
        id="others"
        role="tabpanel"
        aria-labelledby="tabs-profile-tab3"
      >
       
      <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full text-sm">
         
          <tbody class='divide-y-[1px] space-y-4'>
            
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
      
    
      
    </div>
  </div>
</div>
    `;
  Object.keys(others).map((e, i) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `
        <th class='text-left pr-4'>${e}</th><td>${others[e]}</td>
    `;
    div.querySelector("table tbody").appendChild(tr);
  });
  div.querySelector(".fa-xmark").addEventListener("click", (e) => {
    $("modal").innerHTML = "";
  });
  div.querySelector(".card").addEventListener("click", (e) => {
    e.stopPropagation();
  });
  $("modal").appendChild(div);
};
