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
var bclean = false;
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
    setTimeout(() => {
        bclean = true;
        wrap.onclick = function(){
            clean();
        }
    }, 700);  
    
}
function clean(){
    if(bclean == true){
        document.getElementById("title").parentNode.removeChild(document.getElementById("title"));
        document.getElementById("meimg").parentNode.removeChild(document.getElementById("meimg"));
        document.getElementById("continue").parentNode.removeChild(document.getElementById("continue"));
        transition2();
    }
}
function transition2(){
    bclean = false;
    var wrap = document.getElementById("wrapper");
    wrap.innerHTML +='<img class="bg" id="bg" src="./src/background.png">';
    wrap.style.background = "unset";
    x = '<div class="content"><div class="row"><div class="cell" id="cell1" onclick="bait()"><img src="./src/Skills.png"><h1>Skills</h1></div><div class="cell" id="cell2" onclick="bait()"><img src="./src/Education.png"><h1>Education</h1></div><div class="cell" id="cell3" onclick="bait()"><img src="./src/Quotes.png"><h1>Quotes</h1></div></div><div class="row"><div class="cell" id="cell4" onclick="bait()"><img src="./src/Dream.png"><h1>Dreams</h1></div><div class="cell" id="cell5" onclick="move5()"><img src="./src/Contact.png"><h1>Contacts</h1></div><div class="cell" id="cell6" onclick="move6()"><img src="./src/Hobby.png"><h1>Hobbies</h1></div></div><div class="row"><div class="cell" id="cell7" onclick="bait()"><img src="./src/Music.png"><h1>Music</h1></div><div class="cell" id="cell8" onclick="bait()"><img src="./src/Other.png"><h1>Other Info</h1></div><div class="cell" id="cell9" onclick="move9()"><img src="./src/Games.png"><h1>Games</h1></div></div></div><div class="notif" id="notif"><video id="baitv" width="320" height="240" loop><source src="src/Jebaited Song.mp4" type="video/mp4"></video><h1>page not made!</h1><h2 onclick="closev()">X</h2></div><div class="bhome" id="bhome" onclick="backhome()"><h1>HOME</h1></div>';
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
        tl.to("#bhome",{y:-h},"<");
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
                    x = '<div class="content"><div class="row"><div class="cell" id="cell1" onclick="bait()"><img src="./src/Skills.png"><h1>Skills</h1></div><div class="cell" id="cell2" onclick="bait()"><img src="./src/Education.png"><h1>Education</h1></div><div class="cell" id="cell3" onclick="bait()"><img src="./src/Quotes.png"><h1>Quotes</h1></div></div><div class="row"><div class="cell" id="cell4" onclick="bait()"><img src="./src/Dream.png"><h1>Dreams</h1></div><div class="cell" id="cell5" onclick="move5()"><img src="./src/Contact.png"><h1>Contacts</h1></div><div class="cell" id="cell6" onclick="move6()"><img src="./src/Hobby.png"><h1>Hobbies</h1></div></div><div class="row"><div class="cell" id="cell7" onclick="bait()"><img src="./src/Music.png"><h1>Music</h1></div><div class="cell" id="cell8" onclick="bait()"><img src="./src/Other.png"><h1>Other Info</h1></div><div class="cell" id="cell9" onclick="move9()"><img src="./src/Games.png"><h1>Games</h1></div></div></div><div class="notif" id="notif"><video id="baitv" width="320" height="240" loop><source src="src/Jebaited Song.mp4" type="video/mp4"></video><h1>page not made!</h1><h2 onclick="closev()">X</h2></div><div  onclick="backhome()" class="bhome" id="bhome"><h1>HOME</h1></div>';
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
        tl.to("#bhome",{y:-h},"<");
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
                        x = '<div class="content"><div class="row"><div class="cell" id="cell1" onclick="bait()"><img src="./src/Skills.png"><h1>Skills</h1></div><div class="cell" id="cell2" onclick="bait()"><img src="./src/Education.png"><h1>Education</h1></div><div class="cell" id="cell3" onclick="bait()"><img src="./src/Quotes.png"><h1>Quotes</h1></div></div><div class="row"><div class="cell" id="cell4" onclick="bait()"><img src="./src/Dream.png"><h1>Dreams</h1></div><div class="cell" id="cell5" onclick="move5()"><img src="./src/Contact.png"><h1>Contacts</h1></div><div class="cell" id="cell6" onclick="move6()"><img src="./src/Hobby.png"><h1>Hobbies</h1></div></div><div class="row"><div class="cell" id="cell7" onclick="bait()"><img src="./src/Music.png"><h1>Music</h1></div><div class="cell" id="cell8" onclick="bait()"><img src="./src/Other.png"><h1>Other Info</h1></div><div class="cell" id="cell9" onclick="move9()"><img src="./src/Games.png"><h1>Games</h1></div></div></div><div class="notif" id="notif"><video id="baitv" width="320" height="240" loop><source src="src/Jebaited Song.mp4" type="video/mp4"></video><h1>page not made!</h1><h2 onclick="closev()">X</h2></div><div  onclick="backhome()" class="bhome" id="bhome"><h1>HOME</h1></div>';
                        wrap.innerHTML += x;
                        gsap.from(".content",{y:h})
                        bmove9=true;
                    }, 1400);
                }
        }, 2000);
    }
}

