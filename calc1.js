let qatorArray=document.getElementsByClassName("bos")

natija= document.getElementById("natija")

let qatorFunc= function(event){
    switch(event.target.value){
        case ".":             
            if(natija.value[natija.value.length-1] != "."  )
                { natija.value = natija.value + event.target.value;
                }
            break;  
/*         case "/":       
        case "*":       
        case "-":       
        case "+":  
            if(natija.value[natija.value.length-1] == "/" ||
                natija.value[natija.value.length-1] == "*" ||
                natija.value[natija.value.length-1] == "+" ||
                natija.value[natija.value.length-1] == "-") 
            {
                natija.value[natija.value.length-1] = event.target.value;
            }   else natija.value = natija.value + event.target.value;        
            break;  */
        case "<-":
            natija.value[natija.value.length-1].pop();
            break;
        case "C":
            natija.value=""
            break;
        case "=":
            try{
                natija.value= eval(natija.value)
            } catch(e){
                
                natija.value=""
            }
                natija.value= eval(natija.value)
                break;
       default:
            natija.value = natija.value + event.target.value;
          
            }
        }
function Bosganda(){
    for(let i=0; i<qatorArray.length; i++){
        qatorArray[i].addEventListener('click', qatorFunc);
    }
}
Bosganda()
