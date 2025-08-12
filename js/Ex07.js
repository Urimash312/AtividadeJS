var numeroOno, NumberoDos, soma

numeroOno=parseInt(prompt("Digite o primeiro numero"))
NumberoDos=parseInt(prompt("Digite o segundo numero"))

soma=numeroOno+NumberoDos
if(soma>20)
{
    soma=soma+8
    alert("O numero era maior que 20 entao somei mais 8: " + soma)
}
else
{
    soma=soma-5
    alert("O numero era menor que 20 entao tirei 5: " + soma)
}