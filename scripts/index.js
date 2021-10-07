gsap.registerPlugin(ExpoScaleEase, RoughEase, SlowMo);
var Button = document.getElementById('box');

Button.onclick = function (){
    Button.style.color = "white";
    Button.style.borderColor = "white";
    Button.style.backgroundColor = "black";
    var svg = document.getElementById('transition');
    svg.style.display = "inline";
    var tscale = 10;
    h = document.documentElement.clientHeight;
    w = document.documentElement.clientWidth;
    if(h>=w){
    delete w;
    tscale = h;
    delete h;
    } else{
        delete h;
        tscale = w;
        delete w;
    }
    gsap.fromTo(svg,{scale:0},{scale:tscale,duration:2});
    setTimeout(() => {
        cleanup();
    }, 2000);
    
}

function cleanup(){
    document.getElementById("bg").parentNode.removeChild(document.getElementById("bg"));
    document.getElementById("title").parentNode.removeChild(document.getElementById("title"));
    document.getElementById("start").parentNode.removeChild(document.getElementById("start"));
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }