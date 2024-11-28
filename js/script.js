let index = 0;

function moverSlide(direction) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    
    // Atualiza o índice de acordo com a direção (anterior ou próximo)
    index += direction;

    // Garantir que o índice fique dentro dos limites do carrossel (loop)
    if (index < 0) index = totalSlides - 1;  // Se for menor que 0, vai para o último slide
    if (index >= totalSlides) index = 0;     // Se for maior que o total, vai para o primeiro slide

    // Mover o carrossel com a altura de cada slide (número de pixels)
    const alturaSlide = document.querySelector('.slide').clientHeight;
    slides.style.transform = `translateY(-${index * alturaSlide}px)`;  // Move os slides verticalmente
}
