const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");

yesButton.addEventListener("mouseenter", () => {
    moveButton();
});

function moveButton() {
    const buttonWidth = yesButton.offsetWidth;
    const buttonHeight = yesButton.offsetHeight;
    const maxWidth = window.innerWidth - buttonWidth;
    const maxHeight = window.innerHeight - buttonHeight;

    const randomX = Math.random() * maxWidth;
    const randomY = Math.random() * maxHeight;

    // Limit the button's Y-coordinate to stay within the viewport height
    const limitedY = Math.min(randomY, maxHeight);

    yesButton.style.left = `${randomX}px`;
    yesButton.style.top = `${limitedY}px`;

    yesButton.classList.add("moved");

    setTimeout(() => {
        yesButton.classList.remove("moved");
    }, 100); // Reset button position after 1 second
}

noButton.addEventListener("click", () => {
    alert("এই কালকে জীবনেও আসবে না ");
});