//when current date equals number in calendar = Highlight number

console.log("Hello")

const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]


const d = new Date();
let currentMonth = d.getMonth()
console.log(currentMonth)

function getCurrentMonth () {
    for (let x=0; x<months.length; x++){
            if (x==currentMonth){
                return(months[x]);
        }
    }      
}


function getNextMonth (){
    for (let x=0; x<months.length; x++){
        if (x==currentMonth){
            console.log("Hi")
            return (months[x+1]);
   
        }   
    }      
}

getNextMonth()


function getPreviousMonth (){
    for (let x=0; x<months.length; x++){
        if (months[x]==currentMonth){
            console.log("Yes")
            return (months[x-1]);
        }   
    }      
}
getPreviousMonth();

const dates = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]


function getCurrentDate () {
let currentDate = d.getDate()
return currentDate;
}

function highlightDay() {
    const today=document.getElementById(24)

}


//document.getElementById("next").onclick = getNextMonth;

//document.getElementById("prev").onclick = getPreviousMonth;


