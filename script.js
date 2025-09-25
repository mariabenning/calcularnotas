function resultado(){
    var nota1 = document.getElementById("nota1").value; 
    console.log(nota1)

  var nota2= document.getElementById("nota2").value; 
    console.log(nota2)

  var nota3= document.getElementById("nota3").value; 
    console.log(nota3)

calnotas = (nota1 * 0.50)  +  (nota2 * 0.25) + (nota3 * 0.25)


    if (calnotas >=9){
        document.querySelector('#resultadonotas').innerHTML = "NOTA A" 
        

} else if  (calnotas >8 && calnotas <9)  {

 document.querySelector('#resultadonotas').innerHTML = "NOTA B"

} else if  (calnotas >6.5 && calnotas <8){

document.querySelector('#resultadonotas').innerHTML = "NOTA C"

} else if (calnotas >5 && resultado <6.5) 

document.querySelector('#resultadonotas').innerHTML = "NOTA D"

else  {

document.querySelector('#resultadonotas').innerHTML = "NOTA E"

} 
}
