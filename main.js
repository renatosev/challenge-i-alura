function criptografar() {
    const inputText = document.getElementById('inputText');
    const mensagemDiv = document.getElementById('mensagem');
    const labelMsgDiv = document.querySelector('.label-msg');

    if (inputText.innerText.trim() !== '') {
        const textoOriginal = inputText.innerText.toLowerCase();
        const textoCriptografado = textoOriginal
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');

        mensagemDiv.innerText = textoCriptografado;
        labelMsgDiv.innerHTML = '';
    }
}

function descriptografar() {
    const inputText = document.getElementById('inputText');
    const mensagemDiv = document.getElementById('mensagem');
    const labelMsgDiv = document.querySelector('.label-msg');

    if (inputText.innerText.trim() !== '') {
        const textoCriptografado = inputText.innerText.toLowerCase();
        const textoDescriptografado = textoCriptografado
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');

        mensagemDiv.innerText = textoDescriptografado;
        labelMsgDiv.innerHTML = '';
    }
}

function copiarMensagem() {
    const mensagemDiv = document.getElementById('mensagem');
    const textarea = document.createElement('textarea');
    const msgCopiar = document.getElementById('msgCopiar');
    textarea.value = mensagemDiv.innerText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    msgCopiar.innerText = 'Copiado!'
    setTimeout(() => {
       msgCopiar.innerText = 'Copiar';
    }, 2000);
}
