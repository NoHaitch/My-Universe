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
        cleanup1();
    }, 2000);
}

function cleanup1(){
    document.getElementById("bg").parentNode.removeChild(document.getElementById("bg"));
    document.getElementById("title").parentNode.removeChild(document.getElementById("title"));
    document.getElementById("start").parentNode.removeChild(document.getElementById("start"));
    next();
}
function next(){
    var wrap = document.getElementById("wrapper");
    wrap.style.background = 'radial-gradient(50.83% 50.83% at 54.06% 49.17%,#050c22 0%,#030717 100%)'
    wrap.innerHTML='<img id="meimg"src="./src/me.png" alt="Francisco picture"> <div class="title" id="title"></div>'
    var title = document.getElementById('title');
    h1 = document.createElement("H1");                 
    textnode = document.createTextNode("Full Name : R-- Francisco Trianto B--");         
    h1.appendChild(textnode);       
    title.appendChild(h1);
    h1 = document.createElement("H1");                 
    textnode = document.createTextNode("Nickname : Ciko / Francisco / Francis");         
    h1.appendChild(textnode);       
    title.appendChild(h1);
    h1 = document.createElement("H1");                 
    textnode = document.createTextNode("CodeColor : DARKBLUE");         
    h1.appendChild(textnode);       
    title.appendChild(h1);
    h1 = document.createElement("H1");                 
    textnode = document.createTextNode("PASSWORD : XXXXXXX XXXXX");         
    h1.appendChild(textnode);       
    title.appendChild(h1);
    div = document.createElement("DIV"); 
    div.className="continue"; 
    div.id="continue";
    h1 = document.createElement("H1");                 
    textnode = document.createTextNode("Click to Continue...");         
    h1.appendChild(textnode);       
    div.appendChild(h1);
    wrap.appendChild(div); 
    gsap.to(".wrapper",{duration:2,opacity:'100%'});
    setTimeout(() => {
        gsap.fromTo(".continue",{opacity:'0%'},{duration:2,opacity:"100%",repeat:-1,yoyo:true,delay:0.4})
    }, 1400);    

    wrap.onclick = function(){
        clean();
    }
}
function clean(){
    document.getElementById("title").parentNode.removeChild(document.getElementById("title"));
    document.getElementById("meimg").parentNode.removeChild(document.getElementById("meimg"));
    document.getElementById("continue").parentNode.removeChild(document.getElementById("continue"));
    transition2();
}
function transition2(){
    window.clean = function(){};
    var wrap = document.getElementById("wrapper");
    wrap.innerHTML +='<img class="bg" id="bg" src="./src/background.png">';
    wrap.style.background = "unset";
    x = '<div class="content"><div class="row"><div class="cell" id="cell1" onclick="bait()"><img src="./src/Skills.png"><h1>Skills</h1></div><div class="cell" id="cell2" onclick="bait()"><img src="./src/Education.png"><h1>Education</h1></div><div class="cell" id="cell3" onclick="bait()"><img src="./src/Quotes.png"><h1>Quotes</h1></div></div><div class="row"><div class="cell" id="cell4" onclick="bait()"><img src="./src/Dream.png"><h1>Dreams</h1></div><div class="cell" id="cell5" onclick="move5()"><img src="./src/Contact.png"><h1>Contacts</h1></div><div class="cell" id="cell6" onclick="bait()"><img src="./src/Hobby.png"><h1>Hobbies</h1></div></div><div class="row"><div class="cell" id="cell7" onclick="bait()"><img src="./src/Music.png"><h1>Music</h1></div><div class="cell" id="cell8" onclick="bait()"><img src="./src/Other.png"><h1>Other Info</h1></div><div class="cell" id="cell9" onclick="move9()"><img src="./src/Games.png"><h1>Games</h1></div></div></div><div class="notif" id="notif"><video id="baitv" width="320" height="240" loop><source src="src/Jebaited Song.mp4" type="video/mp4"></video><h1>page not made!</h1><h2 onclick="closev()">X</h2></div>';
    wrap.innerHTML += x;
}

