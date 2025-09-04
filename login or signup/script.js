document.addEventListener("DOMContentLoaded", () => {
  const page = document.querySelector(".page-transition");

  setTimeout(() => {
    page.classList.add("show");
  }, 50);

  document.querySelectorAll("a, .btn, .btn-link").forEach(link => {
    link.addEventListener("click", function(e) {
      const href = this.getAttribute("href") || this.dataset.href;
      if (href && href.includes(".html")) {
        e.preventDefault();


        page.classList.remove("show");
        page.classList.add("page-leave");

        setTimeout(() => {
          window.location.href = href;
        }, 400); 
      }
    });
  });
});
