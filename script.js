
let inputNumber1= document.getElementById('inputNumber1')
let inputNumber2= document.getElementById('inputNumber2')
let res = document.getElementById('res')

function somar(){
res.innerHTML =""
    if(inputNumber1.value ==0 ||inputNumber2.value ==0){
        res.innerHTML = "digite um valor para somar"
    
    }else{  
        number1= Number(inputNumber1.value)
        number2= Number(inputNumber2.value)
        var total = number1+number2
        res.innerHTML =`${number1} + ${number2} = ${total}`
    }

}

function subtrair(){
    if(inputNumber1.value ==0 ||inputNumber2.value ==0){
        res.innerHTML = "digite um valor para subtrair"
            
     }else {
         number1= Number(inputNumber1.value)
         number2= Number(inputNumber2.value)
         let total = number1-number2
         res.innerHTML =`${number1} - ${number2} = ${total}`
     }


}

function multiplicar(){

    if(inputNumber1.value ==0 ||inputNumber2.value ==0){
        res.innerHTML = "digite um valor para multiplicar"

    }else{
        number1 = Number(inputNumber1.value)
        number2 = Number(inputNumber2.value)
        total = number1*number2
        res.innerHTML= `${number1} x ${number2} = ${total}`
    }
}

function dividir(){

    if(inputNumber1.value ==0 ||inputNumber2.value ==0){
        res.innerHTML = "digite um valor para subtrair" 

     }else{
        number1 = Number(inputNumber1.value)
        number2 = Number(inputNumber2.value)
        total = number1/number2
        res.innerHTML= `${number1}  ÷ ${number2} = ${total}`
    }
}
function limpar(){

res.innerHTML= ""
inputNumber1.value = ""
inputNumber2.value = ""

}
