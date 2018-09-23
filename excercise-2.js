/**
 * Diberikan sebuah function fpb(angka1, angka2) yang menerima dua parameter angka. Function akan mengembalikan nilai FPB (Faktor Persekutuan Terbesar). FPB dari dua bilangan merupakan bilangan bulat positif terbesar yang dapat membagi habis kedua bilangan tersebut.
 */

function fpb(angka1, angka2) {
    var min = Math.min(angka1, angka2);
    var faktor = 1;
  
  
    for (var i = 1; i <= min; i++) {
        if (angka1 % i === 0 && angka2 % i === 0) {
            if (i > faktor) {
                faktor = i;
            }
        }
    }
  
    return faktor;
  
  }
  
  // TEST CASES
  console.log(fpb(8, 16)); // 8
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1