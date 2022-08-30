


$('#form-venda').submit(function validacao(){
    var campo = $('#campo-erro');
    var erro = $('.alert');
    var cnpj = $('#cnpj');
    var contato = $('#contato');
    var usuario = $('#usuario');
    var email = $('#email');
    var telefone = $('#telefone');
    var razaoSocial = $('#razaoSocial');
    var valor = $('#valor');
    

    erro.addClass('d-none');
    $('.is-invalid').removeClass('is-invalid');

    //Valida o pacote
    if(valor.val() == ''){
        campo.html('Selecione o pacote desejado');
        erro.removeClass('d-none');
        valor.focus(); 
        valor.addClass('is-invalid');
        return false;
    }

    //Valida o campo CNPJ
    if(cnpj.val() == ''){
        campo.html('Preencha o campo CNPJ');
        erro.removeClass('d-none');
        cnpj.focus(); 
        cnpj.addClass('is-invalid');
        return false;
    }

    //Valida o campo contato
    if(contato.val() == ''){
        campo.html('Preencha o campo contato');
        erro.removeClass('d-none');
        contato.focus(); 
        contato.addClass('is-invalid');
        return false;
    }

    //Valida o campo usuario
    if(usuario.val() == ''){
        campo.html('Preencha o campo usuario');
        erro.removeClass('d-none');
        usuario.focus(); 
        usuario.addClass('is-invalid');
        return false;
    }

    //Valida o campo email
    if(email.val() == ''){
        campo.html('Preencha o campo email');
        erro.removeClass('d-none');
        email.focus(); 
        email.addClass('is-invalid');
        return false;
    }

    //Valida o campo telefone
    if(telefone.val() == ''){
        campo.html('Preencha o campo telefone');
        erro.removeClass('d-none');
        telefone.focus(); 
        telefone.addClass('is-invalid');
        return false;
    }

    //Valida o campo razão social
    if(razaoSocial.val() == ''){
        campo.html('Preencha o campo razão social');
        erro.removeClass('d-none');
        razaoSocial.focus(); 
        razaoSocial.addClass('is-invalid');
        return false;
    }

    return true;
});



function preco20(){
    var mostrarValor = document.forms['formVenda']['valor'];
    mostrarValor.setAttribute('value', 'R$20,00');
    mostrarValor.setAttribute('type', 'text');
}


function preco25(){
    var mostrarValor = document.forms['formVenda']['valor'];
    mostrarValor.setAttribute('value', 'R$25,00');
    mostrarValor.setAttribute('type', 'text');
}


function preco30(){
    var mostrarValor = document.forms['formVenda']['valor'];
    mostrarValor.setAttribute('value', 'R$30,00');
    mostrarValor.setAttribute('type', 'text');
}

function preco35(){
    var mostrarValor = document.forms['formVenda']['valor'];
    mostrarValor.setAttribute('value', 'R$35,00');
    mostrarValor.setAttribute('type', 'text');
}

function preco40(){
    var mostrarValor = document.forms['formVenda']['valor'];
    mostrarValor.setAttribute('value', 'R$40,00');
    mostrarValor.setAttribute('type', 'text');
}