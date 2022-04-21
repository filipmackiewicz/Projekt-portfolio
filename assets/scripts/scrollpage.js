const s1 = document.getElementById('section');

function myFunction(x) {
    if (x.matches) { 
      s1.classList.add('fp-destroyed')
    } 
  }
  
  var x = window.matchMedia("(max-width: 1024px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) 