document.getElementById('main-profile').addEventListener("submit", checkForm);
const myForm = document.getElementById('main-profile');


function checkForm(event) {
    event.preventDefault();    
    const name = myForm.name.value;
    const name2 = myForm.name2.value;
    const state = myForm.state.value;
    const email = myForm.email.value;
    const pass = myForm.pass.value;


    let fail = "";

    if(name == "" ||  name2 == "" ||  state == "" ||  email == "" ||pass == "") {
        fail = "Fill in all the fields";
    } else if(name.length <= 1 || name2.length <= 1) {
        fail = "Enter the correct name";
    } else if(pass.split("&").length > 1) 
        fail = "Invalid password";

    if(fail != "") {
        answer2.style.color = 'red';
        document.getElementById('answer2').innerHTML = fail;
    } else {  
        answer2.style.color = 'green';
        document.getElementById('answer2').innerHTML = "The data has been sent successfully";
    }
}

myForm.addEventListener("submit", async (e)=>{
    e.preventDefault();

    const name = myForm.name.value;
    const name2 = myForm.name2.value;
    const state = myForm.state.value;
    const email = myForm.email.value;
    const pass = myForm.pass.value;
 
    const response = await fetch("js/product", {
              method: "POST", 
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({name: name, lastName: name2, state: state, email: email, pass: pass})
    });

    const responseText = await response.text();
    console.log(responseText);
});