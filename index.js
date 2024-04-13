let element = document.getElementById("one");
let svg = document.getElementById("searchIcon");
element.addEventListener("focusin", () => {
  element.style.border = "1px solid #60a5fa";
  svg.style.color = "#60a5fa";
});
element.addEventListener("focusout", () => {
  element.style.border = "1px solid black";
  svg.style.color = "grey";
});
let footer = document.getElementById("footer");
let header = document.getElementById("navbar");
let subHeader = document.getElementById("subHeader");
window.addEventListener("scroll", () => {
  if (
    Math.floor(window.scrollY) >= Math.floor(window.innerHeight * (10 / 100))
  ) {
    header.classList.remove("top-0");
    header.classList.add("customTop");
    footer.classList.add("opacity-35");
  } else {
    header.classList.remove("customTop");
    header.classList.add("top-0");
    footer.classList.remove("opacity-35");
  }
  //   console.log(
  //     Math.floor(window.scrollY),
  //     Math.floor(window.innerHeight * (8 / 100))
  //   );
});
let foryou = document.getElementById("foryou");
let following = document.getElementById("following");
foryou.addEventListener("click", () => {
  if (!foryou.classList.contains("underBlue")) {
    foryou.classList.add("underBlue");
    foryou.classList.remove("opacity-50");
  }
  following.classList.remove("underBlue");
  following.classList.add("opacity-50");
});
following.addEventListener("click", () => {
  if (!following.classList.contains("underBlue")) {
    following.classList.add("underBlue");
    foryou.classList.add("opacity-50");
  }
  foryou.classList.remove("underBlue");
  following.classList.remove("opacity-50");
});

let foryouNavbar = document.getElementById("foryouNavbar");
let followingNavbar = document.getElementById("followingNavbar");
foryouNavbar.addEventListener("click", () => {
  if (!foryouNavbar.classList.contains("underBlue")) {
    foryouNavbar.classList.add("underBlue");
    foryouNavbar.classList.remove("opacity-50");
  }
  followingNavbar.classList.remove("underBlue");
  followingNavbar.classList.add("opacity-50");
});
followingNavbar.addEventListener("click", () => {
  if (!followingNavbar.classList.contains("underBlue")) {
    followingNavbar.classList.add("underBlue");
    foryouNavbar.classList.add("opacity-50");
  }
  foryouNavbar.classList.remove("underBlue");
  followingNavbar.classList.remove("opacity-50");
});

let whatis = document.getElementById("whatis");
let hr = document.getElementById("hr");
let public = document.getElementById("public");
whatis.addEventListener("click", () => {
  if (document.activeElement.id == "whatis") {
    hr.classList.remove("hidden");
    public.classList.remove("hidden");
    public.classList.add("flex");
  }
});
document.addEventListener("click", () => {
  if (document.activeElement.id != "whatis") {
    hr.classList.add("hidden");
    public.classList.add("hidden");
    public.classList.remove("flex");
  }
});
let post = document.getElementById("post");
whatis.addEventListener("input", (e) => {
  if (e.target.value) {
    post.classList.remove("opacity-55");
  } else {
    post.classList.add("opacity-55");
  }
});

// let parentDiv = document.getElementsByClassName("hoverEffect");
// let hover = document.querySelectorAll(".hoverEffect>span");
// Array.from(parentDiv).forEach((item, index) => {
//   item.addEventListener("mouseover", () => {
//     hover[index].classList.add("bg-blue-300");
//   });
//   item.addEventListener('mouseout',()=>{
//     hover[index].classList.remove("bg-blue-300");
//   })
// });
