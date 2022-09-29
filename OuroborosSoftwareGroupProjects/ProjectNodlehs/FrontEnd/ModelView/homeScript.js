/*
Author: Ryan Woodward
Team: RAMM
Project Name: Nodlehs
Date:
Description: JavaScript File for the behavior the Ouroboros Projectmanagement
            System Front-End
*/

var navLinks = document.getElementById("naviLinks");

//About Boxes Description- Shift left when clicked
var abtBoxOne = document.getElementById("boxee1");
var boxFa1 = document.getElementById("boxesFa1");
var abtBoxTwo = document.getElementById("boxee2");
var boxFa2 = document.getElementById("boxesFa2");
var abtBoxThree = document.getElementById("boxee3");
var boxFa3 = document.getElementById("boxesFa3");

//Contact Icons Variables
var phoneNum = docment.getElementById("phoneP");
var emailAddr = document.getElementById("emailP");
var addresIcn = document.getElementById("addressP");

//Mobile Nav Menu Funcitons
function openMenu(){

    naviLinks.style.right = "0";
}

function hideMenu(){

    naviLinks.style.right = "-200px";
}

//About Information Boxes Funcitons
function openBox1(){

    boxee1.style.transform = "translateX(0)";
    boxee1.style.transform = "translateZ(0)";
    closeBox2();
    closeBox3();
}

function closeBox1(){

    boxee1.style.transform = "translateX(-1500px)";
}

function openBox2(){

    boxee2.style.transform = "translateX(0)";
    boxee2.style.transform = "translateZ(0)";
    closeBox1();
    closeBox3();
}

function closeBox2(){

    boxee2.style.transform = "translateX(-1500px)";
}

function openBox3(){

    boxee3.style.transform = "translateX(0px)";
    boxee3.style.transform = "translateZ(0px)";
    closeBox1();
    closeBox2();
}

function closeBox3(){

    boxee3.style.transform = "translateX(-1500px)";
}

//Contact Icons Funcitons
function openCont1(){

    
    phoneP.style.width =" 150px";
    phoneP.style.height = "30px";
    phoneP.style.opacity ="1.0";
}

function openCont2(){

    emailP.style.width = "200px";
    emailP.style.height = "30px";
    emailP.style.opacity ="1.0";
}

function openCont3(){

    addressP.style.width = "400px";
    addressP.style.height = "30px";
    addressP.style.opacity = "1.0";
}