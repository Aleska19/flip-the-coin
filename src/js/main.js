const flipBtn = document.getElementById('flipBtn');
const coinImg = document.getElementById('coinImg');
const resultadoText = document.getElementById('resultado')




function lanzarMoneda  () {
    const isHeads = Math.random() < 0.5;
    const imagePath = isHeads ? './src/resources/heads.svg' : './src/resources/tails.svg';
    const resultado = isHeads ? 'Heads' : 'Tails';

    resultadoText.textContent =  resultado;
    coinImg.src = imagePath;



};
flipBtn.addEventListener('click', lanzarMoneda);
coinImg.addEventListener('click', lanzarMoneda);

