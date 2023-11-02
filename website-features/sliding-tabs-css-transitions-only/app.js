import data from "./data.js";
import data1 from "./data1.js";
const container = document.querySelector(".slide-container");
const container1 = document.querySelector(".slide-container1");
const nextBtn = document.querySelector(".next-btn");
const nextBtn1 = document.querySelector(".next-btn1");
const prevBtn = document.querySelector(".prev-btn");
const prevBtn1 = document.querySelector(".prev-btn1");
// if length is 1 hide buttons
if (data.length === 1) {
  nextBtn.style.display = "none";
  prevBtn.style.display = "none";
}
if (data1.length === 1) {
  nextBtn1.style.display = "none";
  prevBtn1.style.display = "none";
}
// if length is 2, add copies of slides
let people = [...data];
if (data.length === 2) {
  people = [...data, ...data];
}
let waifus = [...data1];
if (data1.length === 2) {
  waifus = [...data1, ...data1];
}
container.innerHTML = people
  .map((person, slideIndex) => {
    const { img, name, job, text } = person;
    let position = "next";
    if (slideIndex === 0) {
      position = "active";
    }
    if (slideIndex === people.length - 1) {
      position = "last";
    }
    if (data.length <= 1) {
      position = "active";
    }
    return `<article class="slide ${position}">  
<img src=${img} class="img" alt="${name}"/>  
<h4>${name}</h4>  
<p class="title">${job}</p>  
<p class="text">  
 ${text}  
</p>  
</article>`;
  })
  .join("");

container1.innerHTML = waifus
  .map((person, slideIndex) => {
    const { img, name, job, text } = person;
    let position = "next1";
    if (slideIndex === 0) {
      position = "active1";
    }
    if (slideIndex === people.length - 1) {
      position = "last1";
    }
    if (data.length <= 1) {
      position = "active1";
    }
    return `<article class="slide1 ${position}">  
<img src=${img} class="img" alt="${name}"/>  
<h4>${name}</h4>  
<p class="title">${job}</p>  
<p class="text">  
 ${text}  
</p>  
</article>`;
  })
  .join("");

const startSlider = (type) => {
  // get all three slides active,last next
  const active = document.querySelector(".active");
  const last = document.querySelector(".last");
  let next = active.nextElementSibling;
  if (!next) {
    next = container.firstElementChild;
  }
  active.classList.remove(["active"]);
  last.classList.remove(["last"]);
  next.classList.remove(["next"]);
  if (type === "prev") {
    active.classList.add("next");
    last.classList.add("active");
    next.classList.add("last");
    next = last.previousElementSibling;
    if (!next) {
      next = container.lastElementChild;
    }
    next.classList.remove(["next"]);
    next.classList.add("last");
    return;
  }
  active.classList.add("last");
  last.classList.add("next");
  next.classList.add("active");
};

const startSlider1 = (type) => {
  // get all three slides active,last next
  const active = document.querySelector(".active1");
  const last = document.querySelector(".last1");
  let next = active.nextElementSibling;
  if (!next) {
    next = container1.firstElementChild;
  }
  active.classList.remove(["active1"]);
  last.classList.remove(["last1"]);
  next.classList.remove(["next1"]);
  if (type === "prev1") {
    active.classList.add("next1");
    last.classList.add("active1");
    next.classList.add("last1");
    next = last.previousElementSibling;
    if (!next) {
      next = container.lastElementChild;
    }
    next.classList.remove(["next1"]);
    next.classList.add("active1");
    return;
  }
  active.classList.add("last1");
  last.classList.add("next1");
  next.classList.add("active1");
};

nextBtn.addEventListener("click", () => {
  startSlider();
});

prevBtn.addEventListener("click", () => {
  startSlider("prev");
});

nextBtn1.addEventListener("click", () => {
  startSlider1();
});

prevBtn1.addEventListener("click", () => {
  startSlider1("prev1");
});
