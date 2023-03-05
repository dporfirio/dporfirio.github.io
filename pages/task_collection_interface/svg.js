var PreviousElement;
//---mouseover element--
function showMyTooltip(evt)
{
    var tooltipDiv = document.getElementById("tooltipDiv");
    var target = evt.target
   if(!PreviousElement||PreviousElement!=target) //--prevent 'stutter'---
   {
        if(PreviousElement) //---remove highlight (stroke) ---
            PreviousElement.setAttribute('stroke-width',0)

        target.setAttribute('stroke-width',3)
        var myData=target.getAttribute("data")

        tooltipDiv.innerHTML=myData

        var x = evt.clientX;
        var y = evt.clientY;

        var scrollX = window.pageXOffset
        var scrollY = window.pageYOffset

        var divLeft=x+5+scrollX+"px"
        var divTop=y+5+scrollY+"px"

        tooltipDiv.style.left=divLeft
        tooltipDiv.style.top=divTop
        tooltipDiv.style.visibility="visible"
        PreviousElement=target
  }
}