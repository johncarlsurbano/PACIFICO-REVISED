// const searchInput = document.querySelector('input[type="text"]');
// searchInput.addEventListener('input', (event) => {
//   const searchTerm = event.target.value.toLowerCase();
//   // Do something with the search term, e.g., filter a list of items
// });

const nav = document.querySelector(".nav"),
searchIcon = document.querySelector("#searchIcon"),
navOpenBtn = document.querySelector(".navOpenBtn"),
navCloseBtn = document.querySelector(".navCloseBtn");

searchIcon.addEventListener("click", () => {
nav.classList.toggle("openSearch");
nav.classList.remove("openNav");
if (nav.classList.contains("openSearch")) {
  return searchIcon.classList.replace("uil-search", "uil-times");
}
searchIcon.classList.replace("uil-times", "uil-search");
});

navOpenBtn.addEventListener("click", () => {
nav.classList.add("openNav");
nav.classList.remove("openSearch");
searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
nav.classList.remove("openNav");
});