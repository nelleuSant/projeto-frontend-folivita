
const track = document.querySelector('.produtos-track');
const cards = document.querySelectorAll('.produto-card');

const prevButton = document.querySelector('.produto-prev');
const nextButton = document.querySelector('.produto-next');

let currentIndex = 0;

// Descobre quantos cards cabem na área visível
function getVisibleCards() {
    const cardWidth = cards[0].getBoundingClientRect().width;
    const gap = parseFloat(getComputedStyle(track).gap);

    const viewportWidth = track.parentElement.clientWidth;

    return Math.floor((viewportWidth + gap) / (cardWidth + gap));
}

// Atualiza a posição do carrossel
function updateCarousel() {
    const visibleCards = getVisibleCards();

    const maxIndex = Math.max(0, cards.length - visibleCards);

    // Impede avançar além do último produto
    currentIndex = Math.min(currentIndex, maxIndex);

    const offset = cards[currentIndex].offsetLeft - cards[0].offsetLeft;

    track.style.transform = `translateX(-${offset}px)`;

    // Atualiza os botões
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === maxIndex;
}

// Avança um produto
nextButton.addEventListener('click', () => {
    currentIndex++;
    updateCarousel();
});

// Volta um produto
prevButton.addEventListener('click', () => {
    currentIndex--;
    updateCarousel();
});

// Recalcula quando a tela muda de tamanho
window.addEventListener('resize', updateCarousel);

// Inicializa o carrossel
updateCarousel();
