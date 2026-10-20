
function openGift() {
    const message = document.getElementById("giftMessage");
    const button = document.getElementById("giftButton");

    message.classList.remove("hidden");
    button.textContent = "💖 Mẹ là món quà quý giá nhất!";
    button.disabled = true;
}

// Tao hoa hong va trai tim roi
const flowerArea = document.getElementById("flowers");
const flowers = ["🌹", "🌸", "💗", "💕", "🌷"];

function createFlower() {
    if (!flowerArea) return;

    const flower = document.createElement("span");
    flower.className = "floating-flower";
    flower.textContent =
        flowers[Math.floor(Math.random() * flowers.length)];

    flower.style.left = Math.random() * 100 + "%";
    flower.style.fontSize = (18 + Math.random() * 18) + "px";
    flower.style.animationDuration = (5 + Math.random() * 5) + "s";

    flowerArea.appendChild(flower);

    setTimeout(() => {
        flower.remove();
    }, 10000);
}

if (flowerArea) {
    setInterval(createFlower, 500);
}
