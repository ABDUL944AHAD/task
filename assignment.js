
function pcalc() {
    var score = document.getElementById("obt").value;
    var tscore = 100;
    res = (score / tscore) * 100;
    alert(`It is ` + res + `%` );

    if(score>=90 && score<=100)
        {   grade = "A+";     
       console.log(`+A`);
       } 
       else if(score>=80 && score<=89)
        {
        grade = "A";
       console.log(`A`);
       } 
       else if(score>=70 && score<=79)
        {
       grade = "B";
       console.log(`B`);
       } 
       else if(score>=60 && score<=69)
        {
       grade = "C";
       console.log(`C`);
       } 
       else if(score>=50 && score<=59)
        {
       grade = `D`;
       console.log(`D`);
       } else if(score>=40 && score<=49)
        {
       grade = `E`;
       console.log(`E`);
       } else if(score >= 0 && score <= 39)
        {
       grade = `F`;
       console.log(`F`);
       } else 
       {
           grade = `invalid input`;
       }
       document.getElementById(`show`).innerHTML = (`You have got  ${grade} grade.`);
   
   
}

















































// function myfunction(){
//    var score = document.getElementById("obt").value;
//     var grade = '';
   
// }
