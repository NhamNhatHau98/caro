

var boxes = document.querySelectorAll('#main div'); 
var turn = document.getElementById("turn");
var X_or_O =0;
var restart=document.querySelector(".restart");
var box=document.querySelector(".box")
var count=0
function selectWinnerBoxes(b1, b2, b3){
    b1.classList.add("win")
    b2.classList.add("win")
    b3.classList.add("win")
    restart.classList.add("show")
    turn.innerHTML=b1.innerHTML+"Won"
}

function getWinner(){
    var box1=document.getElementById("box1")
    var box2=document.getElementById("box2")
    var box3=document.getElementById("box3")
    var box4=document.getElementById("box4")
    var box5=document.getElementById("box5")
    var box6=document.getElementById("box6")
    var box7=document.getElementById("box7")
    var box8=document.getElementById("box8")
    var box9=document.getElementById("box9")

    //winner -> 123
    if(box1.innerHTML!=="" && box1.innerHTML===box2.innerHTML && box1.innerHTML===box3.innerHTML){
        selectWinnerBoxes(box1, box2, box3)
        box4.classList.add("end")
        box5.classList.add("end")
        box6.classList.add("end")
        box7.classList.add("end")
        box8.classList.add("end")
        box9.classList.add("end")
    }
    //winenr -> 456
    if(box4.innerHTML!=="" && box4.innerHTML===box5.innerHTML && box4.innerHTML===box6.innerHTML){
        selectWinnerBoxes(box4, box5, box6)
        box1.classList.add("end")
        box2.classList.add("end")
        box3.classList.add("end")
        box7.classList.add("end")
        box8.classList.add("end")
        box9.classList.add("end")
    }
    //winner -> 789
    if(box7.innerHTML!=="" && box7.innerHTML===box8.innerHTML && box7.innerHTML===box9.innerHTML){
        selectWinnerBoxes(box7, box8, box9)
        box4.classList.add("end")
        box5.classList.add("end")
        box6.classList.add("end")
        box1.classList.add("end")
        box2.classList.add("end")
        box3.classList.add("end")
    }
    //winer -> 147
    if(box1.innerHTML!=="" && box1.innerHTML===box4.innerHTML && box1.innerHTML===box7.innerHTML){
        selectWinnerBoxes(box1, box4, box7)
        box2.classList.add("end")
        box3.classList.add("end")
        box5.classList.add("end")
        box6.classList.add("end")
        box8.classList.add("end")
        box9.classList.add("end")
    }
    //winner -> 258
    if(box2.innerHTML!=="" && box2.innerHTML===box5.innerHTML && box2.innerHTML===box8.innerHTML){
        selectWinnerBoxes(box2, box5, box8)
        box1.classList.add("end")
        box3.classList.add("end")
        box4.classList.add("end")
        box6.classList.add("end")
        box7.classList.add("end")
        box9.classList.add("end")
    }
    //winner -> 369
    if(box3.innerHTML!=="" && box3.innerHTML===box6.innerHTML && box3.innerHTML===box9.innerHTML){
        selectWinnerBoxes(box3, box6, box9)
        box1.classList.add("end")
        box2.classList.add("end")
        box4.classList.add("end")
        box5.classList.add("end")
        box7.classList.add("end")
        box8.classList.add("end")
    }
    //winner -> 159
    if(box1.innerHTML!=="" && box1.innerHTML===box5.innerHTML && box1.innerHTML===box9.innerHTML){
        selectWinnerBoxes(box1, box5, box9)
        box2.classList.add("end")
        box3.classList.add("end")
        box4.classList.add("end")
        box6.classList.add("end")
        box7.classList.add("end")
        box8.classList.add("end")
    }
    //winner -> 357
    if(box3.innerHTML!=="" && box3.innerHTML===box5.innerHTML && box3.innerHTML===box7.innerHTML){
        selectWinnerBoxes(box3, box5, box7)
        box1.classList.add("end")
        box2.classList.add("end")
        box4.classList.add("end")
        box6.classList.add("end")
        box8.classList.add("end")
        box9.classList.add("end")
    }
}


//set onclick event
for(var i=0;i<boxes.length;i++){
    boxes[i].onclick=function(){
        if(this.innerHTML!=="X"&&this.innerHTML!=="O"){
            if(X_or_O%2===0){
                console.log(X_or_O)
                this.innerHTML="X"
                turn.innerHTML="O turn"
                getWinner()
                X_or_O++
            }else{
                console.log(X_or_O)
                this.innerHTML="O"
                turn.innerHTML="X turn"
                getWinner()
                X_or_O++
            }
        }
    }
}


//replay function
function replay(){
    for(var i=0;i<boxes.length;i++){
        boxes[i].classList.remove("win")
        boxes[i].innerHTML=""
        turn.innerHTML="Start"
        restart.classList.remove("show")
        boxes[i].classList.remove("end")
    }
    X_or_O =0
}



