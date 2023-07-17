

const BTN = document.querySelectorAll("button");
const DIV = document.getElementById("test1");
const PLUS = document.getElementById("fst");
const BRD = document.getElementById("hidebr");


const DIV2 = document.getElementById("test2");
const PLUS2 = document.getElementById("fst2");
const BRD2 = document.getElementById("hidebr2");


const DIV3 = document.getElementById("test3");
const PLUS3 = document.getElementById("fst3");
const BRD3 = document.getElementById("hidebr3");


const DIV4 = document.getElementById("test4");
const PLUS4 = document.getElementById("fst4");
const BRD4 = document.getElementById("hidebr4");


const HEIGHT = document.getElementById("adjustft");




function closeAll() {


    // HELP THIS RIGHT HERE IS SOMEHOW NEEDED BUT IT IS RUINING THE WHOLE THING
    // HEIGHT.classList.toggle("extraheight");


    PLUS.classList.remove("rotate");
    DIV.classList.remove("open-footer");
    BRD.classList.remove("hideborder");



    PLUS2.classList.remove("rotate");
    DIV2.classList.remove("open-footer");
    BRD2.classList.remove("hideborder");


    PLUS3.classList.remove("rotate");
    DIV3.classList.remove("open-footer");
    BRD3.classList.remove("hideborder");


    PLUS4.classList.remove("rotate");
    DIV4.classList.remove("open-footer");
    BRD4.classList.remove("hideborder");

}




BTN[0].addEventListener("click", function () {

    closeAll();

    PLUS.classList.toggle("rotate");
    DIV.classList.toggle("open-footer");
    BRD.classList.toggle("hideborder");

    // BTN.classList.toggle("rotate");

});

BTN[1].addEventListener("click", function () {


    closeAll();

    PLUS2.classList.toggle("rotate");
    DIV2.classList.toggle("open-footer");
    BRD2.classList.toggle("hideborder");

});

BTN[2].addEventListener("click", function () {

    closeAll();


    PLUS3.classList.toggle("rotate");
    DIV3.classList.toggle("open-footer");
    BRD3.classList.toggle("hideborder");


});


BTN[3].addEventListener("click", function () {


    closeAll();


    PLUS4.classList.toggle("rotate");
    DIV4.classList.toggle("open-footer");
    BRD4.classList.toggle("hideborder");


});

