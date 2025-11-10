const seeWorkBtn = document.getElementById("see-work");
const aboutSection = document.getElementById("about");

seeWorkBtn.addEventListener("click", () => {
    aboutSection.scrollIntoView({ behavior: "smooth" });
});
