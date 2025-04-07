let gameseq = [];
let usersq = [];

let btns=["red","yellow","green","voilet"]

let start=false;
let level=0;
let h3=document.querySelector("h3");

document.addEventListener("keypress",function(){
    if(start==false){
        console.log("game started");
        start=true;
        levelup();
    }
});

function gameflash(btn){
    btn.classList.add("Flash");
    setTimeout(function(){
        btn.classList.remove("Flash");
    },250);
}

function userflash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}

function levelup(){
    usersq = [];
    level++;
    h3.innerText=`level ${level}`;
    let rndindx=Math.floor(Math.random()*3);
    let randomColor=btns[rndindx];
    let randbtn=document.querySelector(`.${randomColor}`)
    gameseq.push(randomColor);
    console.log(gameseq);
    gameflash(randbtn);
}

function checkall(idx){
    if(usersq[idx] === gameseq[idx]){
        setTimeout(levelup,1000);
    }else{
        h3.innerHTML = `Game Over! Your Score was <b>${level}</b><br>Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

function btnPress(){
    let btn = this;
    userflash(btn);

    usercolor = btn.getAttribute("id");
    usersq.push(usercolor);
    checkall(usersq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    start = false;
    gameseq = [];
    usersq = [];
    level = 0;
}