<h1>MAT-PACKAGE</h1>

<h2>Sumário:</h2>
   <ol>
    <a href="#descricao">
      <li>Descrição</li>
    </a>
    <a href="#importancia">
      <li>Importância</li>
    </a>
    <a href="#instalacao">
      <li>Instalação</li>
    </a>
    <a href="#utilizacao">
      <li>Utilização</li>
    </a>
    <a href="#licenca">
      <li>Licença</li>
    </a>
    <a href="#desenvolvedor">
      <li>Desenvolvedor</li>
    </a>
    <a href="#metodos">
      <li>Métodos e funções</li>
    </a>
    <ul style="list-style-type: disc;">
      <a href="#operacoes">
        <li>Operações
          <ul style="list-style-type: disc;">
            <a href="operacoesB">
              <li>Operações Básicas</li>
            </a>
          </ul>
        </li>
      </a>
      <a href="#geometria">
        <li>Geometria
          <ul style="list-style-type: disc;">
            <a href="#area">
              <li>Área</li>
            </a>
            <a href="#perimetro">
              <li>Perimetro</li>
            </a>
          </ul>
        </li>
      </a>
      <a href="#mathF">
        <li>Funções Math
          <ul style="list-style-type: disc;">
            <a href="#math">
              <li>Math</li>
            </a>
          </ul>
        </li>
      </a>
      <a href="#equacoes">
        <li>Equações
          <ul style="list-style-type: disc;">
            <a href="#equacoesSegundo">
              <li>Equações do 2° grau</li>
            </a>
          </ul>
        </li>
      </a>
      <a href="#media">
        <li>Média
          <ul style="list-style-type: disc;">
            <a href="#mediaArit">
              <li>Média aritmética</li>
            </a>
            <a href="#mediaPond">
              <li>Média ponderada</li>
            </a>
          </ul>
        </li>
      </a>
      <a href="#conversor">
        <li>Conversores
          <ul style="list-style-type: disc;">
            <a href="#conversorMedidas">
              <li>Conversor de medidas</li>
            </a>
            <a href="#conversorMoedas">
              <li>Conversor de moedas</li>
            </a>
          </ul>
        </li>
      </a>
    </ul>
  </ol>
<br>
<!-- DESCRIÇÃO -->

<h2 id="descricao">Descrição:</h2>
<br>
O Mat-package é um pacote facilitador para cálculos matemáticos, com ele você pode utilizar métodos da função <a>Math</a> do próprio JavaScript e também alguns outros cálculos importantes dentro da matemática.

<br>
<!-- IMPORTÂNCIA -->

<h2 id="importancia">Importância:</h2>
<br>
Alguns desenvolvedores sentem um pouco de dificuldade quando o assunto é matemática, com o estudo sobre Node.js, me veio a ideia de poder ajudar essas pessoas, o Mat-package vai ajudar bastante pessoas que desejam fazer cálculos matemáticos e não tem conhecimento de como fazê-los.

<br>
<!-- INSTALAÇÃO -->

<h2 id="instalacao">Instalação:</h2>
<br>
Para utilizar este pacote, basta digitar o seguinte código no terminal dentro do seu projeto:

<br>

```sh
npm install mat-package
# ou
yarn add mat-package
```

<br>
<!-- UTILIZAÇÃO -->

<h2 id="utilizacao">Utilização:</h2>
<br>
Para utilizar o pacote no node.js:

```
const mat = require("mat-package");
```

Para utilizar em projetos React:

```
import mat from "mat-package";
```

<br>

<!-- LICENÇA -->

<h2 id="licenca">Licença</h2>

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

<!-- CONTATO -->

<h2 id="desenvolvedor" >Desenvolvedor</h2>

