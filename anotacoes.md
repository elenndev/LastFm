## Tabela
    - Link sobre personalização de tabelas:[mdn docs](https://developer.mozilla.org/pt-BR/docs/Learn/HTML/Tables/Basics#provendo_estilos_comuns_para_colunas)
### Estrutura
```html
    <table> 
        <colgroup> 
            <col>
            <col>
        </colgroup>

        <tr>
            <th>cabecalho coluna 1</th>
            <th>cabeçalho coluna 2</th>
        </tr>

        <tr>
            <td>celula(data) da coluna 1</td>
            <td>celula(data) da coluna 2</td>
        </tr>

        <tr>
            <td>celula(data) da coluna 1</td>
            <td>celula(data) da coluna 2</td>
    </table>
```
Criamos a tabela com a tag <table>, adicionamos logo em seguida o <colgroup> (explicado em ###personalização), agora criamos um <tr> o seja uma linha na tabela (table row), nesse caso a primeira linha será a linha de cabeçalho das colunas <th> (table header)
Em seguida na proximas linhas <td>, adicionamos o <td> que é finalmente o conteudo de uma celula, como criamos 2 colunas inicialmente com o <th>, nesse exemplo temos 2 <td> em cada linha <tr>.
    
### Personalização
#### <COLGROUP> </COLGROUP>
    a TAG <colgroup> (Table Column Group Element), ou seja "grupo de colunas da tabela" é usada para atribuir propriedades e formatações que serão herdadas pelas colunas que fazem parte do determinado grupo. Para fazer essas atribuições, dentro de <colgroup> usamos a tag <col>.
    Por exemplo, imagine que temos uma tabela com 3 colunas
        <1.nome do alimento - 2.tipo do alimento - 3.valor do alimento>
        se usamos a seguinte estrutura:
```html
    <colgroup>
        <col style="background: yellow;">
    </colgroup>
```
    Dessa forma, a primeira coluna, tera um fundo amarelo, e as outras 2 continuaram com sua formatação normal. Agora se usarmos o atributo "span":
```html
    <colgroup>
        <col span="2" style="background: yellow;">
    </colgroup>
```
    O atributo "span" especifica a quantas colunas a declaração de estilo desse <col> vai se aplicar, nesse caso, 2 colunas, loo a coluna 1 e 2 terão o fundo amarelo e a 3 continuara com sua formatação normal. Já se usarmos:
```html
    <colgroup>
        <col span="2" style="background: yellow;">
        <col style="background: red;">
    </colgroup>
```  
    Nesse caso, veja bem, nesse exemplo temos 3 colunas. Logo, das 3 colunas, as 2 terão fundo de cor amarela, como definida no primeiro <col> com span=2, sendo assim a 3 coluna tera o fundo vermelho.

```css
    table{
    align-items: center;
    .table-trackInfo{
        line-height: 10px
    }
    .table-trackInfo>p{
        margin: 0px;
    }
    
}
```
### Lógica
#### FAIXAS PRINCIPAIS
##### Guardar a qt. de scrobbles de cada faixa e verificar qual a faixa com mais scrobbles
Para isso primeiro precisamos linkar no Javascript, os elementos que guardam os valores, no caso no HTML está assim:
```html
    <td class="td-scrobbles">
        <span class="td-barScrobbles">10</span>
    </td>
```
E preisamos pegar esse span, então:
```javascript
    let tdsSpan = document.querySelectorAll('.td-barScrobbles')
```

Agora, na tabela cada faixa é uma linha que possui um <td> com um <span> que guarda o valor que queremos usar, já temos aqui no Js esses Spans, agora como guardar o valor deles?
E claro devemos lembrar também que ***Todo valor recebido pelo Javascript, por padrão será lido como String***, portanto é essencial que nesse processo de receber e guardar esses valores, eles sejam guardados já convertidos pra números.
Sendo assim estamos fazendo 3 coisas na iteração: 
1º Guardar o valor de cada <span> e o próprio <span> dentro de uma array
2º Converter esses valores
3º Separando o maior valor, e o <span> que tem esse valor em uma VAR separada

Eis o código e depois explico linha por linha:
```javascript
    let quantScrobbles = []
    let maiorQuantScrobbles = 0
    let span_maiorQuantScrobbles = null

    tdsSpan.forEach(SPAN => {
    let valor = parseInt(tdsSpan.textContent.trim())
    quantScrobbles.push({valor , SPAN})

    if (valor > maiorQuantScrobbles){
        maiorQuantScrobbles = valor
        span_maiorQuantScrobbles = SPAN
    }
    })
```
Primeiramente
```javascript
    let quantScrobbles = []
    let maiorQuantScrobbles = 0
    let span_maiorQuantScrobbles = null

    //Linha 1 - guardar e converter valores
    tdsSpan.forEach(SPAN => {

    })
```
Aqui iniciamos um loop usando o forEach para iterar sobre cada elemento <span> que guardamos na var tdsSpan. O elemento pai que sera iterado e o tdsSpan, assim com o (SPAN =>) esse SPAN é o parâmetro da função anonima criada pelo `=>`, usamos o => para criar uma função anônima que nesse caso vai ser executada para cada elemento no array tdsSpans durante a iteraçao do forEach.
Ou seja podemos ler essa linh tambem tipo assim:
    itere a var tdsSpan usando o forEach, `tdsSpan.forEach()` 
    pra cada elemento da array iterado execute a função anonima, e em cada iteração do loop terá um novo valor para o parâmetro *SPAN*, representando o elemento <span> atual durante essa iteração.
Veja bem, se temos um elemento que guarda varios <span>, nesse caso é o `tdsSpan`, se vamos iterar esse elemento, e pra ele passamos um parâmetro, dessa maneira, a cada iteração do loop, o nosso parâmetro *SPAN* vai ta guardando o elemento que está sendo iterado naquele momento, nesse caso aqui, é a span.


Seguindo:
```javascript
    let quantScrobbles = []
    let maiorQuantScrobbles = 0
    let span_maiorQuantScrobbles = null

    tdsSpan.forEach(SPAN => {

        //Linha 2 - guardar e converter valores
        let valor = parseInt(tdsSpan.textContent.trim())
    
    })
```
aqui criamos uma var para guardar o valor convertido em número, usamos o `parseInt(tds.Span.textContent.trim())` para extrair o texto contido dentro do elemento, 
o que faz especificamente isso de extrair o texto, é o `.textContent`
com o `.trim()` removemos os espaços em branco do fim e do final de uma string.
com o `parseInt()` convertemos o resultado para um número inteiro
Ou seja de for ler de uma vez a linha podemos dizer:
`valor` receba o *Número inteiro* do `text.Content` da var `tdsSpan`

Em seguida:
```javascript
    let quantScrobbles = []
    let maiorQuantScrobbles = 0
    let span_maiorQuantScrobbles = null

    tdsSpan.forEach(SPAN => {
        let valor = parseInt(tdsSpan.textContent.trim())

        //Linha 3 - guardar e converter valores
        quantScrobbles.push({valor , SPAN})

    })
```
Com o `push` adicionamos na array `quantScrobbles`, o objeto contendo um valor (no caso o número de scrobles) e uma propriedade (nesse caso o <span>), por isso usamos as chaves, pois estamos adicionando tambem propriedades nessa array.

Continuando
```javascript
    let quantScrobbles = []
    let maiorQuantScrobbles = 0
    let span_maiorQuantScrobbles = null

    tdsSpan.forEach(SPAN => {
        let valor = parseInt(tdsSpan.textContent.trim())
        quantScrobbles.push({valor , SPAN})
    //Linha 4 e 5 - separar valor maior
    if (valor > maiorQuantScrobbles){
        maiorQuantScrobbles = valor
        span_maiorQuantScrobbles = SPAN
    }
    })
```
Aqui usamos uma condicional, verficamos se o valor atual for maior que a var `maiorQuantScrobbles`, se sim, então esse valor vai ser atribuido a var `maiorQuantScrobbles` e a SPAN em questão será atribuida a var `span_maiorQuantScrobbles`, que usaremos mais pra frente novamente.


Para fixar isso, executando os seguinte consoles log no final de tudo acima,:
```javascript
    console.log(quantScrobbles)
```

No console, o resultado será basicamente:
0: {valor: 25, SPAN: span.td-barScrobbles}
1: {valor: 10, SPAN: span.td-barScrobbles}
length: 2

*Lembrando que no momento que estou estudando isso, até entao só tendo 2 spans, pra 2 faixas*
Organizando pra melhor, etendimento:
depois de tudo isso, na array `span_maiorQuantScrobbles` temos, 2 coisas guardadas, por isso no console log ali temos o `length: 2`
essas 2 coisas sao:
No index [0] da array, temos o `valor: 25` e `SPAN: span.td-barScrobles`
No index [1] da array, temos o `valor: 10` e `SPAN: span.td-barScrobles`
lembrando que esse *valor* é o valor inteiro do textContet da var `tdsSpan` lembra? Ela aparece no trecho:
```javascript
    let valor = parseInt(tdsSpan.textContent.trim())
```
ou seja, valor é tanto o nome da propriedade quanto o nome da variavel, e o valor da propriedade `valor`, no index [0] é 25 e no index [1] é 10.
E o *SPAN* , pois por mais que criamos o *SPAN* como um parâmetro, devo lembrar que um parâmetro pode ser usado como uma *variável auxiliar*. E como ja foi explicado acima, o que o *SPAN* guarda é literalmente o próprio elemento HTML que está sendo iterado no momento, sendo assim, a cada vez que ocorreu uma iteração no loop, o elemento iterado foi registrado no seu index junto com seu devido valor.
## Novos conceitos, funções aprendidos
### Iterar
Iterar é percorrer/repetir um conjunto de elementos em uma sequência. E quando estamos falando de loops, iterar é atravessar cada elementod e uma array para realizar algo em cada elemento.
### Função trim()
O método trim() é uma função utilizada para remover espaçoes em banco do inicio e do final de uma string, lembrando que não afeta o espaço entre as palarvas de uma string, e sim os das extremidades.
### Adicionra valores e propriedades a arrays
```javascript
    quantScrobbles.push({valor , SPAN})
```

# SVGs
- Estrela
  <svg fill="#000000" height="64px" width="64px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 473.486 473.486" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <polygon points="473.486,182.079 310.615,157.952 235.904,11.23 162.628,158.675 0,184.389 117.584,299.641 91.786,462.257 237.732,386.042 384.416,460.829 357.032,298.473 "></polygon> </g></svg>

- Album
  <svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" width="64px" height="64px" viewBox="0 0 30 30" version="1.1" id="svg822" inkscape:version="0.92.4 (f8dce91, 2019-08-02)" sodipodi:docname="album.svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <defs id="defs816"> <inkscape:path-effect only_selected="false" apply_with_weight="true" apply_no_weight="true" helper_size="0" steps="2" weight="33.333333" is_visible="true" id="path-effect1025" effect="bspline"></inkscape:path-effect> <inkscape:path-effect only_selected="false" apply_with_weight="true" apply_no_weight="true" helper_size="0" steps="2" weight="33.333333" is_visible="true" id="path-effect1021" effect="bspline"></inkscape:path-effect> </defs> <sodipodi:namedview id="base" pagecolor="#ffffff" bordercolor="#666666" borderopacity="1.0" inkscape:pageopacity="0.0" inkscape:pageshadow="2" inkscape:zoom="11.313709" inkscape:cx="3.6074335" inkscape:cy="12.537646" inkscape:document-units="px" inkscape:current-layer="layer1" showgrid="true" units="px" inkscape:window-width="1366" inkscape:window-height="713" inkscape:window-x="0" inkscape:window-y="0" inkscape:window-maximized="1" showguides="false" inkscape:guide-bbox="true"> <sodipodi:guide position="21.126168,22.794393" orientation="1,0" id="guide1575" inkscape:locked="false"></sodipodi:guide> <sodipodi:guide position="22.682243,23.285047" orientation="1,0" id="guide1635" inkscape:locked="false"></sodipodi:guide> <sodipodi:guide position="22.682243,7.6455921" orientation="0,1" id="guide1639" inkscape:locked="false"></sodipodi:guide> <sodipodi:guide position="18.859863,18.859863" orientation="1,0" id="guide1242" inkscape:locked="false"></sodipodi:guide> <inkscape:grid type="xygrid" id="grid1103"></inkscape:grid> </sodipodi:namedview> <metadata id="metadata819"> <rdf:rdf> <cc:work rdf:about=""> <dc:format>image/svg+xml</dc:format> <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"></dc:type> <dc:title> </dc:title> </cc:work> </rdf:rdf> </metadata> <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1" transform="translate(0,-289.0625)"> <path style="opacity:1;fill:#000000;fill-opacity:1;stroke:none;stroke-width:2;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1" d="M 15,3 A 12,12 0 0 0 3,15 12,12 0 0 0 15,27 12,12 0 0 0 27,15 12,12 0 0 0 15,3 Z m 0,7.160156 A 4.8405437,4.8405437 0 0 1 19.839844,15 4.8405437,4.8405437 0 0 1 15,19.839844 4.8405437,4.8405437 0 0 1 10.160156,15 4.8405437,4.8405437 0 0 1 15,10.160156 Z M 15,14 a 1,1 0 0 0 -1,1 1,1 0 0 0 1,1 1,1 0 0 0 1,-1 1,1 0 0 0 -1,-1 z" transform="translate(0,289.0625)" id="path916" inkscape:connector-curvature="0"></path> </g> </g></svg>
  <https://www.svgrepo.com/svg/435500/album>

- Faixa
  <svg width="64px" height="64px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>music [#1004]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -3759.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M264,3599 L264,3610.79487 C264,3613.06051 262.195068,3614.89744 259.989817,3614.89744 C257.784566,3614.89744 255.979635,3613.06051 255.979635,3610.79487 C255.979635,3608.52923 257.778576,3606.69231 259.984826,3606.69231 C260.71159,3606.69231 261.005091,3606.89231 262.003394,3607.24103 L262.003394,3603.10256 L252.020365,3603.10256 L252.020365,3614.89744 C252.020365,3617.16308 250.215434,3619 248.010183,3619 C245.804932,3619 244,3617.16308 244,3614.89744 C244,3612.63179 245.800938,3610.87692 248.005191,3610.79487 C249.150245,3610.75179 249.321953,3610.90667 250.02376,3611.34359 L250.02376,3599 L264,3599 Z" id="music-[#1004]"> </path> </g> </g> </g> </g></svg>
  <https://www.svgrepo.com/svg/512531/music-1004?edit=true>

  - Recente
    <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 6V12" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M16.24 16.24L12 12" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    <https://www.svgrepo.com/svg/522682/time>