// Kalkulator
console.log('Hello, ini halaman kalkulator') ;
// Membuat Object Kalkulator
const kalkulator = {
    angkaDisplay: '0', 
    operator: null,
    angkaPertama: null,
    tungguAngkaKedua: false
};
// Membuat fungsi update display
function updateDisplay() {
    document.querySelector("#displayNumber").innerText = kalkulator.angkaDisplay;
}
// Membuat fungsi reset display kalkulator
function resetKalkulator() {
    kalkulator.angkaDisplay = '0';
    kalkulator.operator = null;
    kalkulator.angkaPertama = null;
    kalkulator.tungguAngkaKedua = false;
}
// Membuat fungsi menginput data
function inputDigit(digit) {
    if(kalkulator.angkaDisplay === '0') {
        kalkulator.angkaDisplay = digit;
        updateDisplay(kalkulator.angkaDisplay);
    } else {
        kalkulator.angkaDisplay += digit;
        updateDisplay(kalkulator.angkaDisplay);
    }
}
// Memilih elemen button dalam kalkulator.html
const buttons=document.querySelectorAll(".button");
// console.log(buttons)
// LOOPING BUTTONS dengan fungsi setiap button
for (let button of buttons) {
    button.addEventListener('click', function (event) {
        //mendapatkan  objek elemen  yang diklik
        const target= event.target ;
        // Jika button clear kalkulator di klik
        if (target.classList.contains('clear')) {
            resetKalkulator();
            updateDisplay();
            return;
        }
        // Masukan angka 
        inputDigit(target.innerText);
        updateDisplay();
    })
}
// Membuat fungsi input angka menjadi negatif atau positif
function inverseAngka() {
    if (kalkulator.angkaDisplay === '0') {
        return;
    }
    kalkulator.angkaDisplay = kalkulator.angkaDisplay * -1;
}
// Jika button -/+ diklik menghasilkan input angka negatif atau positif 
if (target.classList.contains('negative')) {
    inverseAngka();
    updateDisplay();
    return
}

// Membuat fungsi perhitungan / kalkulasi 
function hitungKalkulasi() {
    // Jika kondisi angka pertama / operator belum ada 
    if (kalkulator.angkaPertama == null || kalkulator.operator == null) {
        alert('Masukan angka terlebih dahulu');
        return;
    }
    let hasil = 0;
    if (kalkulator.operator === '+') {
        hasil = parseInt(kalkulator.angkaPertama) + parseInt(kalkulator.angkaDisplay);
    } else {
        hasil = parseInt(kalkulator.angkaPertama) + parseInt(kalkulator.angkaDisplay);
    }
    kalkulator.angkaDisplay = hasil;
}
// Jika button = atau sama dengan diklik untuk menampilkan hasil perhitungan 
if (target.classList.contains('equals')) {
    hitungKalkulasi();
    updateDisplay();
    return
}
function gunakanOperator(operator) {
    if (kalkulator.tungguAngkaKedua) {
        kalkulator.operatorn =operator;
        kalkulator.tungguAngkaKedua =true;
        kalkulator.angkaPertama-kalkulator.angkaDisplay;
        //  Mengatur ulang nilai angka display supaya button selanjutnya dimulai dari angka pertama lagi
        kalkulator.angkaDisplay = '0';
    } else {
        alert('Operator sudah ditetapkan');
    }
}
// Jika button operator +, -, *, / diklik
if (target.classList.contains('operator')) {
    gunakanOperator(target.innerText);
    return;
}