


function Loadingscreen(){
    var squares = 18;

    var deg = 360 / squares;

    var num =0;
    while(squares > num){
       document.write('<div class="square" id="' + s + num + '"></div>');
       num + 1;
    }
}