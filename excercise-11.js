/**
 * Diberikan sebuah function changeMe(arr) yang menerima satu parameter berupa array multidimensi dimana array tersebut berisi value (pasti berurut dari kiri ke kanan) First Name, Last Name, Gender dan Birth Year . Fungsi ini akan menampilkan object literal yang memiliki property firstName, lastName, gender dan age. Nilai age didapatkan dari tahun sekarang dikurang tahun lahir. Jika tahun lahir tidak diisi atau tahun lahir lebih besar dibandingkan tahun sekarang maka age akan berisi 'Invalid Birth Year'

Contoh jika arr inputan adalah [['Platinum', 'Fox', 'female', 1995], ['John', 'Doe', 'male', 2000]] maka output:

1. Platinum Fox: { firstName: 'Platinum', lastName: 'Fox', gender: 'female', age: 23 }
2. John Doe: { firstName: 'John', lastName: 'Doe', gender: 'male', age: 18 }
 */

function changeMe(arr) {
  // you can only write your code here!

  var avenger = {}

  var result = ''

  if (arr.length == 0) {
    // console.log("");
    return '""'
  } else {
    for (var i = 0; i < arr.length; i++) {

      var namaDepan = arr[i][0]
      var namaBelakang = arr[i][1]
      var jk = arr[i][2]
      var umur = 2018 - arr[i][3]
      var nama = [namaDepan + " " + namaBelakang]
       

      if (isNaN(umur) || arr[i][3]>=2018) {
        umur =  'Invalid Birth Year'
      }

      if (avenger.nama === undefined) {
        avenger[(i+1)+'. '+nama] =  {
          firstName: namaDepan,
          lastName: namaBelakang,
          gender: jk,
          age: umur
        }

      }

    }

  }

   return avenger
}

// TEST CASES
console.log(changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']])); 
  // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 36 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  console.log(changeMe([])); // ""
