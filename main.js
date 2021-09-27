//when current date equals number in calendar = Highligt number

console.log("Hello")

const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]

let currentMonth = "April"

function getCurrentMonth () {
    for (let x=0; x<months.length; x++){
            if (months[x]==currentMonth){
                return(months[x]);
            }
            
        }      
}
getCurrentMonth()

function getNextMonth (){
    for (let x=0; x<months.length; x++){
        if (months[x]==currentMonth){
            console.log("Hi")
            console.log(months[x+1]);
            
        }
        
    }      
}
getNextMonth()
