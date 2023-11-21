function buttonclick(val)
{
    document.getElementById("screen").value+=val
}

function ClearAll()
{
    document.getElementById("screen").value=""
}
function EqualClick()
{
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
}
function BackSpace()
{
    var rekensom=document.getElementById("screen").value;
    document.getElementById("screen").value=rekensom.substring(0,rekensom.length-1);
}