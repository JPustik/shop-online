document.getElementById('adress-form').addEventListener("submit", checkAdress);

function checkAdress(event) {
    event.preventDefault();
    var el = document.getElementById('adress-form');

    var country = el.country.value;
    var adress = el.adress.value;
    var postcode = el.postcode.value;
    var answer3 = document.getElementById('answer3');
    var adressSend = document.getElementById('adress-send');

    if(country == "" || adress == "" || postcode == "") {
        document.getElementById('answer3').innerHTML = "You have not entered the address";
        answer3.style.color = 'red'
        adressSend.style.cssText = 'border: 1px solid red';
    } else {
        document.getElementById('answer3').innerHTML = "The adress has been sent successfully";
        answer3.style.color = 'green';
        adressSend.style.cssText = 'border: 1px solid green';
    }
}
