const toggleButton = document.getElementById("toggleButton");
const hiddenCards = document.querySelectorAll(".skill-card.hidden");
let isExpanded = false;

toggleButton.addEventListener("click", () => {
    if (!isExpanded) {
        hiddenCards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add("fade-in");
            }, index * 100); // jeda animasi biar berurutan
        });
    } else {
        hiddenCards.forEach(card => {
            card.classList.remove("fade-in");
            card.style.display = "none";
        });
    }
    isExpanded = !isExpanded;
    toggleButton.textContent = isExpanded ? "△ Show Less" : "▽ Show More";
});
