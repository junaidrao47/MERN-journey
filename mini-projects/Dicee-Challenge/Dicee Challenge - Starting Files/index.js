let random1 = Math.floor(Math.random()*6)+1;
// let random2 = Math.floor(Math.random()*6)+1;

let randomimage = "dice" + random1  + ".png";
let randomimageaddress = "/images" + randomimage;

// let randomimage1 = "dice" + random2  + ".png";
// let randomimageaddress1 = "/images" + randomimage1;

let imag1 = document.querySelectorAll("img1")[0];
imag1.setAttribute("src", randomimageaddress);

// document.querySelector(".img1").src = "randomimageaddress";

// document.querySelector(".img2").src = "randomimageaddress1";






