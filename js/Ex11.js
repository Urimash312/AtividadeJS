var n1,n2,e,r

n1=parseFloat(prompt("Digite o numero"))
n2=parseFloat(prompt("Digite o segundo numero"))
e=prompt("Digite a equação")
if(e=="soma")
{
r=n1+n2
alert("A soma é: " + r)
}
if(e=="subtração")
{
    r=n1-n2
    alert("Resultado: " + r)
}

if(e=="Dvisão")
{
    r=n1/n2
    alert("Resultado: " + r)
}
if(e=="Multiplicação")
{
    r=n1*n2
    alert("Resultado: " + r)
}
