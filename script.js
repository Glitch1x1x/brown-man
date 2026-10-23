const factButtons = document.querySelectorAll(".fact-button");

factButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const fact = document.getElementById(button.getAttribute("aria-controls"));
        const isExpanded = button.getAttribute("aria-expanded") === "true";

        fact.hidden = isExpanded;
        button.setAttribute("aria-expanded", String(!isExpanded));
        button.innerHTML = isExpanded
            ? 'Show a fun fact <span aria-hidden="true">+</span>'
            : 'Hide the fun fact <span aria-hidden="true">−</span>';
    });
});
