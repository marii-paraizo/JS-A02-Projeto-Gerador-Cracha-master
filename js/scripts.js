function validarDados() {
    // Obtendo os dados digitados pelo usuário
    let nome = frmRegistro.inNome.value;
    let telefone = frmRegistro.inFone.value;
    let email = frmRegistro.inMail.value;
    let cargo = frmRegistro.inCargo.value;
    let departamento = frmRegistro.inDepto.value;
    let imagem = frmRegistro.inImg.value;

    // Função para exibir mensagens e erro
    function mensagemErro(mensagem){
        // Variável para manipular div erro
        let mensagemErro = document.getElementById('mensagem-erro'); 
        mensagemErro.textContent = mensagem;
        mensagemErro.style.display = 'block'
    }

    if (nome.trim() == '' || nome.trim().length < 5){
        mensagemErro('O campo "Nome" não pode estar vazio e deve conter pelo menos 5 caracteres');
        frmRegistro.inNome.focus();
        return false;
    }

    if (telefone.trim() == '' || telefone.trim().length < 5){
        mensagemErro('O campo "Telefone" não pode estar vazio e deve conter pelo menos 5 caracteres');
        frmRegistro.inFone.focus();
        return false;
    }

    if (email.trim() == '' || email.trim().length < 5){
        mensagemErro('O campo "E-mail" não pode estar vazio e deve conter pelo menos 5 caracteres');
        frmRegistro.inMail.focus();
        return false;
    }

    if (cargo.trim() == '' ){
        mensagemErro('O campo "Cargo" não pode estar vazio');
        frmRegistro.inCargo.focus();
        return false;
    }

    if (departamento.trim() == ''){
        mensagemErro('O campo "Departamento" não pode estar vazio');
        frmRegistro.inDepto.focus();
        return false;
    }
document.getElementById('spNome').innerText = nome;
document.getElementById('spCargo').innerText = cargo;
document.getElementById('spDepto').innerText = departamento;


const qrCodeContainer = document.getElementById('qrCode');
qrCodeContainer.style.display = 'block'; 


const qrCodeImg = qrCodeContainer.querySelector('img');
qrCodeImg.style.width = '150px'; 
qrCodeImg.style.height = 'auto'; 
}


document.getElementById('inImg').addEventListener('change', function() {
    let imagemInput = frmRegistro.inImg;
    let imagem = imagemInput.files[0];
    if (imagem) {
        let reader = new FileReader();
        reader.onload = function(e) {
            let imgElement = document.createElement('img');
            imgElement.src = e.target.result; 
            imgElement.alt = 'Foto do Funcionário';
            imgElement.style.width = '100px'; 
            imgElement.style.height = 'auto'; 
            imgElement.style.marginTop = '15px'; 
            document.getElementById('area-foto').innerHTML = ''; 
            document.getElementById('area-foto').appendChild(imgElement); 
        }
        reader.readAsDataURL(imagem);
    }
});








