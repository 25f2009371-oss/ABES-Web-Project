function main(name,roll,subject,color){
let total=0
for(let i=0; i<subject; i++){
    let c=parseFloat(prompt("Enter marks of  subject "+(i+1)+ " :"));
    total+=c;
}


let percentage=(total/(subject*100))*100;

function gra(percentage){
let grade;
if(percentage>=90){
    grade="A";
}

else if(percentage>=80){
    grade="B";
}

else if(percentage>=70){
    grade="C";
}

else if(percentage>=60){
    grade="D";
}

else if(percentage>=50){
    grade="E";
}

else if(percentage<50){
    grade="F";
}

return grade;
}

let grade=gra(percentage)

/*-
document.write("<p><b>Name of Student </b></p>"+name)
document.write("<p><b>Roll no of Student</b></p>"+roll)
document.write("<p><b>Total marks: </b></p>"+total)
document.write("<p><b>Percentage</b></p>"+percentage)
document.write("<p><b>grade</b></p>"+gra(percentage))
*/
return rndr(name,roll,total,percentage,grade,color)

}




function sbt(){
let a=document.getElementById("name").value 
let b=parseFloat(document.getElementById("roll").value) 
let c=parseFloat(document.getElementById("subjects").value)
let d=document.getElementById("color").value

alert(a+" "+b+" "+c)
return main(a,b,c,d);}

//render function
function rndr(name,roll,total,percentage,grade,color){

const element=document.getElementById("content")

element.innerHTML = "<h1>Student Report</h1>";
element.innerHTML += "<p><b>Name of Student: </b>" + name + "</p>";
element.innerHTML += "<p><b>Roll No of Student: </b>" + roll + "</p>";
element.innerHTML += "<p><b>Total Marks: </b>" + total + "</p>";
element.innerHTML += "<p><b>Percentage: </b>" + percentage + "%</p>";
element.innerHTML += "<p><b>Grade: </b>" + grade + "</p>";
}