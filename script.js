const billInput = document.getElementById("bill-input");
const tips = document.getElementsByClassName("tip");
const tipsArray =[...tips];
const peopleInput = document.getElementById("people-input");
const totalResult = document.getElementById("total-result");
const tipResult = document.getElementById("tip-result");
const resetButton = document.getElementById("reset");
const customInput=document.getElementById("custom");




let billValue = 0;
let tipsValue = 0;
let peopleValue =0;
let total = 0 ;
let tipss = 0;
let customValue = 0;

customInput.addEventListener("click", (event) =>{
    customValue = parseInt(event.target.value)
    tipsValue=0;
    customValue=0;
    customInput.value=="";
    if(customInput.value==""|| customValue==0|| customValue.length==0){
        calculation2() 
     }else{
     calculation3();
 }
});



customInput.addEventListener("input", (event) =>{
    customValue = parseInt(event.target.value)
    if(customInput.value==""|| customValue==0|| customValue.length==0){
        calculation2() 
     }else{
     calculation3();
 }
});





peopleInput.addEventListener("input", (event) =>{
    peopleValue = parseInt(event.target.value);
    //console.log(peopleValue);
   // total= (billValue + (billValue *(tipsValue/100)))/peopleValue;
   // console.log(total);
   
   if(customInput.value==""|| customValue==0|| customValue.length==0){
    calculation2() 
 }else{
 calculation3();
}

} )

billInput.addEventListener("input", (event) =>{
    billValue= parseInt(event.target.value);
    //console.log(billValue)
    if(customInput.value==""|| customValue==0|| customValue.length==0){
        calculation2() 
     }else{
     calculation3();
 }
} );

for( let i = 0; i < tipsArray.length; i ++){
   tipsArray[i].addEventListener("click",(event) =>{
    tipsValue = parseInt(event.target.innerText);
   // console.log(tipsValue);
   // total= (billValue + (billValue *(tipsValue/100)))/peopleValue;
   // console.log(total);
   customInput.value="";
   customValue = 0;
   if(customInput.value==""|| customValue==0|| customValue.length==0){
    calculation2() 
 }else{
 calculation3();
}
})
}








resetButton.addEventListener("click", () =>{
    billInput.value = "";
    peopleInput.value ="";
   tipsValue = 0;
   totalResult.innerText="0.00$";
   tipResult.innerText = "0.00$";
   customValue=0;
   customInput.value = "";

})




//function calculation(){
    // if(peopleValue==0 || peopleValue.length==0 || peopleInput.value=="")

    // tipss = ((billValue * (customValue/100) ) / peopleValue).toFixed(2);
    // total = ((billValue + (billValue *(customValue/100)))/peopleValue).toFixed(2);
    

    // totalResult.innerText  = `${total}$`;
    // if(peopleValue==0 || peopleValue.length==0 || peopleInput.value=="" ){
    //     totalResult.innerText = "0.00$";
    //     tipResult.innerText = "0.00$";
    //     }else{
    //         totalResult.innerText  = `${total}$`
    //         tipResult.innerText = `${tipss}$`;
    //     }
    
    // }
    // function calculation2(){
    //     if(customInput.value=="" || customValue==0 ||customValue.length==0){
    //         tipss = ((billValue * (tipsValue/100) ) / peopleValue).toFixed(2);
    //         total = ((billValue + (billValue *(tipsValue/100)))/peopleValue).toFixed(2); 
    //         if( billInput.value=="" || billValue==0 || billValue.length=="" || peopleInput.value==0 || peopleValue==0){
    //             totalResult.innerText = "0.00$";
    //             tipResult.innerText = "0.00$";

    //         }else{
    //         totalResult.innerText  = `${total}$`
    //         tipResult.innerText = `${tipss}$`;
    //         }
           
            
    //         }
    
            
            
    //         else{
    //         tipss = ((billValue * (customValue/100) ) / peopleValue).toFixed(2);
    //         total = ((billValue + (billValue *(customValue/100)))/peopleValue).toFixed(2); 
    //         totalResult.innerText  = `${total}$`
    //         tipResult.innerText = `${tipss}$`;
    //         }
    //         if(customValue==0 && billValue!=0 || peopleValue!=0){
    //             totalResult.innerText = "0.00$";
    //             tipResult.innerText = "0.00$";

    //         }
    tipss = ((billValue * (customValue/100) ) / peopleValue).toFixed(2);
   total = ((billValue + (billValue *(customValue/100)))/peopleValue).toFixed(2);
    
    

function calculation2(){
    total = ((billValue + (billValue *(tipsValue/100)))/peopleValue).toFixed(2);
    tipss = ((billValue * (tipsValue/100) ) / peopleValue).toFixed(2);

   
    if(billInput.value=="" || billValue==0  ||billValue.length==0 ||peopleValue==0 || peopleValue.length=="" ||peopleInput.value=="" ){
        totalResult.innerText = "0.00$";
        tipResult.innerText = "0.00$";
        
    
    }
    
    else{
        totalResult.innerText = `${total}$`;
       tipResult.innerText = `${tipss}$`;
    }
}
function calculation3(){
    if(customValue.length==0 || customValue==0|| customInput.value==""){
        tipResult.innerText = "0.00$";
        totalResult.innerText=`${total}$`

    }
    total = ((billValue + (billValue *(customValue/100)))/peopleValue).toFixed(2);
    tipss = ((billValue * (customValue/100) ) / peopleValue).toFixed(2);

   
    if(billInput.value=="" || billValue==0  ||billValue.length==0 ||peopleValue==0 || peopleValue.length=="" ||peopleInput.value=="" ){
        totalResult.innerText = "0.00$";
        tipResult.innerText = "0.00$";
        
    
    }
    
    else{
        totalResult.innerText = `${total}$`;
       tipResult.innerText = `${tipss}$`;
    }

}



