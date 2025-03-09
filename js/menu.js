const close = document.getElementById('closeMenu');
close.onclick = () => (headerMenu.style.display = 'none');

menuVisibility = () => {
    let el = document.getElementById('headerMenu');

    if (el.style.display == 'none') {
        el.style.display = 'block';
    } else {
        el.style.display = 'none';
    }
} 