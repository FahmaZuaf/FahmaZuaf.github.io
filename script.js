const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesButton = document.querySelector(".yes-button");
const noButton = document.querySelector(".no-button");

yesButton.addEventListener("click", () => {
    question.innerHTML = "Aaaaaaa, i like you too";
    gif.src =
    "https://raw.githubusercontent.com/DzarelDeveloper/img/main/gifyou.webp";
});

noButton.addEventListener("mouseover",() => {
    const noButtonRect = noButton.getBoundingClientRect();
    const maxX = window.innerWidth - noButtonRect.width;
    const maxY = window.innerHeight - noButtonRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
});