let numero = document.getElementById ('numero')
let select = document.getElementById ('lista')
let add = []
let soma = 0

function adicionar() {
    if (numero.value.length == 0 || numero.value < 1 || numero.value > 100) {
        alert ('Erro, verifique os dados e tente novamente')
    } else {
        if (add.includes(numero.value)) {
            alert ('Esse numero ja foi adicionado! Digite outro numero e tente novamente.')
        } else {
            let option = document.createElement ('option')
            select.appendChild (option)
            option.setAttribute ('value',`${numero.value}`)
            option.innerHTML = `Valor ${numero.value} adicionado.`
            add.push(numero.value)
            soma = Number(soma) + Number(numero.value)
        }
    }
}


function finalizar() {

    let total = add.length
    let pTotal = document.getElementById('p-total')
    let maior = Math.max(...add)
    let pMaior = document.getElementById('p-maior')
    let menor = Math.min(...add)
    let pMenor = document.getElementById('p-menor')
    let pSoma = document.getElementById('p-soma')
    let media = soma/total.toFixed(2)
    let pMedia = document.getElementById('p-media')

    pTotal.innerHTML = `Ao todo, temos ${total} números cadastrados.`
    pMaior.innerHTML = `O maior valor informado foi ${maior}.`
    pMenor.innerHTML = `O menor valor informado foi ${menor}.`
    pSoma.innerHTML = `Somando todos os valores, temos ${soma}.`
    pMedia.innerHTML = `A média dos valores digitados é ${media}.`
}