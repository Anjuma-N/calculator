let display = document.getElementById('inputBox');

// by using query selectore html button tag selected
let buttons = document.querySelectorAll('button');

//converting button into array
let buttonsArray = Array.from(buttons);

let string = '';

//converting each array value in to variable
buttonsArray.forEach(btn => {
btn.addEventListener('click',(e) => {  // e is function event to pass click event value
    
    if(e.target.innerHTML == 'DEL'){
        string = string.substring(0,string.length-1); //substring manages index wise
        display.value = string ; 
    }
    
    else if(e.target.innerHTML == 'AC'){
      string='';
      display.value = string ;
    }
    
    else if(e.target.innerHTML == '='){
       string = eval(string) ;
       display.value = string ; //eval inbuilt key which convert string to number and performs arithmatic operations
    }
    
    else{
    string += e.target.innerHTML; //to display click number on textbox
    display.value = string ;
}
});
});