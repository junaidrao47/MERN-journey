dice1();







function dice1 (){
    let m1 = Math.floor(Math.random()*6) +1 ;
    let m2 = Math.floor(Math.random()*6) +1 ;

    if(m1>m2){
        document.querySelector("h1").innerHTML = "Player 1 Wins &#9996";
    }
    else if (m2>m1){
        document.querySelector("h1").innerHTML = "Player 2 Wins &#9996";

    }
    else{
        document.querySelector("h1").innerHTML = "Player 1 & 2 Wins &#9996";

    }





    switch(m1) {
        case 1:
            document.querySelector(".img1").src = "http://127.0.0.1:5500/Dicee%20Challenge%20-%20Starting%20Files/images/dice1.png";
            break;
        case 2:
            document.querySelector(".img1").src = "http://127.0.0.1:5500/Dicee%20Challenge%20-%20Starting%20Files/images/dice2.png";
            break;
        case 3:
            document.querySelector(".img1").src = "http://127.0.0.1:5500/Dicee%20Challenge%20-%20Starting%20Files/images/dice3.png";
            break;
        case 4:
            document.querySelector(".img1").src = "http://127.0.0.1:5500/Dicee%20Challenge%20-%20Starting%20Files/images/dice4.png";
            break;
        case 5:
            document.querySelector(".img1").src = "http://127.0.0.1:5500/Dicee%20Challenge%20-%20Starting%20Files/images/dice5.png";
            break;
        case 6:
            document.querySelector(".img1").src = "http://127.0.0.1:5500/Dicee%20Challenge%20-%20Starting%20Files/images/dice6.png";
            break;
               

    }


    switch(m2) {
        case 1:
            document.querySelector(".img2").src = "http://127.0.0.1:5500/Dicee%20Challenge%20-%20Starting%20Files/images/dice1.png";
            break;
        case 2:
            document.querySelector(".img2").src = "http://127.0.0.1:5500/Dicee%20Challenge%20-%20Starting%20Files/images/dice2.png";
            break;
        case 3:
            document.querySelector(".img2").src = "http://127.0.0.1:5500/Dicee%20Challenge%20-%20Starting%20Files/images/dice3.png";
            break;
        case 4:
            document.querySelector(".img2").src = "http://127.0.0.1:5500/Dicee%20Challenge%20-%20Starting%20Files/images/dice4.png";
            break;
        case 5:
            document.querySelector(".img2").src = "http://127.0.0.1:5500/Dicee%20Challenge%20-%20Starting%20Files/images/dice5.png";
            break;
        case 6:
            document.querySelector(".img2").src = "http://127.0.0.1:5500/Dicee%20Challenge%20-%20Starting%20Files/images/dice6.png";
            break;
               

    }

   


}


