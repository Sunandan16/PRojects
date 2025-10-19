let faq = document.querySelectorAll(".arrow");
let faqContent = document.querySelectorAll(".faq-answer");
faq.forEach((arrow) => {
  arrow.addEventListener("click", (e) => {
    const id = `#${e.target.id}`;
    document.querySelector(id).closest(".faq-item").classList.toggle("active");
  });
});
