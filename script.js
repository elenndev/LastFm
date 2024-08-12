//VARIAVEIS
    var docWidth = document.documentElement.offsetWidth
    const menuPerfil = document.querySelector('#menu-perfil')
    const menuFaixaPrincipal = document.querySelector('#menu-faixa-principal')
    const subMenuAberto = document.querySelector('#sub-menu-aberto')
    const submenuVisaoGeral = document.querySelector("#visao-geral")
    const submenuRelatorios = document.querySelector("#relatorios")
    const body = document.querySelector('body')   
    const table = document.querySelector('#table')
    let tds = document.querySelectorAll('td')
    let tdsSpan = document.querySelectorAll('.td-barScrobbles')
    let quantScrobbles = []
    let barraScrobbles = tdsSpan.textContent
    let span_maiorQuantScrobbles = null
    let maiorQuantScrobbles = 0
    let larguraMaiorBarra = 150
    var var_elemento =


    
    console.log(tds.length, tdsSpan.length)

//FUNÇÕES
function showSubmenu(elemento,menu){
/*No html quando chamamos a função lançamos 2 parametros (this,'mostrar menu'), Agora no js o que fizemos foi criar 2 variaveis pra receber esses 2 parâmetros respectivamente(elemento,menu)*/
console.log("showSubmenu on")
var divArea = elemento.parentNode
console.log(divArea)
var_elemento = elemento
var submenu = divArea.querySelector('div')

    if (menu == 'mostrar menu'){
        submenu.style.display = 'flex'
            console.log("mudar o display")
            document.addEventListener('click',function clicarFora(event){
                var clickOnElement = elemento.contains(event.target)
        
                    if (!clickOnElement){
                        console.log("clicou fora da div")
                        /*No HTML passamos o this como parâmetro, agora no js quando declaramos a funcao criamos a variavel elemento para receber esse parametro*/
                            var divArea = elemento.parentNode
                            var submenu = divArea.querySelector('div')
                            submenu.style.display = 'none'


                        //Retirar o eventListener da pagina
                        document.removeEventListener('click',clicarFora)
                    }
            })
        menu = 'ocultar menu'
    }


}


//Guardar a quantidade de scrobbles por faixa e qual a maior
tdsSpan.forEach(SPAN => {
    let valor = parseInt(SPAN.textContent.trim())
    quantScrobbles.push({valor , SPAN})
    let barra = 150 / maiorQuantScrobbles * valor
    SPAN.style.width = `${barra}px`

    console.log(`o resultado é ${barra}`)
    console.log(`barra ${barra}`)

    if (valor > maiorQuantScrobbles){
        maiorQuantScrobbles = valor
        span_maiorQuantScrobbles = SPAN
    }
})

configurarBarraScrobbles()
console.log(quantScrobbles,maiorQuantScrobbles,span_maiorQuantScrobbles)
console.log(quantScrobbles)

//Configura a barra da qt. de scrobbles
function configurarBarraScrobbles(){
    larguraMaiorBarra = getComputedStyle(span_maiorQuantScrobbles).width
    console.log(larguraMaiorBarra)   
}

