var input = document.querySelector('.input-calc');
var result = document.querySelector('.result');
var nums=document.querySelectorAll('.number');


nums.forEach(function(num){
    num.addEventListener('click',function(){
        if(input.innerHTML=='0'){
            input.innerHTML = '';
        }
        input.innerHTML+=num.innerHTML;
  
    })
})

var operations = document.querySelectorAll('.operation');
operations.forEach(function(operation){
    operation.addEventListener('click',function(){
        if(operation.innerHTML=='C'){
            input.innerHTML='0';
            result.innerHTML=''
        }
        else if(operation.innerHTML=='CE'){
            var arr= Array.from(input.innerHTML);
            arr.splice(arr.length-1,1);
            if(arr!=0){
                input.innerHTML=arr.join('');
            }
            else input.innerHTML='0';
        }
        else if(operation.innerHTML=='='){
            result.innerHTML= eval(input.innerHTML);
        }
        else input.innerHTML+=operation.innerHTML;
    })
})
