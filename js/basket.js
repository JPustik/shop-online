var num = document.getElementById('number');
var ellipse = document.getElementById('ellipse');

var x = '0';

function addToCart() {
    x ++;
    ellipse.style.display = 'block';
    document.getElementById('number').innerHTML = x;

    if (x >= '10') {
        num.style.cssText = 'right: 182px;';
    }
}

