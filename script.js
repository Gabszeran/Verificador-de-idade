function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var anoFormulario = document.querySelector('input#txtano')
    var resultado = document.querySelector('div#resultado')
    if (anoFormulario.value.length == 0 || Number(anoFormulario.value) > ano) {
        window.alert('[ERRO] Verifique os dados inseridos e tente novamente!')
    } else {
        var sexoFormulario = document.getElementsByName('radsex')
        var idade = ano - Number(anoFormulario.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (sexoFormulario[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/criancaMenino.png')
            } else if (idade > 10 && idade < 18) {
                //jovem
                img.setAttribute('src', 'imagens/jovemHomem.png')
            } else if (idade > 18 && idade < 60) {
                //adulto
                img.setAttribute('src', 'imagens/adulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idoso.png')
            }
        } else if (sexoFormulario[1].checked) {
                genero = 'Mulher'
             if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/criancaMenina.png')
            } else if (idade > 10 && idade < 18) {
                //jovem
                img.setAttribute('src', 'imagens/jovemMulher.png')
            } else if (idade > 18 && idade < 60) {
                //adulta
                img.setAttribute('src', 'imagens/adulta.png')
            } else {
                //idosa
                img.setAttribute('src', 'imagens/idosa.png')
            }
    }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        resultado.appendChild(img)
    }
}