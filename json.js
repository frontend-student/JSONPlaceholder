let changebtn = document.querySelector("#changebtn");
let imgs = document.querySelector("#imgs");
let pcong = document.querySelector("#pcong");
check = 0;
changebtn.addEventListener("click", () => {
  if (check == 0) {
    imgs.className = "visible";
    // imgs.style.visibility="visible";
    changebtn.textContent = "Stop script";
    pcong.className = "visible";
    check = 1;
  } else {
    imgs.className = "hidden";
    changebtn.textContent = "Run script";
    pcong.className = "hidden";
    // imgs.style.visibility="hidden";
    check = 0;
  }
});

gsap.from(".gsap", {
  opacity: 0,
  y: -100,
  ease: "power2.out",
  duration: 1.5,
});
