const link = document.getElementsByClassName("link");

function addActive() {
  const isActive = this.classList.contains("active");
  if (!isActive) {
    for (let i = 0; i < link.length; i++) {
      link[i].classList.remove("active");
    }
    this.classList.add("active");
  } else if (isActive) {
    return;
  }
}

for (let i = 0; i < link.length; i++) {
  link[i].addEventListener("click", addActive);
}
