# Desafio 1 - Média Final do Aluno
Faça um programa que receba a média de um aluno e imprima o seguinte:

- Caso a média seja < 5 imprima "REP";
- Caso a média seja >= 5 e < 7 imprima "REC";
- Caso a média seja >7 imprima "APR".

## Entrada
A entrada consiste em vários arquivos de teste, cada um com uma linha, que conterá o valor da média do aluno. Conforme mostrado no exemplo de entrada a seguir.

## Saída
Para cada arquivo da entrada, terá um arquivo de saída. E como mencionado no Desafio, será gerado uma linha com a palavra "Reprovado" caso sua média seja < 5, "Recuperação" caso sua média seja >= 5 e < 7 e "Aprovado" caso a média seja > 7. Use o exemplo abaixo para clarear o que está sendo pedido.

## Exemplos
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.

|Entrada|Saída|
|---|---|
|5.5|REC   |
|8  |APR|
|2|REP|

---

# Desafio 2 - Maior Valor Par e Menor Valor Ímpar
Faça um programa que receba N (quantidade de números) e seus respectivos valores. Imprima o maior número par e o menor número impar. 

## Entrada
A entrada consiste em um arquivos de teste, a primeira linha receberá um valor N, referente quantidade de números que terá de entranda, as linhas seguintes terão os valores númericos maiores ou iguais a zero, podendo o número ser par ou impar. Conforme mostrado no exemplo de entrada a seguir.

## Saída
Para cada arquivo da entrada, terá um arquivo de saída. E como mencionado no Desafio, a saída deverá retornar a mensagem "Maior número par: {numero}" com o maior valor par após o final do texto,  e "Menor número ímpar: {numero}" com o menor valor ímpar após o final do texto. Use o exemplo abaixo para clarear o que está sendo pedido.

|Entrada|Saída|
|---|---|
|5|Maior número par: 10 <br> Menor número ímpar: 1|
|3||
|4||
|1||
|10||
|8||

---

# Desafio 3 - Cálculo Salarial
Faça um programa que calcule e imprima o salário a ser transferido para um funcionário. Para realizar o calculo receba o valor bruto do salário e o adicional dos benefícios. O salário a ser transferido é calculado da seguinte maneira: 

**(valor bruto do salário - percentual de imposto mediante ao salário) + adicional dos benefícios**

Para calcular o *percentual de imposto* segue as aliquotas:
    - De R\$ 0.00 a R\$ 1100.00 = 5.00%
    - De R\$ 1100.01 a R\$ 2500.00 = 10.00%
    - Maior que R$ 2500.00 = 15.00%

## Entrada
A entrada consiste em vários arquivos de teste, que conterá o **valor bruto do salário** e **adicional dos benefícios**. Conforme mostrado no exemplo de entrada a seguir.

## Saída
Para cada arquivo da entrada, terá um arquivo de saída. E como mencionado no Desafio, será gerado uma linha com um número que será a diferença entre o valor bruto do salário e o percentual de imposto mediante a faixa salárial somado com o adicional dos benefícios. Use o exemplo abaixo para clarear o que está sendo pedido.

## Exemplos
A tabela abaixo apresenta exemplos com alguns dados de entrada e suas respectivas saídas esperadas. Certifique-se de testar seu programa com esses exemplos e com outros casos possíveis.
|Entrada|Saída|
|---|---|
|2000 <br> 250| 2050.00|
|1100 <br> 50|1045.00|
|3000 <br> 400|2960.00|
