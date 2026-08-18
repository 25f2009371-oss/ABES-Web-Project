let name=prompt("Enter name of student: ");
let roll=parseFloat(prompt("Enter roll no: "));
let subject=parseInt(prompt("Enter no of subject: "));
let total=0;
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

gra(percentage);    

document.write("<p><b>Name of Student </b></p>"+name)
document.write("<p><b>Roll no of Student</b></p>"+roll)
document.write("<p><b>Total marks: </b></p>"+total)
document.write("<p><b>Percentage</b></p>"+percentage)
document.write("<p><b>grade</b></p>"+gra(percentage))
