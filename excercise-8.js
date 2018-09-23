/**
 * Diberikan sebuah function urutkanAbjad(str) yang menerima satu parameter berupa string. Function tersebut akan mengembalikan string baru yang telah diubah urutan abjadnya dari a hingga z. Contohnya, halo akan menjadi ahlo. Kamu tidak perlu memikirkan apabila ada simbol ataupun angka didalam string tersebut.
 */

function urutkanAbjad(str) {
  // you can only write your code here!
  var arr = str.split('')
  arr.sort(function(value1, value2) { return value1 > value2 })

  var teks = ''
  for (var i = 0; i < arr.length; i++) {
    teks += arr[i]
  }

  // console.log(arr);
  return teks

}
/**
 
 */

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'