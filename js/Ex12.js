var baseMaior, baseMenor,a, altura

baseMaior=parseInt(prompt("Base maior"))
baseMenor=parseInt(prompt("Base menor"))
altura=parseInt(prompt("Altura"))
if(baseMaior==0 ||baseMenor==0)
{
    alert("errado")
}
else{
    a=((baseMaior+baseMenor)*altura)/2
    alert(a)
}
