var inputsignin = document.querySelector("#signinEmail");
var signinPassword = document.querySelector("#signinPassword");
var signupName = document.querySelector("#signupName");
var signupEmail = document.querySelector("#signupEmail");
var signupPassword = document.querySelector("#signupPassword");
var btnsignup = document.querySelector("#signu");
var btnlog = document.querySelector("#log");
var div =document.querySelector("#div")
var logout=document.querySelector("logout")
var name1=document.querySelector("#name")
var h=document.querySelector("h")
var audioPlayer = document.getElementById("audio");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


var logininfo = [];
if (localStorage.getItem("logininfos") != null) {
    logininfo = JSON.parse(localStorage.getItem("logininfos"));
    for(i=0;i<logininfo.length;i++){
    div.innerHTML=`<h2 id="h"> welcome:[{ ${ logininfo[i].username}}]</h2> `
        name1.innerHTML=    `<h2> < ${ logininfo[i].username}></h2>` ;
       

    }
}


// Add event listeners
// btnsignup.addEventListener("click", signup);
// btnlog.addEventListener("click", login);

function signup() {
    if (emailPattern.test(signupEmail.value)) {
        var loginobj = {
            Emaile: signupEmail.value,
            pass: signupPassword.value ,
            username:signupName.value,
            // Correctly retrieve the password value
        };
        
        

        logininfo.push(loginobj);
        localStorage.setItem("logininfos", JSON.stringify(logininfo));

        alert("Signup successful!");
        window.location = "index.html"; // Redirect to index.html
    } else {
        alert("Please enter a valid email address.");
    }
    
    if(logininfo===loginobj.Emaile){
        console.log("kjhygtf")
    }
}

function login() {
    var Emailes = inputsignin.value;
    var passw = signinPassword.value;

    // Check if the user exists and the password matches
    var user = logininfo.find(user => user.Emaile === Emailes);
     
    if (user && user.pass === passw) {

        console.log("Login successful, go to homepage.");
        // Redirect or perform next actions
        window.location = "home.html"; // Example redirect
        audioPlayer.play()

        
       

    } else {
        console.log("Login failed, invalid email or password.");
        alert("Invalid email or password.");
    }


   }

function out(){
    window.location="sighn.html"
}


function hover(){
    div.classList.add("bg-light")
    audioPlayer.play()


}
function hovernone(){
    div.classList.remove("bg-light")
}