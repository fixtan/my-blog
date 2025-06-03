document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("article h2, article h3");
  const navLinks = document.querySelectorAll(".toc a");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinks.forEach((link) => {
            link.classList.toggle(
              "active",
              link.getAttribute("href") === `#${id}`
            );
          });
        }
      });
    },
    {
      rootMargin: "-30% 0px -60% 0px", // 視野の上下オフセット
      threshold: 0.1,
    }
  );

  sections.forEach((section) => observer.observe(section));
});
