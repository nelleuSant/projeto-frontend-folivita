
// Dependências externas
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Estilos personalizados
import '../css/style.css';


// Carrossel de Produtos - FOLIVITA

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

// Formulário de Contato - FOLIVITA

// 1. Selecionando os elementos HTML

const formulario = document.querySelector('#form-contato');

const campoNome = document.querySelector('#nome');
const campoEmail = document.querySelector('#email');
const campoMensagem = document.querySelector('#mensagem');

const contador = document.querySelector('#contador-caracteres');
const feedback = document.querySelector('#feedback-formulario');


// 2. Função para exibir mensagens de erro

function mostrarErro(campo, mensagem) {

    campo.style.borderColor = '#c0392b';

    // Procura se já existe uma mensagem de erro
    let erro = campo.parentElement.querySelector('.mensagem-erro');

    // Se não existir, cria um elemento
    if (!erro) {
        erro = document.createElement('small');
        erro.classList.add('mensagem-erro');
        campo.parentElement.appendChild(erro);
    }

    erro.textContent = mensagem;
}


// 3. Função para limpar erros

function limparErro(campo) {

    campo.style.borderColor = '';

    const erro = campo.parentElement.querySelector('.mensagem-erro');

    if (erro) {
        erro.remove();
    }
}


// 4. Função para validar o formulário

function validarFormulario() {

    let formularioValido = true;

    // Validar nome
    if (campoNome.value.trim().length < 3) {

        mostrarErro(campoNome, 'Informe seu nome completo.');

        formularioValido = false;

    } else {

        limparErro(campoNome);
    }


    // Validar e-mail
    const email = campoEmail.value.trim();

    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formatoEmail.test(email)) {

        mostrarErro(campoEmail, 'Informe um e-mail válido.');

        formularioValido = false;

    } else {

        limparErro(campoEmail);
    }


    // Validar mensagem
    if (campoMensagem.value.trim().length < 10) {

        mostrarErro(campoMensagem, 'A mensagem precisa ter pelo menos 10 caracteres.');

        formularioValido = false;

    } else {

        limparErro(campoMensagem);
    }

    return formularioValido;
}


// 5. Contador de caracteres

campoMensagem.addEventListener('input', function() {

    const quantidade = campoMensagem.value.length;

    contador.textContent = `${quantidade}/300 caracteres`;

});


// 6. Evento de envio do formulário

formulario.addEventListener('submit', function(event) {

    // Impede o recarregamento da página
    event.preventDefault();

    // Executa a validação
    const valido = validarFormulario();

    if (valido) {

        feedback.textContent = 'Sua mensagem foi validada com sucesso!';

        feedback.style.color = '#203B30';

        // Limpa os campos
        formulario.reset();

        // Reinicia o contador
        contador.textContent = '0/300 caracteres';

    } else {

        feedback.textContent = 'Verifique os campos destacados antes de continuar.';

        feedback.style.color = '#c0392b';
    }

});