| [<img src="https://avatars.githubusercontent.com/u/89321125?v=4" width="115"><br><sub>@wesleyara</sub>](https://github.com/wesleyara)
| --------------------------------------------------------------------------------------------------------------------------------------------- |

<br>
<h2 id="metodos">Métodos e funções:</h2>
  Nessa seção será visto todos os métodos e funções presentes nesse pacote.

 <br>
 Os parametros contidos nos métodos serão, em sua grande maioria, do tipo number, salve os casos que será necessário utilizar arrays para realizar o cálculo, porém sempre será especificado quando necessário.

<br>
<h2 id="operacoes">Operações:</h2>
Todos parametros dessa seção são do tipo number.

<br>
<h3 id="operacoesB">Operações básicas:</h3>

<br>
Soma

```js
mat.soma(n1, n2);
// ------------------------------------------------
mat.soma(2, 5);
// 7
```

Subtração

```js
mat.subtracao(n1, n2);
// ------------------------------------------------
mat.subtracao(6, 2);
// 4
```

Multiplicação

```js
mat.multiplicacao(n1, n2);
// ------------------------------------------------
mat.multiplicacao(3, 4);
// 12
```

Divisão

```js
mat.divisao(n1, n2);
// ------------------------------------------------
mat.divisao(10, 2);
// 5
```

<br>
<h2 id="geometria">Geometria:</h2>
Todos parametros dessa seção são do tipo number.

<br>
<h3 id="area">Área:</h3>

<br>
Área do quadrado

```js
mat.areaQuadrado(lado);
// ------------------------------------------------
mat.areaQuadrado(5);
// 25
```

Área do retângulo

```js
mat.areaRetangulo(lado, altura);
// ------------------------------------------------
mat.areaRetangulo(4, 10);
// 40
```

Área do triângulo

```js
mat.areaTriangulo(base, altura);
// ------------------------------------------------
mat.areaTriangulo(5, 6);
// 15
```

Área do circulo

```js
mat.areaCirculo(raio);
// ------------------------------------------------
mat.areaCirculo(5);
// 78
```

Área do paralelogramo

```js
mat.areaParalelogramo(base, altura);
// ------------------------------------------------
mat.areaParalelogramo(5, 6);
// 30
```

Área do trapézio

```js
mat.areaTrapezio(baseMaior, baseMenor, altura);
// ------------------------------------------------
mat.areaTrapezio(6, 5, 10);
// 55
```

<br>
<h3 id="perimetro">Perímetro:</h3>

<br>
Perímetro do quadrado

```js
mat.perimetroQuadrado(lado);
// ------------------------------------------------
mat.perimetroQuadrado(5);
// 20
```

Perímetro do retângulo

```js
mat.perimetroRetangulo(lado, altura);
// ------------------------------------------------
mat.perimetroRetangulo(2, 6);
// 16
```

Perímetro do triângulo

```js
mat.perimetroTriangulo(lado);
// ------------------------------------------------
mat.perimetroTriangulo(6);
// 18
```

Perímetro do circulo

```js
mat.perimetroCirculo(raio);
// ------------------------------------------------
mat.perimetroCirculo(3);
// 19
```

Perímetro do paralelogramo

```js
mat.perimetroParalelogramo(ladoMenor, ladoMaior);
// ------------------------------------------------
mat.perimetroParalelogramo(3, 6);
// 18
```

Perímetro do trapézio

```js
mat.perimetroTrapezio(ladoA, ladoB, ladoC, ladoD);
// ------------------------------------------------
mat.perimetroTrapezio(2, 3, 2, 4);
// 11
```

<br>
<h2 id="mathF">Funções Math:</h2>
Todos parametros dessa seção são do tipo number.

<br>
<h3 id="math">Math:</h3>

<br>
Raiz quadrada

```js
mat.raizQuadrada(numero);
// ------------------------------------------------
mat.raizQuadrada(25);
// 5
```

Módulo

```js
mat.modulo(numero);
// ------------------------------------------------
mat.modulo(-50);
// -50
```

Raiz cúbica

```js
mat.raizCubica(numero);
// ------------------------------------------------
mat.raizCubica(8);
// 2
```

Potência

```js
mat.potencia(numero, expoente);
// ------------------------------------------------
mat.potencia(4, 2);
// 16
```

Número aleatório

```js
mat.numeroAleatorio(valorMáximo);
// ------------------------------------------------
mat.potencia(10);
// retorna um número aleatório entre 0 e 10
```

Arredondar

```js
mat.potencia(numero);
// ------------------------------------------------
mat.potencia(1.56);
// 2
```

Número de Euler

```js
mat.numeroEuler();
// 2.7182...
```

Exponencial

```js
mat.exponencial(numero);
// ------------------------------------------------
mat.exponencial(3);
// 20.0855...
```

<br>
<h2 id="equacoes">Equações:</h2>
Todos parametros dessa seção são do tipo number.

<br>
<h3 id="equacoesSegundo">Equações do 2° grau:</h3>

<br>
Em números decimais

```js
mat.eqSegGrau(a, b, c);
// ------------------------------------------------
mat.eqSegGrau(1, -5, 6);
// [ 3, 2 ]
```

Em frações

```js
mat.eqSegGrauFra(a, b, c);
// ------------------------------------------------
mat.eqSegGrauFra(1, -5, 6);
// [ '6/2', '4/2' ]
```

<br>
<h2 id="media">Média:</h2>
Nesta seção iremos utilizar arrays como parametros, é válido ressaltar que média tratamos de diversos valores, por isso essa abordagem com arrays.

<br>
<h3 id="mediaArit">Média aritimética:</h3>

<br>
Utilize arrays como parametros

```js
const notas = [ 10, 8, 7, 8 ];

mat.media(notas);
// 8.25
```

<h3 id="mediaPond">Média ponderada:</h3>

<br>
Utilize arrays como parametros

```js
const notas = [ 10, 8, 7, 8 ];
const pesos = [ 1, 2, 1, 3 ];

mat.mediaPonderada(notas, pesos);
// 8.14
```

<br>
<h2 id="conversor">Conversores:</h2>
Todos parametros dessa seção são do tipo number.

<br>
<h3 id="conversorMedidas">Conversor de medidas:</h3>

<br>
Quilômetros

```js
mat.convKM(unidade, numero);
// ------------------------------------------------
mat.conKM("m", 10);
// 10000
```

Metros

```js
mat.convM(unidade, numero);
// ------------------------------------------------
mat.convM("cm", 10);
// 1000
```

Centímetros

```js
mat.convCM(unidade, numero);
// ------------------------------------------------
mat.convCM("m", 10);
// 0.1
```

Parametros para conversão: km, hm, dam, m, dm, cm, mm.

<br>
<h3 id="conversorMoedas">Conversor de moedas:</h3>
Utilizando uma API para captar em tempo real a cotação das moedas, essa função deve ser chamada dentro de uma função async await para que não retorne uma promise

Todos os parâmetros dessa seção são do tipo string.

<br>
Utilizando com async e await

```js
async function test() {
  console.log(await mat.conversorMoedas("dolar"));
} // 5.266 (No momento do teste)

test()
```

  <h3>Lista de moedas:</h3>
  <ul>
    <li>dolar</li>
    <li>euro</li>
    <li>dolarCanadense</li>
    <li>guaraniParaguaio</li>
    <li>pesoArgentino</li>
    <li>pesoUruguaio</li>
    <li>pesoColombiano</li>
    <li>pesoMexicano</li>
    <li>pesoChileno</li>
    <li>libraEsterlina</li>
    <li>coroaNorueguesa</li>
    <li>bitcoin</li>
    <li>dolarNeozelandes</li>
    <li>francoSuico</li>
    <li>etherium</li>
    <li>coroaDinamarquesa</li>
    <li>rubloRusso</li>
    <li>yuanChines</li>
    <li>rupiaIndiana</li>
    <li>zlotiPolones</li>
    <li>riyalSaudita</li>
    <li>novaLiraTurca</li>
    <li>dirhamDosEmirados</li>
    <li>dolarHongKong</li>
    <li>xrp</li>
    <li>randSulAfricano</li>
    <li>ieneJapones</li>
    <li>novoShekelIsraelense</li>
    <li>bahtTailandes</li>
    <li>coroaSueca</li>
    <li>solDoPeru</li>
    <li>dolarCingapura</li>
    <li>dogecoin</li>
    <li>dolarTaiunes</li>
    <li>litecoin</li>
    <li>dolarAustraliano</li>
    <li>boliviano</li>
  </ul>
