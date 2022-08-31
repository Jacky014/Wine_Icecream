
function edad (){
var year
var edad
year=parseInt(prompt("¿En qué año naciste?"))

edad = 2022 - year

if (edad <= 17){
    alert("Erees MENOR de edad porque tienes " +edad+" años, no podemos venderte helados, vuelve en unos años!")
}

else{
    alert("Erees MAYOR de edad porque tienes " +edad+" años, estamos listos para tomar tu pedido")

}
}