var bmove6 = true;
function move6(){
    if(bmove9==true){
        bmove9 = false;
        h = document.documentElement.clientHeight;
        w = document.documentElement.clientWidth;
        var tl = gsap.timeline();
        tl.to("#bhome",{y:-h},"<");
        tl.to("#cell1",{x:-w},"<");  
        tl.to("#cell2",{y:-h},"<");  
        tl.to("#cell3",{x:w},"<");  
        tl.to("#cell4",{x:-w},"<");  
        tl.to("#cell5",{y:-h},"<");  
        tl.to("#cell9",{x:w},"<"); 
        tl.to("#cell7",{x:-w},"<");  
        tl.to("#cell8",{y:-h},"<");
        tl.to("#cell6",{y:-235,x:-342},"<0.5"); 
        setTimeout(() => {
            var wrap = document.getElementById("wrapper");
            wrap.innerHTML += '<div id="hobby" class="hobby"><div class="isi"><h2>Play <span>games</span> (as everyone does)</h2><br><h2><span>chess</span></h2><br><h2><span>programing</span></h2><br><h2>making <span>music</span> (if i have the free-est of time)</h2></div></div>';
            wrap.innerHTML += '<div class="back" id="back">Back</div>';
            gsap.from(".back",{y:-h,duration:0.9});
            gsap.from(".hobby",{y:h,duration:1.3});
            var back = document.getElementById("back");           
                back.onclick = function(){
                    gsap.to(".back",{y:-h,duration:0.7});
                    gsap.to(".hobby",{y:h,duration:0.9});
                    gsap.to("#cell6",{y:-h,duration:0.9,delay:0.1});
                    setTimeout(() => {
                        back.parentElement.removeChild(back);
                        document.getElementById("hobby").parentElement.removeChild(document.getElementById("hobby"));
                        var wrap = document.getElementById("wrapper");
                        wrap.innerHTML ='<img class="bg" id="bg" src="./src/background.png">';
                        x = '<div class="content"><div class="row"><div class="cell" id="cell1" onclick="bait()"><img src="./src/Skills.png"><h1>Skills</h1></div><div class="cell" id="cell2" onclick="bait()"><img src="./src/Education.png"><h1>Education</h1></div><div class="cell" id="cell3" onclick="bait()"><img src="./src/Quotes.png"><h1>Quotes</h1></div></div><div class="row"><div class="cell" id="cell4" onclick="bait()"><img src="./src/Dream.png"><h1>Dreams</h1></div><div class="cell" id="cell5" onclick="move5()"><img src="./src/Contact.png"><h1>Contacts</h1></div><div class="cell" id="cell6" onclick="move6()"><img src="./src/Hobby.png"><h1>Hobbies</h1></div></div><div class="row"><div class="cell" id="cell7" onclick="bait()"><img src="./src/Music.png"><h1>Music</h1></div><div class="cell" id="cell8" onclick="bait()"><img src="./src/Other.png"><h1>Other Info</h1></div><div class="cell" id="cell9" onclick="move9()"><img src="./src/Games.png"><h1>Games</h1></div></div></div><div class="notif" id="notif"><video id="baitv" width="320" height="240" loop><source src="src/Jebaited Song.mp4" type="video/mp4"></video><h1>page not made!</h1><h2 onclick="closev()">X</h2></div><div  onclick="backhome()" class="bhome" id="bhome"><h1>HOME</h1></div>';
                        wrap.innerHTML += x;
                        gsap.from(".content",{y:h})
                        bmove9=true;
                    }, 1400);
                }
        }, 2000);
    }
}

