const robo = document.querySelector('.robo')
robo.addEventListener('click', ()=>{
    alert('Hello!')
})
/*array dos botões de adicionar e remover peças */
const controle = document.querySelectorAll('[data-controle]')
/*array das tags <p> com as estatísticas */
const estatisticas = document.querySelectorAll('[data-estatistica]')
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}


/*controlePai é o elemento pai do botão clicado */
function manipulaDados(operacao, controlePai){ 
    const peca = controlePai.querySelector('.controle-contador');
    if(operacao === "-"){
        peca.value = parseInt(peca.value) - 1;
    }else{
        peca.value = parseInt(peca.value) + 1;
    }
}

/*função que muda as estatísticas */
function atualizaEstatistica(peca) {
    console.log(pecas[peca])
    estatisticas.forEach((element) => {
        console.log(element.dataset.estatistica)
        element.textContent = parseInt(element.textContent) + pecas[peca][element.dataset.estatistica]
    })
}

/*laço que passa por cada botão da array e adiciona um escutador de evento de click */
controle.forEach( (element) => {
    element.addEventListener("click", (event)=>{ 
        manipulaDados(event.target.dataset.controle, event.target.parentNode)
        atualizaEstatistica(event.target.dataset.peca)
        
    })
})


