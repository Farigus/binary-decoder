

let text = document.getElementById('number')

let buttons = document.getElementById('panel');


let number = 0;



buttons.onclick = (event) => {

    if(event.target.type === 'button'){

        if (document.getElementById(event.target.id).innerText == '1'){


            switch(event.target.id){
    
                case '1' : number = number - 1;
                break;
                case '2' : number = number - 2;
                break;
                case '3' : number = number - 4;
                break;
                case '4' : number = number - 8;
                break;
                case '5' : number = number - 16;
                break;
                case '6' : number = number - 32;
                break;
                case '7' : number = number - 64;
                break;
                case '8' : number = number - 128;
                break;
    
                    
                }
    
                text.innerHTML = number;
    
    
            document.getElementById(event.target.id).innerHTML ='0';
        }
    
        else {
    
            switch(event.target.id){
    
                case '1' : number = number + 1;
                break;
                case '2' : number = number + 2;
                break;
                case '3' : number = number + 4;
                break;
                case '4' : number = number + 8;
                break;
                case '5' : number = number + 16;
                break;
                case '6' : number = number + 32;
                break;
                case '7' : number = number + 64;
                break;
                case '8' : number = number + 128;
                break;
    
                    
                }
    
                text.innerHTML = number;
    
    
            document.getElementById(event.target.id).innerHTML ='1';
        }



    }



    

    


}







   

