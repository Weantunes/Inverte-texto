function active() {
    const input = document.querySelector('#input');
    const conteudo = input.value;

    const resultado = conteudo.split('').reverse().join('');
    document.querySelector('#result').value = resultado;
    
}

function copiar() {
    var textoCopiado = document.querySelector("#input");
    const texto = textoCopiado.value;
    texto.toLowerCase();
    navigator.clipboard.writeText(texto)
        .then(() => {
            document.querySelector("#alert").innerHTML = '<p class="sucesso">TEXTO COPIADO COM SUCESSO!</p>'
        })
        .catch((erro) => {
            document.querySelector("#alert").innerHTML = '<p class="erro">ERRO AO COPIAR O TEXTO</p>'
        });
}