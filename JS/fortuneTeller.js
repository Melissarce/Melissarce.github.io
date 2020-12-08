// JavaScript Document
function tellFortune(numKids, partner, location, jobTitle) {
    let future = "You will be a " + jobTitle + " in " + location + ", and married to " + partner + " with " + numKids + " kids."
    return(future)
    
}
   
tellFortune(3, 'Alex', 'Mexico', "Designer");
tellFortune(4, 'Dora', 'Canada', "Private Invistigator");
tellFortune(0, 'Orlando', 'Germany', "Web Developer");
document.getElementById("fortune1").innerHTML = tellFortune(3, 'Alex', 'Mexico', "Designer");
document.getElementById("fortune2").innerHTML = tellFortune(4, 'Dora', 'Canada', "Private Invistigator");
document.getElementById("fortune3").innerHTML = tellFortune(0, 'Orlando', 'Germany', "Web Developer");
