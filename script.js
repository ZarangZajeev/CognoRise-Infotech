// ------ operation display view ----------
function numClick(val){
    document.querySelector("#outScreen").value+=val;
    // outScreen.value+=val;
}




//  -------- Clear button (disClear()) ----------------
function disClear(){
    document.querySelector("#outScreen").value ="";
    // outScreen.value="";
}


    // -------- delete button (backClick()) --------------
function backClick(){
    document.querySelector("#outScreen").value =document.querySelector("#outScreen").value.toString().slice(0,-1);
}


//  ------------- equal button (equal()) ------------------
function equal(){
    var text=document.querySelector("#outScreen").value;
    var res=eval(text);
    document.querySelector('#outScreen').value=res;
}