function vid(x){
    var video = document.getElementById("baitv");
    if(x==1){
        video.pause();
        video.currentTime = 0;
    }
   else{
       video.play();
   }
}

function closev(){
    vid(1);
    document.getElementById("notif").style.display = "none";
}

function bait(){
    document.getElementById("notif").style.display = "flex";
    vid(0);
}
var bmove5 = true;
positionvalue = [0,0,0,0,0,0,0,0,0];
function move5(){
    if(bmove5==true){
        bmove5 = false;
        h = document.documentElement.clientHeight;
        w = document.documentElement.clientWidth;
        var tl = gsap.timeline();
        tl.to("#cell1",{x:-w},"<");  
        tl.to("#cell4",{x:-w},"<");  
        tl.to("#cell7",{x:-w},"<");  
        tl.to("#cell3",{x:w},"<");  
        tl.to("#cell6",{x:w},"<");  
        tl.to("#cell9",{x:w},"<"); 
        tl.to("#cell2",{y:-h},"<");  
        tl.to("#cell8",{y:h},"<");  
        tl.to("#cell5",{y:-220},">0.5");
        setTimeout(() => {
            var wrap = document.getElementById("wrapper");
            wrap.innerHTML += '<div id="contact" class="contact"><div class="isi"><h2><span>Email</span> : franciscotrianto@gmail.com</h2><h2><span>Line</span> : francisco131003</h2><h2><span>Number</span> : 081262762210</h2><h2><span>ig</span> : @francisco_trianto0</h2><h2><span>github</span><a href="https://github.com/NoHaitch"> : https://github.com/NoHaitch</a></h2><h2><span>linked</span> : www.linkedin.com/in/francisco-trianto</h2></div><br><br><h2>type it you lazy bastards no coppying</h2></div>';
            wrap.innerHTML += '<div class="back" id="back">Back</div>';
            gsap.from(".back",{y:-h,duration:0.9});
            gsap.from(".contact",{y:h,duration:1.3});
            var back = document.getElementById("back");
            
            back.onclick = function(){
                gsap.to(".back",{y:-h,duration:0.7});
                gsap.to(".contact",{y:h,duration:0.9});
                gsap.to("#cell5",{y:-h,duration:0.9,delay:0.1});
                setTimeout(() => {
                    back.parentElement.removeChild(back);
                    document.getElementById("contact").parentElement.removeChild(document.getElementById("contact"));
                    var wrap = document.getElementById("wrapper");
                    wrap.innerHTML ='<img class="bg" id="bg" src="./src/background.png">';
                    wrap.style.background = "unset";
                    x = '<div class="content"><div class="row"><div class="cell" id="cell1" onclick="bait()"><img src="./src/Skills.png"><h1>Skills</h1></div><div class="cell" id="cell2" onclick="bait()"><img src="./src/Education.png"><h1>Education</h1></div><div class="cell" id="cell3" onclick="bait()"><img src="./src/Quotes.png"><h1>Quotes</h1></div></div><div class="row"><div class="cell" id="cell4" onclick="bait()"><img src="./src/Dream.png"><h1>Dreams</h1></div><div class="cell" id="cell5" onclick="move5()"><img src="./src/Contact.png"><h1>Contacts</h1></div><div class="cell" id="cell6" onclick="bait()"><img src="./src/Hobby.png"><h1>Hobbies</h1></div></div><div class="row"><div class="cell" id="cell7" onclick="bait()"><img src="./src/Music.png"><h1>Music</h1></div><div class="cell" id="cell8" onclick="bait()"><img src="./src/Other.png"><h1>Other Info</h1></div><div class="cell" id="cell9" onclick="move9()"><img src="./src/Games.png"><h1>Games</h1></div></div></div><div class="notif" id="notif"><video id="baitv" width="320" height="240" loop><source src="src/Jebaited Song.mp4" type="video/mp4"></video><h1>page not made!</h1><h2 onclick="closev()">X</h2></div>';
                    wrap.innerHTML += x;
                    gsap.from(".content",{y:h})
                    bmove5=true;
                }, 1400);
            }
        }, 2000);
    }
}

