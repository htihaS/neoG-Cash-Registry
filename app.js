const billAmount = document.querySelector(".bill-amount");
const nextbutton = document.querySelector(".next")
const cashReceived = document.querySelector(".cash-received");
const checkButton = document.querySelector(".submit");
const message = document.querySelector(".message");
const nextbuttondiv = document.querySelector(".after-next-button");
const availableNotes = [2000,500,100,20,10,5,1];
const noOfNotes = document.querySelectorAll(".no-of-notes");

nextbutton.addEventListener("click",()=>{
        nextbuttondiv.style.display = "block";
})

checkButton.addEventListener("click",()=>{
    
    if(billAmount.value>0){
        message.style.display= "none";
        if(Number(billAmount.value) <= Number(cashReceived.value)){
            var cashToBeReturned = cashReceived.value - billAmount.value;
            calculateChange(cashToBeReturned);
        }else{
            message.style.display= "block";
            message.innerText = "Insuffient amount";
        }
    }else{
        message.style.display= "block";
        message.innerText = "Invalid bill";
    }
})

function calculateChange(cashToBeReturned){
    
    for(var i=0;i<availableNotes.length;i++){
        const presentnotes= Math.trunc(cashToBeReturned/availableNotes[i]);
            console.log(availableNotes[i] ,":",presentnotes);
            cashToBeReturned %= availableNotes[i];
            noOfNotes[i].innerText=presentnotes;
    }
}

