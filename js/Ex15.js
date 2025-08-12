var Gasolina, preçoAtual
Gasolina=parseFloat(prompt("Gasolina"))
preçoAtual=parseFloat(prompt("preço atual"))
if(Gasolina>=10&&Gasolina<=20)
{
    Gasolina=(Gasolina*preçoAtual)*0.9
    alert(Gasolina)
}
if(Gasolina>20)
{
    Gasolina=(Gasolina*preçoAtual)*0.8
}