var bmove9=true;
function move9(){
    if(bmove9==true){
        bmove9 = false;
        h = document.documentElement.clientHeight;
        w = document.documentElement.clientWidth;
        var tl = gsap.timeline();
        tl.to("#cell1",{y:-h},"<");  
        tl.to("#cell2",{y:h},"<");  
        tl.to("#cell3",{y:-h},"<");  
        tl.to("#cell4",{y:-h},"<");  
        tl.to("#cell5",{y:h},"<");  
        tl.to("#cell6",{y:-h},"<");  
        tl.to("#cell7",{y:-h},"<");  
        tl.to("#cell8",{y:h},"<");
        tl.to("#cell9",{y:-470,x:-342},"<0.5"); 
        setTimeout(() => {
            var wrap = document.getElementById("wrapper");
                wrap.innerHTML += '<div id="games" class="games"><div class="isi"><h2>check it yourself :)</h2><h2>rarely play atm</h2></div><br><br><a href="https://steamcommunity.com/profiles/76561198155974986/"><h2>https://steamcommunity.com/profiles/76561198155974986/</h2></a><br><br><h2>type it you lazy bastards no coppying</h2>';
                wrap.innerHTML += '<div class="back" id="back">Back</div>';
                gsap.from(".back",{y:-h,duration:0.9});
                gsap.from(".games",{y:h,duration:1.3});
                var back = document.getElementById("back");           
                back.onclick = function(){
                    gsap.to(".back",{y:-h,duration:0.7});
                    gsap.to(".games",{y:h,duration:0.9});
                    gsap.to("#cell9",{y:-h,duration:0.9,delay:0.1});
                    setTimeout(() => {
                        back.parentElement.removeChild(back);
                        document.getElementById("games").parentElement.removeChild(document.getElementById("games"));
                        var wrap = document.getElementById("wrapper");
                        wrap.innerHTML ='<img class="bg" id="bg" src="./src/background.png">';
                        x = '<div class="content"><div class="row"><div class="cell" id="cell1" onclick="bait()"><img src="./src/Skills.png"><h1>Skills</h1></div><div class="cell" id="cell2" onclick="bait()"><img src="./src/Education.png"><h1>Education</h1></div><div class="cell" id="cell3" onclick="bait()"><img src="./src/Quotes.png"><h1>Quotes</h1></div></div><div class="row"><div class="cell" id="cell4" onclick="bait()"><img src="./src/Dream.png"><h1>Dreams</h1></div><div class="cell" id="cell5" onclick="move5()"><img src="./src/Contact.png"><h1>Contacts</h1></div><div class="cell" id="cell6" onclick="bait()"><img src="./src/Hobby.png"><h1>Hobbies</h1></div></div><div class="row"><div class="cell" id="cell7" onclick="bait()"><img src="./src/Music.png"><h1>Music</h1></div><div class="cell" id="cell8" onclick="bait()"><img src="./src/Other.png"><h1>Other Info</h1></div><div class="cell" id="cell9" onclick="move9()"><img src="./src/Games.png"><h1>Games</h1></div></div></div><div class="notif" id="notif"><video id="baitv" width="320" height="240" loop><source src="src/Jebaited Song.mp4" type="video/mp4"></video><h1>page not made!</h1><h2 onclick="closev()">X</h2></div>';
                        wrap.innerHTML += x;
                        gsap.from(".content",{y:h})
                        bmove9=true;
                    }, 1400);
                }
        }, 2000);
    }
}

