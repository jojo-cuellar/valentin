const messages = [
    "¿Estás segura?",
    "¿De verdad?",
    "¿Estás segurísima?",
    "Amorcito, por favor...",
    "¡Piénsalo bien!",
    "Si dices que no, me voy a poner muy triste...",
    "Estaré muy triste...",
    "Estaré muy, pero muy triste...",
    "Bueno, ya dejo de preguntar...",
    "Es broma, ¡dime que sí, porfi! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}