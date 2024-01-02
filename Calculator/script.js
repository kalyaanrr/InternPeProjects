let OutputScreen = document.getElementById("output-scr");
function display(number){
    OutputScreen.value +=number ;

}

function Calculate(){
    try{
        OutputScreen.value = eval(OutputScreen.value);

    }
    catch(error){
        alert("Invalid Input");
    }
}

function Clear(){
    OutputScreen.value= "";

}

function Delete(){
    OutputScreen.value = OutputScreen.value.slice(0,-1);
}