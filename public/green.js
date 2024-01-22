//Navigation bar replication
const nav = document.querySelector(".navbar");
const navCode = `<a class="logo" href="../public/index.html"><img src="../public/Images/RealLogo.png" alt="Green Street"></a>
      <ul class="menu-links">
        <span id="close-menu-btn" class="material-symbols-outlined">close</span>
        <li><a href="../public/index.html">Home</a></li>
        <li><a href="../public/energy_solutions.html">Energy Solutions</a></li>
        <li><a href="../public/jC.html">Compare</a></li>
        <li><a href="../public/about.html">About us</a></li>
        <li><a href="../public/index.html#newsltr" id="navbtn2">SIGN UP FOR OUR NEWSLETTER!</a></li>
      </ul>
      <a href="../public/index.html#newsltr" id="navbtn">SIGN UP FOR OUR NEWSLETTER!</a>
      <span id="hamburger-btn" class="material-symbols-outlined">menu</span>`;
nav.innerHTML = navCode;

const header = document.querySelector("header");
const hamburgerBtn = document.querySelector("#hamburger-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");
const newsbtn = document.querySelector("#navbtn2");
// Toggle mobile menu on hamburger button click
hamburgerBtn.addEventListener("click", () =>
  header.classList.toggle("show-mobile-menu")
);
// Close mobile menu on close button click
closeMenuBtn.addEventListener("click", () => hamburgerBtn.click());

//Close mobile menu when newsletter button is clicked
newsbtn.addEventListener("click", () => hamburgerBtn.click());
