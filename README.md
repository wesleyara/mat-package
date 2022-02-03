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

```
npm install https://github.com/wesleyara/mat-package
```

<br>
<!-- UTILIZAÇÃO -->

<h2 id="utilizacao">Utilização:</h2>
<br>
Para utilizar o pacote no node.js:

```
const mat = require("mat-package");
mat.config();
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

| [<img src="https://avatars.githubusercontent.com/u/89321125?v=4" width="115"><br><sub>@Wesleyara</sub>](https://github.com/wesleyara)
| --------------------------------------------------------------------------------------------------------------------------------------------- |

<br>
<h2 id="metodos">Métodos e funções:</h2>
  Nessa seção será visto todos os métodos e funções presentes nesse pacote.

 <br>
 Os parametros contidos nos métodos serão, em sua grande maioria, do tipo number, salve os casos que será necessário utilizar arrays para realizar o cálculo, porém sempre será especificado quando necessário.

<br>
<h3 id="operacoes">Operações:</h3>
Todos parametros dessã seção são do tipo number.

<br>
<h4 id="operacoesB">Operações básicas:</h4>

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