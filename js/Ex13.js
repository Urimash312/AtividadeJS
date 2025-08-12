var litro, km, r
litro=parseFloat(prompt("Litros"))
km=parseFloat(prompt("km"))
r=km/litro
if(r>12)
{
    alert("Super economico")
}
else{
    if(r<8){
        alert("venda o carro")
    }
    else{
        alert("economico")
    }
}
