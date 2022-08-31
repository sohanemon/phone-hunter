const toggleModal = () => {
  const div = document.createElement("div");
  div.className =
    "card card-plain fixed z-50 w-3/4 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2";
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
  <div class="flex shadow-2xl rounded-lg overflow-hidden">
    <div class="w-1/3">
      <img
        class=""
        src="https://images.unsplash.com/photo-1536704689578-8fff53d4dfd7?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987"
        alt="card image"
      />
    </div>
    <div class="card-body w-2/3 bg-white">
      <span class="font-bold uppercase text-blue-500">Startups</span>
      <a href="#">
        <h3 class="mt-4">Lyft launching cross-platform service this week</h3>
      </a>
      <p class="mb-5 opacity-80">
        Like so many organizations these days, Autodesk is a company in
        transition. It was until recently a traditional boxed software company
        selling licenses. Yet its own business model disruption is only part of
        the story — and{" "} <a href="#">Read More</a>.
      </p>
      <p>by <span class="font-bold">Megan Rose</span>, 2 days ago</p>
    </div>
  </div>
    `;
  div.addEventListener("click", (e) => {
    e.stopPropagation();
  });
  $("modal").appendChild(div);
};
