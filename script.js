"use strict";

let date = new Date();
let current_day = date.getDate();
let current_month = date.getMonth()+1;
let current_year = date.getFullYear();


function showAge(){
    let day = document.getElementById('birthday').value;
    let month = document.getElementById('birthmonth').value;
    let year = document.getElementById('birthyear').value;


    if (current_day >= day && current_month >= month && current_year >= year) {
        document.getElementById('years').innerHTML = current_year - year;
        document.getElementById('months').innerHTML = current_month - month;
        document.getElementById('days').innerHTML = current_day - day;
    } 
    else if (current_day < day && current_month >= month && current_year >= year) {
        document.getElementById('years').innerHTML = current_year - year;
        document.getElementById('months').innerHTML = current_month - month - 1;
        document.getElementById('days').innerHTML = current_day + 30 - day;
    }
    else if (current_day >= day && current_month < month && current_year >= year) {
        document.getElementById('years').innerHTML = current_year - year - 1;
        document.getElementById('months').innerHTML = 12 - month + current_month;
        document.getElementById('days').innerHTML = current_day - day;       
    }
    else {
        document.getElementById('years').innerHTML = current_year - year - 1;
        document.getElementById('months').innerHTML = 11 - month + current_month;
        document.getElementById('days').innerHTML = current_day + 30 - day; 
    }
    
    // alert(day);
    // alert(month);
    // alert(year);
    // alert(current_day);
    // alert(current_month);
    // alert(current_year)
}