let card_top = document.querySelector('.card-top')


//FUNÇÕES
function select_item(elemento,evento){
    //Variaveis pra controle do estado "selecionado"
    let menu_item = elemento
    let item_currentSelected = document.querySelector(".content-menu_on")
    //Controlar estado "selecionado"
    if (evento == "selecionar"){
        item_currentSelected.classList.remove("content-menu_on")
        menu_item.classList.add("content-menu_on")
    }
    if(elemento.classList.contains("artistas")){
        var albums = document.querySelectorAll(".content-cards.album")
        var faixas = document.querySelectorAll(".content-cards.faixa")
        var artistas = document.querySelectorAll(".content-cards.artista")

        artistas.forEach(function(elemento){
            elemento.style.display = "block"
        })
        albums.forEach(function(elemento){
            elemento.style.display = "none"
        })
        faixas.forEach(function(elemento){
            elemento.style.display = "none"
        })
        
    } else if(elemento.classList.contains("albuns")){
        var albums = document.querySelectorAll(".content-cards.album")
        var faixas = document.querySelectorAll(".content-cards.faixa")
        var artistas = document.querySelectorAll(".content-cards.artista")

        artistas.forEach(function(elemento){
            elemento.style.display = "none"
        })
        albums.forEach(function(elemento){
            elemento.style.display = "block"
        })
        faixas.forEach(function(elemento){
            elemento.style.display = "none"
        })
    } else if(elemento.classList.contains("faixas")){
        var albums = document.querySelectorAll(".content-cards.album")
        var faixas = document.querySelectorAll(".content-cards.faixa")
        var artistas = document.querySelectorAll(".content-cards.artista")

        artistas.forEach(function(elemento){
            elemento.style.display = "none"
        })
        albums.forEach(function(elemento){
            elemento.style.display = "none"
        })
        faixas.forEach(function(elemento){
            elemento.style.display = "block"
        })
    } else if(elemento.classList.contains("all")){
        var all = document.querySelectorAll(".content-cards")

        all.forEach(function(elemento){
            elemento.style.display = "block"
        })
    }

}

function getStats(){
    var allArtistas = document.querySelectorAll('.artista')
    var allAlbuns = document.querySelectorAll('.album')
    var allFaixas = document.querySelectorAll('.faixa')
    var artistas = []
    var albuns = []
    var faixas = []

    //Guardar elementos
        // o parâmetro elemento é o que guarda cada <div>   
    allArtistas.forEach(function(elemento){
        artistas.push(elemento)
    })
    allAlbuns.forEach(function(elemento){
        albuns.push(elemento)
    })
    allFaixas.forEach(function(elemento){
        faixas.push(elemento)
    })

    //Iterar sobre cada element por tipo(artista,albun,faixa)
    artistas.forEach(function(elemento,index){
        elemento.style.background = `url(home/images/covers/artista-${index+1}.jpeg)`
        elemento.style.backgroundSize = 'contain'
        elemento.style.backgroundRepeat = 'no-repeat'
        //Configurar ID
        elemento.id = `artista-${index+1}`
        
    })
    albuns.forEach(function(elemento, index){
        elemento.style.background = `url(home/images/covers/album-${index+1}.jpeg)`
        elemento.style.backgroundSize = 'contain'
        elemento.style.backgroundRepeat = 'no-repeat'
        //Confiurar ID
        elemento.id = `album-${index+1}`
    })
    faixas.forEach(function(elemento,index){
        elemento.style.background = `url(home/images/covers/faixa-${index+1}.jpeg)`
        elemento.style.backgroundSize = 'contain'
        elemento.style.backgroundRepeat = 'no-repeat'
        //Configurar ID
        elemento.id = `faixa-${index+1}`
    })

}



//Event Listeners
document.addEventListener("DOMContentLoaded", function(){
    //Opçoes menu
    let menu_item = document.querySelector("#content-menu_recomendacoes")
    menu_item.classList.add("content-menu_on")
    getStats()
})