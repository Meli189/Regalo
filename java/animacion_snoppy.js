/*var nose = $('#nose');
nose.on('click', function(e){
  var $ear = $('#ear');
  var $brow = $('#brow');
  $ear.css("background-color", "blue");
  $brow.css({"width": "13px", "height": "2px"});
  timer();
})*/

function timer (){
  setTimeout(function(){
    $('#ear').css("background-color",     "black");
    $('#brow').css({"width": "7px", "height": ".5px"})
  }, 3000);  
}

document.addEventListener("DOMContentLoaded", function () {
    var nose = document.getElementById("nose");
    var arm = document.getElementById("arm");
    var hand = document.getElementById("hand");
    var handline1 = document.getElementById("handline1");
    var handline2 = document.getElementById("handline2");
    var ear = document.getElementById("ear");
    var cartaFranja = document.querySelector(".carta-franja");
    var cartaTexto = document.querySelector(".carta-texto");

    nose.addEventListener("click", function () {


        // Cambiar color de las orejas
        ear.style.backgroundColor = "red";
        
        // Quitar la franja de la carta
        cartaFranja.style.display = "none";
        cartaTexto.style.display = "block";
    });
});
