function calcular() {
    var raio = parseFloat(document.querySelector('input#raio').value);
    var para = document.querySelector('p#respostas');

    if (isNaN(raio) || raio <= 0) {
        para.innerHTML = `<p style="color: red;">Por favor, insira um valor válido para o raio.</p>`;
        return;
    }

    var comprimento = 2 * Math.PI * raio;
    para.innerHTML = `<p><strong>Comprimento:</strong> ${comprimento.toFixed(2)} cm</p>`;

    var area = Math.PI * Math.pow(raio, 2);
    para.innerHTML += `<p><strong>Área:</strong> ${area.toFixed(2)} cm<sup>2</sup></p>`;

    var vol = (4 / 3) * Math.PI * Math.pow(raio, 3);
    para.innerHTML += `<p><strong>Volume:</strong> ${vol.toFixed(2)} cm<sup>3</sup></p>`;
}