
// alert("Assalamu Alaikum");
// alert("My zakat calc");

// //zakat = total wealth * 2.5%
// tw = prompt("Enter your total wealth");
// zakat = (tw * 2.5) / 100;
// alert("Your zakat is " + zakat);
// document.write("Your zakat is " + zakat + "<br>");
// console.log("Your zakat is " + zakat + "<br>");

// //calculation for ushaar = 10% of the total wealth
// alert("My ushaar calc");
// tw = prompt("Enter your total wealth");
// ushaar = (tw * 10) / 100;
// alert("Your ushaar is " + ushaar);
// document.write("Your ushaar is " + ushaar + "<br>");
// console.log("Your ushaar is " + ushaar + "<br>");

// //calculation for sadqa = 5% of the total wealth
// alert("my sadqa calc");
// tw = prompt("Enter your total wealth");
// sadqa = (tw * 5) / 100;
// alert("Your sadqa is " + sadqa);
// document.write("Your sadqa is " + sadqa + "<br>");
// console.log("Your sadqa is "+ sadqa + "<br>");


function big() {
    var pickobt_marks = document.getElementById("obt").value;
    var picktm_marks = document.getElementById("total").value;

    res = (pickobt_marks / picktm_marks) * 100;
    alert(res);
    //it will show the result in the div
   document.getElementById("ab").innerHTML = ("You have got it " + res + "%" );
    console.log(res);

}

