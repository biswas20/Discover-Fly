
// First Class Ticket Flight For Js Code
function firstClassSeatCount(isIncrease){
    let inputFirstClass=document.getElementById("inputFirstClass").value;
    let inputFirstClassCount=parseInt(inputFirstClass);
    if(isIncrease==true){
        inputFirstClassCount++;
        
    }
    else if(isIncrease==false && inputFirstClassCount>0){
        inputFirstClassCount--;
    }
    document.getElementById("inputFirstClass").value=inputFirstClassCount;
    calculateTotal();
}
// Economy Class Ticket Flight For Js Code
function economyClassSeatCount(isIncrease){
    let inputEconomyClass=document.getElementById("inputEconomyClass").value;
    let inputEconomyClassCount=parseInt(inputEconomyClass);
    
    if(isIncrease==true){
        inputEconomyClassCount++;
    }
    else if(isIncrease==false && inputEconomyClassCount>0){
        inputEconomyClassCount--;
    }
    document.getElementById("inputEconomyClass").value=inputEconomyClassCount;
    calculateTotal();
}
// Calculate Total Amount Function
function calculateTotal(){
    let inputFirstClass=document.getElementById("inputFirstClass").value;
    let inputFirstClassCount=parseInt(inputFirstClass);
    let inputEconomyClass=document.getElementById("inputEconomyClass").value;
    let inputEconomyClassCount=parseInt(inputEconomyClass);
    let subTotalAmount=inputFirstClassCount*150+inputEconomyClassCount*100;
    document.getElementById("subTotalAmount").innerText=subTotalAmount;
    let vatCount=subTotalAmount*0.1;
    document.getElementById("vatCount").innerText=vatCount;
    let totalAmount=subTotalAmount+vatCount;
    document.getElementById("totalAmount").innerText=totalAmount;
    document.getElementById("ticketFirstTotal").innerText='$ '+inputFirstClassCount*150;
    document.getElementById("ticketEconomyTotal").innerText='$ '+ inputEconomyClassCount*100;
    document.getElementById("ticketTotalVat").innerText='$ '+vatCount;
    let ticketSubTotal=inputEconomyClassCount*100+inputFirstClassCount*150;
    let ticketVat=ticketSubTotal*0.1;
    let ticketTotalAmount=ticketSubTotal+ticketVat;
    document.getElementById("ticketTotalAmount").innerText= '$ '+ ticketTotalAmount;
}
//Book Now Button Js Code
let bookNow=document.getElementById("bookNow");
bookNow.addEventListener('click',function(){
    document.getElementById("mainDiv").style.display="none";
    document.getElementById("confirmBox").style.display="block";
    let firstClassTicket=document.getElementById("inputFirstClass").value;
    document.getElementById("ticketFirst").innerText=firstClassTicket;
    let economyClassTicket=document.getElementById("inputEconomyClass").value;
    document.getElementById("ticketEconomy").innerText=economyClassTicket;
    document.getElementById("ticketEconomyTotal").innerText=economyClassTicket*100;
    calculateTotal();
    document.getElementById("ticketTotalVat").innerText=ticketVat;
    
});

// Remove Box Js Code 
let removeBox=document.getElementById("removeBox");
removeBox.addEventListener('click',function(){
    document.getElementById("mainDiv").style.display="block";
    document.getElementById("confirmBox").style.display="none";
});
