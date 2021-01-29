
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
    let countFirstClass=document.getElementById("countFirstClass").value;
    let countFirstClassNum=parseInt(countFirstClass);
    if(isIncrease==true){
        countFirstClassNum++;
    }
    else if(isIncrease==false && countFirstClassNum>0){
        countFirstClassNum--;
    }
    document.getElementById("countFirstClass").value=countFirstClassNum;
    
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
    let countEconomyClass=document.getElementById("countEconomyClass").value;
    let countEconomyClassNum=parseInt(countEconomyClass);
    if(isIncrease==true){
        countEconomyClassNum++;
    }
    else if(isIncrease==false && countEconomyClassNum>0){
        countEconomyClassNum--;
    }
    document.getElementById("countEconomyClass").value=countEconomyClassNum;
    
}