function backhome(){
    var wrap = document.getElementById("wrapper");
    z = '<img class="bg" id="bg" src="./src/background.png"><div class="bigtitle" id="title"><svg width="1410" height="274" viewBox="0 0 1410 274" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_i)"><path d="M193.483 0L196.285 10.3204L205.354 10.3204L198.017 16.6987L200.82 27.0191L193.483 20.6408L186.145 27.0191L188.948 16.6987L181.611 10.3204L190.68 10.3204L193.483 0Z" fill="#FAFF00"/><path d="M218.448 59.7433L221.25 70.0636L230.319 70.0636L222.982 76.442L225.785 86.7624L218.448 80.384L211.111 86.7624L213.913 76.442L206.576 70.0636L215.645 70.0636L218.448 59.7433Z" fill="#FAFF00"/><path d="M243.413 59.7433L246.215 70.0636L255.284 70.0636L247.947 76.442L250.75 86.7624L243.413 80.384L236.076 86.7624L238.878 76.442L231.541 70.0636L240.61 70.0636L243.413 59.7433Z" fill="#FAFF00"/><path d="M218.448 0L221.25 10.3204L230.319 10.3204L222.982 16.6987L225.785 27.0191L218.448 20.6408L211.111 27.0191L213.913 16.6987L206.576 10.3204L215.645 10.3204L218.448 0Z" fill="#FAFF00"/><path d="M243.413 0L246.215 10.3204L255.284 10.3204L247.947 16.6987L250.75 27.0191L243.413 20.6408L236.076 27.0191L238.878 16.6987L231.541 10.3204L240.61 10.3204L243.413 0Z" fill="#FAFF00"/><path d="M193.483 29.8716L196.285 40.192L205.354 40.192L198.017 46.5703L200.82 56.8907L193.483 50.5124L186.145 56.8907L188.948 46.5703L181.611 40.192L190.68 40.192L193.483 29.8716Z" fill="#FAFF00"/><path d="M193.483 59.7433L196.285 70.0636L205.354 70.0636L198.017 76.442L200.82 86.7624L193.483 80.384L186.145 86.7624L188.948 76.442L181.611 70.0636L190.68 70.0636L193.483 59.7433Z" fill="#FAFF00"/><path d="M193.483 89.6148L196.285 99.9352L205.354 99.9352L198.017 106.314L200.82 116.634L193.483 110.256L186.145 116.634L188.948 106.314L181.611 99.9352L190.68 99.9352L193.483 89.6148Z" fill="#FAFF00"/><path d="M193.483 119.486L196.285 129.807L205.354 129.807L198.017 136.185L200.82 146.506L193.483 140.127L186.145 146.506L188.948 136.185L181.611 129.807L190.68 129.807L193.483 119.486Z" fill="#FAFF00"/></g><g filter="url(#filter1_i)"><path d="M864.998 0L867.801 10.3204L876.87 10.3204L869.533 16.6987L872.335 27.0191L864.998 20.6408L857.661 27.0191L860.464 16.6987L853.127 10.3204L862.196 10.3204L864.998 0Z" fill="#FAFF00"/><path d="M864.998 29.8716L867.801 40.192L876.87 40.192L869.533 46.5703L872.335 56.8907L864.998 50.5124L857.661 56.8907L860.464 46.5703L853.127 40.192L862.196 40.192L864.998 29.8716Z" fill="#FAFF00"/><path d="M864.998 59.7433L867.801 70.0636L876.87 70.0636L869.533 76.442L872.335 86.7624L864.998 80.384L857.661 86.7624L860.464 76.442L853.127 70.0636L862.196 70.0636L864.998 59.7433Z" fill="#FAFF00"/><path d="M864.998 89.6148L867.801 99.9352L876.87 99.9352L869.533 106.314L872.335 116.634L864.998 110.256L857.661 116.634L860.464 106.314L853.127 99.9352L862.196 99.9352L864.998 89.6148Z" fill="#FAFF00"/><path d="M864.998 119.486L867.801 129.807L876.87 129.807L869.533 136.185L872.335 146.506L864.998 140.127L857.661 146.506L860.464 136.185L853.127 129.807L862.196 129.807L864.998 119.486Z" fill="#FAFF00"/></g><g filter="url(#filter2_i)"><path d="M332.9 59.7433L335.674 70.0636L344.651 70.0636L337.388 76.442L340.163 86.7624L332.9 80.384L325.637 86.7624L328.411 76.442L321.148 70.0636L330.126 70.0636L332.9 59.7433Z" fill="#FAFF00"/><path d="M365.026 119.486L367.801 129.807L376.778 129.807L369.515 136.185L372.289 146.506L365.026 140.127L357.764 146.506L360.538 136.185L353.275 129.807L362.252 129.807L365.026 119.486Z" fill="#FAFF00"/><path d="M308.187 0L310.961 10.3204L319.939 10.3204L312.676 16.6987L315.45 27.0191L308.187 20.6408L300.924 27.0191L303.698 16.6987L296.435 10.3204L305.413 10.3204L308.187 0Z" fill="#FAFF00"/><path d="M352.67 89.6148L355.444 99.9352L364.422 99.9352L357.159 106.314L359.933 116.634L352.67 110.256L345.407 116.634L348.181 106.314L340.918 99.9352L349.896 99.9352L352.67 89.6148Z" fill="#FAFF00"/><path d="M308.187 29.8716L310.961 40.192L319.939 40.192L312.676 46.5703L315.45 56.8907L308.187 50.5124L300.924 56.8907L303.698 46.5703L296.435 40.192L305.413 40.192L308.187 29.8716Z" fill="#FAFF00"/><path d="M308.187 59.7433L310.961 70.0636L319.939 70.0636L312.676 76.442L315.45 86.7624L308.187 80.384L300.924 86.7624L303.698 76.442L296.435 70.0636L305.413 70.0636L308.187 59.7433Z" fill="#FAFF00"/>';
    x= '<path d="M308.187 89.6148L310.961 99.9352L319.939 99.9352L312.676 106.314L315.45 116.634L308.187 110.256L300.924 116.634L303.698 106.314L296.435 99.9352L305.413 99.9352L308.187 89.6148Z" fill="#FAFF00"/><path d="M308.187 119.486L310.961 129.807L319.939 129.807L312.676 136.185L315.45 146.506L308.187 140.127L300.924 146.506L303.698 136.185L296.435 129.807L305.413 129.807L308.187 119.486Z" fill="#FAFF00"/><path d="M338.666 0L341.44 10.3204L350.418 10.3204L343.155 16.6987L345.929 27.0191L338.666 20.6408L331.403 27.0191L334.177 16.6987L326.914 10.3204L335.892 10.3204L338.666 0Z" fill="#FAFF00"/><path d="M365.026 14.9358L367.801 25.2562L376.778 25.2562L369.515 31.6345L372.289 41.9549L365.026 35.5766L357.764 41.9549L360.538 31.6345L353.275 25.2562L362.252 25.2562L365.026 14.9358Z" fill="#FAFF00"/><path d="M364.203 44.8074L366.977 55.1278L375.954 55.1278L368.691 61.5062L371.466 71.8266L364.203 65.4482L356.94 71.8266L359.714 61.5062L352.451 55.1278L361.428 55.1278L364.203 44.8074Z" fill="#FAFF00"/></g><g filter="url(#filter3_i)"><path d="M582.079 0L584.881 10.3204L593.95 10.3204L586.613 16.6987L589.416 27.0191L582.079 20.6408L574.742 27.0191L577.544 16.6987L570.207 10.3204L579.276 10.3204L582.079 0Z" fill="#FAFF00"/><path d="M582.079 29.8716L584.881 40.192L593.95 40.192L586.613 46.5703L589.416 56.8907L582.079 50.5124L574.742 56.8907L577.544 46.5703L570.207 40.192L579.276 40.192L582.079 29.8716Z" fill="#FAFF00"/><path d="M582.079 59.7433L584.881 70.0636L593.95 70.0636L586.613 76.442L589.416 86.7624L582.079 80.384L574.742 86.7624L577.544 76.442L570.207 70.0636L579.276 70.0636L582.079 59.7433Z" fill="#FAFF00"/><path d="M582.079 89.6148L584.881 99.9352L593.95 99.9352L586.613 106.314L589.416 116.634L582.079 110.256L574.742 116.634L577.544 106.314L570.207 99.9352L579.276 99.9352L582.079 89.6148Z" fill="#FAFF00"/><path d="M582.079 119.486L584.881 129.807L593.95 129.807L586.613 136.185L589.416 146.506L582.079 140.127L574.742 146.506L577.544 136.185L570.207 129.807L579.276 129.807L582.079 119.486Z" fill="#FAFF00"/><path d="M646.156 0L648.958 10.3204L658.027 10.3204L650.69 16.6987L653.493 27.0191L646.156 20.6408L638.819 27.0191L641.621 16.6987L634.284 10.3204L643.353 10.3204L646.156 0Z" fill="#FAFF00"/<path d="M646.156 29.8716L648.958 40.192L658.027 40.192L650.69 46.5703L653.493 56.8907L646.156 50.5124L638.819 56.8907L641.621 46.5703L634.284 40.192L643.353 40.192L646.156 29.8716Z" fill="#FAFF00"/><path d="M646.156 59.7433L648.958 70.0636L658.027 70.0636L650.69 76.442L653.493 86.7624L646.156 80.384L638.819 86.7624L641.621 76.442L634.284 70.0636L643.353 70.0636L646.156 59.7433Z" fill="#FAFF00"/><path d="M646.156 89.6148L648.958 99.9352L658.027 99.9352L650.69 106.314L653.493 116.634L646.156 110.256L638.819 116.634L641.621 106.314L634.284 99.9352L643.353 99.9352L646.156 89.6148Z" fill="#FAFF00"/><path d="M646.156 119.486L648.958 129.807L658.027 129.807L650.69 136.185L653.493 146.506L646.156 140.127L638.819 146.506L641.621 136.185L634.284 129.807L643.353 129.807L646.156 119.486Z" fill="#FAFF00"/><path d="M622.023 74.679L624.825 84.9994L633.894 84.9994L626.557 91.3778L629.36 101.698L622.023 95.3198L614.686 101.698L617.488 91.3778L610.151 84.9994L619.22 84.9994L622.023 74.679Z" fill="#FAFF00"/><path d="M607.044 44.8074L609.846 55.1278L618.915 55.1278L611.578 61.5062L614.381 71.8266L607.044 65.4482L599.707 71.8266L602.509 61.5062L595.172 55.1278L604.241 55.1278L607.044 44.8074Z" fill="#FAFF00"/></g><g filter="url(#filter4_i)"><path d="M711.056 59.7433L713.858 70.0636L722.928 70.0636L715.59 76.442L718.393 86.7624L711.056 80.384L703.719 86.7624L706.521 76.442L699.184 70.0636L708.253 70.0636L711.056 59.7433Z" fill="#FAFF00"/><path d="M720.21 24.893L723.012 35.2134L732.081 35.2134L724.744 41.5917L727.547 51.9121L720.21 45.5338L712.873 51.9121L715.675 41.5917L708.338 35.2134L717.407 35.2134L720.21 24.893Z" fill="#FAFF00"/><path d="M800.098 19.9144L802.9 30.2348L811.969 30.2348L804.632 36.6131L807.435 46.9335L800.098 40.5551L792.761 46.9335L795.563 36.6131L788.226 30.2348L797.295 30.2348L800.098 19.9144Z" fill="#FAFF00"/><path d="M720.21 99.572L723.012 109.892L732.081 109.892L724.744 116.271L727.547 126.591L720.21 120.213L712.873 126.591L715.675 116.271L708.338 109.892L717.407 109.892L720.21 99.572Z" fill="#FAFF00"/><path d="M775.133 0L777.935 10.3204L787.004 10.3204L779.667 16.6987L782.47 27.0191L775.133 20.6408L767.796 27.0191L770.598 16.6987L763.261 10.3204L772.33 10.3204L775.133 0Z" fill="#FAFF00"/><path d="M745.175 0L747.977 10.3204L757.046 10.3204L749.709 16.6987L752.512 27.0191L745.175 20.6408L737.838 27.0191L740.64 16.6987L733.303 10.3204L742.372 10.3204L745.175 0Z" fill="#FAFF00"/><path d="M745.175 119.486L747.977 129.807L757.046 129.807L749.709 136.185L752.512 146.506L745.175 140.127L737.838 146.506L740.64 136.185L733.303 129.807L742.372 129.807L745.175 119.486Z" fill="#FAFF00"/><path d="M775.133 119.486L777.935 129.807L787.004 129.807L779.667 136.185L782.47 146.506L775.133 140.127L767.796 146.506L770.598 136.185L763.261 129.807L772.33 129.807L775.133 119.486Z" fill="#FAFF00"/><path d="M800.098 99.572L802.9 109.892L811.969 109.892L804.632 116.271L807.435 126.591L800.098 120.213L792.761 126.591L795.563 116.271L788.226 109.892L797.295 109.892L800.098 99.572Z" fill="#FAFF00"/></g><g filter="url(#filter5_i)"><path d="M1206.99 59.7433L1209.8 70.0636L1218.86 70.0636L1211.53 76.442L1214.33 86.7624L1206.99 80.384L1199.66 86.7624L1202.46 76.442L1195.12 70.0636L1204.19 70.0636L1206.99 59.7433Z" fill="#FAFF00"/><path d="M1216.15 24.893L1218.95 35.2134L1228.02 35.2134L1220.68 41.5917L1223.48 51.9121L1216.15 45.5338L1208.81 51.9121L1211.61 41.5917L1204.28 35.2134L1213.34 35.2134L1216.15 24.893Z" fill="#FAFF00"/><path d="M1296.03 19.9144L1298.84 30.2348L1307.91 30.2348L1300.57 36.6131L1303.37 46.9335L1296.03 40.5551L1288.7 46.9335L1291.5 36.6131L1284.16 30.2348L1293.23 30.2348L1296.03 19.9144Z" fill="#FAFF00"/><path d="M1216.15 99.572L1218.95 109.892L1228.02 109.892L1220.68 116.271L1223.48 126.591L1216.15 120.213L1208.81 126.591L1211.61 116.271L1204.28 109.892L1213.34 109.892L1216.15 99.572Z" fill="#FAFF00"/><path d="M1271.07 0L1273.87 10.3204L1282.94 10.3204L1275.6 16.6987L1278.41 27.0191L1271.07 20.6408L1263.73 27.0191L1266.54 16.6987L1259.2 10.3204L1268.27 10.3204L1271.07 0Z" fill="#FAFF00"/><path d="M1241.11 0L1243.91 10.3204L1252.98 10.3204L1245.65 16.6987L1248.45 27.0191L1241.11 20.6408L1233.77 27.0191L1236.58 16.6987L1229.24 10.3204L1238.31 10.3204L1241.11 0Z" fill="#FAFF00"/><path d="M1241.11 119.486L1243.91 129.807L1252.98 129.807L1245.65 136.185L1248.45 146.506L1241.11 140.127L1233.77 146.506L1236.58 136.185L1229.24 129.807L1238.31 129.807L1241.11 119.486Z" fill="#FAFF00"/><path d="M1271.07 119.486L1273.87 129.807L1282.94 129.807L1275.6 136.185L1278.41 146.506L1271.07 140.127L1263.73 146.506L1266.54 136.185L1259.2 129.807L1268.27 129.807L1271.07 119.486Z" fill="#FAFF00"/><path d="M1296.03 99.572L1298.84 109.892L1307.91 109.892L1300.57 116.271L1303.37 126.591L1296.03 120.213L1288.7 126.591L1291.5 116.271L1284.16 109.892L1293.23 109.892L1296.03 99.572Z" fill="#FAFF00"/><path d="M1308.52 59.7433L1311.32 70.0636L1320.39 70.0636L1313.05 76.442L1315.85 86.7624L1308.52 80.384L1301.18 86.7624L1303.98 76.442L1296.65 70.0636L1305.71 70.0636L1308.52 59.7433Z" fill="#FAFF00"/></g><g filter="url(#filter6_i)"><path d="M1053.05 59.7433L1055.85 70.0636L1064.92 70.0636L1057.59 76.442L1060.39 86.7624L1053.05 80.384L1045.71 86.7624L1048.52 76.442L1041.18 70.0636L1050.25 70.0636L1053.05 59.7433Z" fill="#FAFF00"/><path d="M1062.2 24.893L1065.01 35.2134L1074.08 35.2134L1066.74 41.5917L1069.54 51.9121L1062.2 45.5338L1054.87 51.9121L1057.67 41.5917L1050.33 35.2134L1059.4 35.2134L1062.2 24.893Z" fill="#FAFF00"/><path d="M1142.09 19.9144L1144.9 30.2348L1153.96 30.2348L1146.63 36.6131L1149.43 46.9335L1142.09 40.5551L1134.76 46.9335L1137.56 36.6131L1130.22 30.2348L1139.29 30.2348L1142.09 19.9144Z" fill="#FAFF00"/><path d="M1062.2 99.572L1065.01 109.892L1074.08 109.892L1066.74 116.271L1069.54 126.591L1062.2 120.213L1054.87 126.591L1057.67 116.271L1050.33 109.892L1059.4 109.892L1062.2 99.572Z" fill="#FAFF00"/><path d="M1117.13 0L1119.93 10.3204L1129 10.3204L1121.66 16.6987L1124.46 27.0191L1117.13 20.6408L1109.79 27.0191L1112.59 16.6987L1105.26 10.3204L1114.33 10.3204L1117.13 0Z" fill="#FAFF00"/><path d="M1087.17 0L1089.97 10.3204L1099.04 10.3204L1091.7 16.6987L1094.51 27.0191L1087.17 20.6408L1079.83 27.0191L1082.64 16.6987L1075.3 10.3204L1084.37 10.3204L1087.17 0Z" fill="#FAFF00"/><path d="M1087.17 119.486L1089.97 129.807L1099.04 129.807L1091.7 136.185L1094.51 146.506L1087.17 140.127L1079.83 146.506L1082.64 136.185L1075.3 129.807L1084.37 129.807L1087.17 119.486Z" fill="#FAFF00"/><path d="M1117.13 119.486L1119.93 129.807L1129 129.807L1121.66 136.185L1124.46 146.506L1117.13 140.127L1109.79 146.506L1112.59 136.185L1105.26 129.807L1114.33 129.807L1117.13 119.486Z" fill="#FAFF00"/><path d="M1142.09 99.572L1144.9 109.892L1153.96 109.892L1146.63 116.271L1149.43 126.591L1142.09 120.213L1134.76 126.591L1137.56 116.271L1130.22 109.892L1139.29 109.892L1142.09 99.572Z" fill="#FAFF00"/></g><g filter="url(#filter7_i)"><path d="M983.99 79.6576L986.792 89.978L995.861 89.978L988.524 96.3563L991.327 106.677L983.99 100.298L976.652 106.677L979.455 96.3563L972.118 89.978L981.187 89.978L983.99 79.6576Z" fill="#FAFF00"/><path d="M929.899 109.529L932.701 119.85L941.77 119.85L934.433 126.228L937.236 136.548L929.899 130.17L922.562 136.548L925.364 126.228L918.027 119.85L927.096 119.85L929.899 109.529Z" fill="#FAFF00"/><path d="M959.025 69.7005L961.827 80.0209L970.896 80.0209L963.559 86.3992L966.362 96.7196L959.025 90.3413L951.687 96.7196L954.49 86.3992L947.153 80.0209L956.222 80.0209L959.025 69.7005Z" fill="#FAFF00"/><path d="M988.15 114.508L990.953 124.828L1000.02 124.828L992.685 131.207L995.487 141.527L988.15 135.149L980.813 141.527L983.616 131.207L976.279 124.828L985.348 124.828L988.15 114.508Z" fill="#FAFF00"/><path d="M929.899 19.9144L932.701 30.2348L941.77';
    y= '30.2348L934.433 36.6131L937.236 46.9335L929.899 40.5551L922.562 46.9335L925.364 36.6131L918.027 30.2348L927.096 30.2348L929.899 19.9144Z" fill="#FAFF00"/><path d="M959.025 119.486L961.827 129.807L970.896 129.807L963.559 136.185L966.362 146.506L959.025 140.127L951.687 146.506L954.49 136.185L947.153 129.807L956.222 129.807L959.025 119.486Z" fill="#FAFF00"/><path d="M983.99 19.9144L986.792 30.2348L995.861 30.2348L988.524 36.6131L991.327 46.9335L983.99 40.5551L976.652 46.9335L979.455 36.6131L972.118 30.2348L981.187 30.2348L983.99 19.9144Z" fill="#FAFF00"/><path d="M929.899 59.7433L932.701 70.0636L941.77 70.0636L934.433 76.442L937.236 86.7624L929.899 80.384L922.562 86.7624L925.364 76.442L918.027 70.0636L927.096 70.0636L929.899 59.7433Z" fill="#FAFF00"/><path d="M959.025 0L961.827 10.3204L970.896 10.3204L963.559 16.6987L966.362 27.0191L959.025 20.6408L951.687 27.0191L954.49 16.6987L947.153 10.3204L956.222 10.3204L959.025 0Z" fill="#FAFF00"/></g><g filter="url(#filter8_i)"><path d="M437.29 89.6148L440.093 99.9352L449.162 99.9352L441.825 106.314L444.627 116.634L437.29 110.256L429.953 116.634L432.756 106.314L425.419 99.9352L434.488 99.9352L437.29 89.6148Z" fill="#FAFF00"/><path d="M479.731 29.8716L482.533 40.192L491.602 40.192L484.265 46.5703L487.068 56.8907L479.731 50.5124L472.394 56.8907L475.196 46.5703L467.859 40.192L476.928 40.192L479.731 29.8716Z" fill="#FAFF00"/><path d="M517.178 119.486L519.981 129.807L529.05 129.807L521.713 136.185L524.515 146.506L517.178 140.127L509.841 146.506L512.644 136.185L505.307 129.807L514.376 129.807L517.178 119.486Z" fill="#FAFF00"/><path d="M504.696 89.6148L507.498 99.9352L516.567 99.9352L509.23 106.314L512.033 116.634L504.696 110.256L497.359 116.634L500.161 106.314L492.824 99.9352L501.893 99.9352L504.696 89.6148Z" fill="#FAFF00"/><path d="M443.948 59.7433L446.75 70.0636L455.819 70.0636L448.482 76.442L451.285 86.7624L443.948 80.384L436.611 86.7624L439.413 76.442L432.076 70.0636L441.145 70.0636L443.948 59.7433Z" fill="#FAFF00"/><path d="M493.045 59.7433L495.848 70.0636L504.917 70.0636L497.58 76.442L500.382 86.7624L493.045 80.384L485.708 86.7624L488.511 76.442L481.174 70.0636L490.243 70.0636L493.045 59.7433Z" fill="#FAFF00"/><path d="M454.766 29.8716L457.568 40.192L466.637 40.192L459.3 46.5703L462.103 56.8907L454.766 50.5124L447.429 56.8907L450.231 46.5703L442.894 40.192L451.963 40.192L454.766 29.8716Z" fill="#FAFF00"/><path d="M467.248 0L470.051 10.3204L479.12 10.3204L471.783 16.6987L474.585 27.0191L467.248 20.6408L459.911 27.0191L462.714 16.6987L455.377 10.3204L464.446 10.3204L467.248 0Z" fill="#FAFF00"/><path d="M471.409 89.6148L474.212 99.9352L483.281 99.9352L475.944 106.314L478.746 116.634L471.409 110.256L464.072 116.634L466.875 106.314L459.538 99.9352L468.607 99.9352L471.409 89.6148Z" fill="#FAFF00"/><path d="M429.801 119.486L432.603 129.807L441.672 129.807L434.335 136.185L437.138 146.506L429.801 140.127L422.464 146.506L425.266 136.185L417.929 129.807L426.998 129.807L429.801 119.486Z" fill="#FAFF00"/></g><ellipse cx="705" cy="161" rx="705" ry="113" transform="rotate(-180 705 161)" fill="url(#paint0_radial)"/><defs><filter id="filter0_i" x="181.611" y="0" width="73.6732" height="150.506" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/><feBlend mode="normal" in2="shape" result="effect1_innerShadow"/></filter><filter id="filter1_i" x="853.127" y="0" width="23.7434" height="150.506" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/><feBlend mode="normal" in2="shape" result="effect1_innerShadow"/></filter><filter id="filter2_i" x="296.435" y="0" width="80.3429" height="150.506" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/><feBlend mode="normal" in2="shape" result="effect1_innerShadow"/></filter><filter id="filter3_i" x="570.207" y="0" width="87.8201" height="150.506" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/><feBlend mode="normal" in2="shape" result="effect1_innerShadow"/></filter><filter id="filter4_i" x="699.184" y="0" width="112.785" height="150.506" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/><feBlend mode="normal" in2="shape" result="effect1_innerShadow"/></filter><filter id="filter5_i" x="1195.12" y="0" width="125.268" height="150.506" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/><feBlend mode="normal" in2="shape" result="effect1_innerShadow"/></filter><filter id="filter6_i" x="1041.18" y="0" width="112.785" height="150.506" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/><feBlend mode="normal" in2="shape" result="effect1_innerShadow"/></filter><filter id="filter7_i" x="918.027" y="0" width="81.9949" height="150.506" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/><feBlend mode="normal" in2="shape" result="effect1_innerShadow"/></filter><filter id="filter8_i" x="417.929" y="0" width="111.121" height="150.506" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/><feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/><feBlend mode="normal" in2="shape" result="effect1_innerShadow"/></filter><radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(705 161) rotate(90.0001) scale(113 794.878)"><stop stop-color="#FAFF00" stop-opacity="0.12"/><stop offset="1" stop-color="#FAFF00" stop-opacity="0.01"/></radialGradient></defs></svg></div><div class="start" id="start"><div class="box" id="box"><h1>Explore My Universe</h1></div><svg id="transition" height="10" width="10" style="position: absolute;display:none;"><circle cx="5" cy="5" r="1" fill="black" /></svg></div><script src="./scripts/index.js"></script>';
    wrap.innerHTML = z+x+y;
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
}