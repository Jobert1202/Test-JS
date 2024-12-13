const nabidka = ["Rum", "Whiskey", "Absint", "Gin", "Tatra Tea"];
const cena = ["500kč", "750kč", "300kč", "500kč", "700kč"];
const kosik = [];

function vypis(array, output) {
    document.getElementById(output).innerHTML = "";
    for (let i = 0; i < array.length; i++) {
        document.getElementById(output).innerHTML += i + 1 + ". " + array[i] + "<br>";
    }
}

function Add() {
    const input = document.getElementById("nabidka_kosik");
    const nase_nabidka = document.getElementById("nase_nabidka");
    const kosik_uzivatel = document.getElementById("kosik_uzivatel");

    if ((input.value <= nabidka.length) && (input.value > 0) && (!isNaN(input.value))) {
        kosik.push(nabidka[input.value - 1]);
        kosik.push(cena[input.value - 1]);  
        nabidka.splice(input.value - 1, 1);
    } else {

        alert("Chyba");
    }
    vypis(kosik, "kosik_uzivatel");
    vypis(nabidka, "nase_nabidka");
}

//vypis(nabidka, "nase_dabidka");