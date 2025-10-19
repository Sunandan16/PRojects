const dropdown = document.querySelector(".dropdown");
const selected = document.getElementById("dropdownSelected");
const items = document.querySelectorAll(".dropdown-item");

selected.addEventListener("click", () => {
  dropdown.classList.toggle("active");
});

items.forEach((item) => {
  item.addEventListener("click", () => {
    selected.firstChild.textContent = item.textContent;
    dropdown.classList.remove("active");
  });
});

document.addEventListener("click", (e) => {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove("active");
  }
});
