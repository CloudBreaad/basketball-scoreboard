let basics = document.getElementById("home");
let tamu = document.getElementById("guest");
let periodesEl = document.getElementById("box-periode")
let basic= 0
let tamus = 0
let periods = 0
let maxPeriods = 4
function one(){
    tamus += 1
   tamu.textContent=tamus
}
function two(){
    tamus += 2
    tamu.textContent=tamus
}
function three(){
    tamus += 3
    tamu.textContent=tamus
}
function resetlawan(){
    tamus = 0
    tamu.textContent='00'
}
//police-line. do not cross     police-line. do not cross 

function plusone(){
    basic +=1
    basics.textContent=basic
}
function plustwo(){
    basic +=2
    basics.textContent=basic
}
function plusthree(){
    basic +=3
    basics.textContent=basic
}

function resetkawan(){
    basic = 0
    basics.textContent='00'
}

function periodeEl() {
    if (periods < maxPeriods) {
        periods += 1
        periodesEl.textContent = periods
    } else {
        // kalau sudah maksimal, bisa kasih pesan atau biarkan tetap
        periodesEl.textContent = "X"
    }
}
function periodeRel() {
    periods = 0
    periodesEl.textContent = "0"
}