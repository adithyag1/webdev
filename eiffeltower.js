window.onload=function(){
    let btn=document.getElementById("buybtn");
    
    btn.onclick=function(){
    
        let adults=document.getElementById("adults").value;
        let children=document.getElementById("children").value;

        if(adults<0){
        adults=0;
        }
        if(children<0){
        children=0;
        }
        
        let price=adults*12+children*5;
        
        alert("Entry Fee = $"+price)
    
    }
}
