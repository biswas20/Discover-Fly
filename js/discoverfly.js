
// First Class Flight For Js Code
let addFirstClass=document.getElementById("addFirstClass");
addFirstClass.addEventListener('click',function(){
    firstClassSeatCount(true);
});
let lessFirstClass=document.getElementById("lessFirstClass");
lessFirstClass.addEventListener('click',function(){
    firstClassSeatCount(false);
});

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
    document.getElementById("ticketFNum").innerText=inputFirstClassCount;
    let ticketFTotal=inputFirstClassCount*150;
    document.getElementById("ticketFTotal").innerText='$ ' + ticketFTotal;
    calculateTotal();
    
}
// Economy Class Flight For Js Code
let addEconomyClass=document.getElementById("addEconomyClass");
addEconomyClass.addEventListener('click',function(){
    economyClassSeatCount(true);
});

let lessEconomyClass=document.getElementById("lessEconomyClass");
lessEconomyClass.addEventListener('click',function(){
   economyClassSeatCount(false);
});

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
    document.getElementById("ticketENum").innerText=inputEconomyClassCount;
    let ticketETotal=inputEconomyClassCount*100;
    document.getElementById("ticketETotal").innerText='$ ' + ticketETotal;
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
}
//Book Now Button Js Code
let bookNow=document.getElementById("bookNow");
bookNow.addEventListener('click',function(){
    document.getElementById("mainDiv").style.display="none";
    document.getElementById("confirmBox").style.display="block";
});

// Confirm Box Js Code
// let inputFirstClass=document.getElementById("inputFirstClass").value;
// let inputFirstClassCount=parseInt(inputFirstClass);
// document.getElementById("ticketFNum").innerText=inputFirstClassCount;
// let ticketFTotal=inputFirstClassCount*150;
// document.getElementById("ticketFTotal").innerText='$ ' + ticketFTotal;
// let inputEconomyClass=document.getElementById("inputEconomyClass").value;
// let inputEconomyClassCount=parseInt(inputEconomyClass);
// document.getElementById("ticketENum").innerText=inputEconomyClassCount;
// let ticketETotal=inputEconomyClassCount*100;
// document.getElementById("ticketETotal").innerText='$ ' + ticketETotal;













// function yourFlightClass(chooseClass){
//     let chooseClass=document.getElementById(chooseClass).value;
//     let chooseClassNum=parseInt(chooseClass);
//     return chooseClassNum;
// }
// First Class Flight For Js Code
// let addFirstClass=document.getElementById("addFirstClass");
// addFirstClass.addEventListener('click',function(){
//     firstClassSeatCount(true);
// });
// let lessFirstClass=document.getElementById("lessFirstClass");
// lessFirstClass.addEventListener('click',function(){
//     firstClassSeatCount(false);
// });
// function firstClassSeatCount(isIncrease){
//     let countFirstClass=document.getElementById("countFirstClass").value;
//     let countFirstClassNum=parseInt(countFirstClass);
//     if(isIncrease==true){
//         countFirstClassNum++;
//     }
//     else if(isIncrease==false && countFirstClassNum>0){
//         countFirstClassNum--;
//     }
//     document.getElementById("countFirstClass").value=countFirstClassNum;
    
// }
// let addFirstClass=document.getElementById("addFirstClass");
// addFirstClass.addEventListener('click',function(){
//     firstClassSeatCount(true);
// });
// let lessFirstClass=document.getElementById("lessFirstClass");
// lessFirstClass.addEventListener('click',function(){
//     firstClassSeatCount(false);
// });





// Economy Class Flight For Js Code
// let addEconomyClass=document.getElementById("addEconomyClass");
// addEconomyClass.addEventListener('click',function(){
//     economyClassSeatCount(true);
// });

// let lessEconomyClass=document.getElementById("lessEconomyClass");
// lessEconomyClass.addEventListener('click',function(){
//    economyClassSeatCount(false);
// });

// function economyClassSeatCount(isIncrease){
//     let countEconomyClass=document.getElementById("countEconomyClass").value;
//     let countEconomyClassNum=parseInt(countEconomyClass);
//     if(isIncrease==true){
//         countEconomyClassNum++;
//     }
//     else if(isIncrease==false && countEconomyClassNum>0){
//         countEconomyClassNum--;
//     }
//     document.getElementById("countEconomyClass").value=countEconomyClassNum;
    
// }