window.addEventListener("load", () => {
  const loader = document.querySelector(".loader")

  loader.classList.add('loader_hidden');

  loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader)
  })
})

// Active side bar for each page
let page = document.querySelectorAll("#line a");
let path = window.location.pathname;
// let pagetext = document.querySelector(".menuText")
page.forEach(link => {
  if (link.href.includes(path)) {
    // Found a matching link, add the "active" class
    link.classList.add("active");
    console.log(link)
  }
});
// pagetext.forEach(link => {
//   if (link.href.includes(path)) {
//     // Found a matching link, add the "active2" class
//     link.classList.add("active2");
//     console.log(path)
//   }
// });


let navControl = document.querySelector("#navControl");
let sideBar = document.querySelector(".sidebar")

navControl.onClick = function() {
  sideBar.classList.toggle("active");
}
