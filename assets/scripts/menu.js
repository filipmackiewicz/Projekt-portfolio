const menu = document.getElementById('menu');
const links = document.getElementById('menulinks');
const bar1 = document.getElementById('bar1');
const bar2 = document.getElementById('bar2');
const bar3 = document.getElementById('bar3');
menu.addEventListener("click", function(){
    bar1.classList.toggle('animate');
    bar3.classList.toggle('animate');
    bar2.classList.toggle('animate');
    links.classList.toggle('show');
})