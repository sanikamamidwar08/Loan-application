function formValidation() {
    var name = document.form["registerform"]["name"].value
    var name = document.form["registerform"]["email"].value
    var name = document.form["registerform"]["pandcard"].value
    var name = document.form["registerform"]["loan"].value
    console.log[name];
    console.log[email];
    console.log[pancard];
    console.log[loan];
   // Loan Amount Conversion to Words
   document.getElementById("loanAmount").addEventListener("input", function () {
    document.getElementById("amountInWords").textContent = numberToWords(this.value);
});

   return false
}
function addNewCaptcha(){
    var a = Math.floor (Math.random() * 10);
    var b = Math.floor (Math.random() * 10);
document.getElementById("captcha").innerHTML = `${a} + ${b}`;
    
}

var x =Math.floor (Math.random() * 10000);
console.log(x);