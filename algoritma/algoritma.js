
// Terdapat string "NEGIE1", silahkan reverse alphabet nya dengan angka tetap diakhir kata Hasil = "EIGEN1"
function reverseString(str) {
  let splitString = str.split("");
  let word1 = splitString[5];
  let stringSlice = splitString.slice(0, 5);
  let reverseArray = stringSlice.reverse();
  let joinArray = reverseArray.join("") + word1;

  return joinArray;
}

console.log(reverseString("NEGIE1"));

// Diberikan contoh sebuah kalimat, silahkan cari kata terpanjang dari kalimat tersebut, jika ada kata dengan panjang yang sama silahkan ambil salah satu
const longest = (sentence) => {
  const words = sentence.split(" ");

  if (words.length === 0) {
    return null;
  }
  let longestWord = words[0];

  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  return longestWord;
};

const sentence = "Saya sangat senang mengerjakan soal algoritma";
console.log(longest(sentence));



const findSameWord = (input, query) => {
    return query.map((item) => input.filter((word) => word === item).length);
  };

INPUT = ['xc', 'dz', 'bbb', 'dz']  
QUERY = ['bbb', 'ac', 'dz']  

const OUTPUT = findSameWord(INPUT, QUERY);
console.log(OUTPUT);



const calculateDiagonal = (matrix) => {
    const n = matrix.length;
  
    let diagonal1 = 0;
    let diagonal2 = 0;
  
    for (let i = 0; i < n; i++) {
      diagonal1 += matrix[i][i];
      diagonal2 += matrix[i][n - 1 - i];
    }
    const result = Math.abs(diagonal1 - diagonal2);
    return result;
  };
  
  const matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]];
  const result = calculateDiagonal(matrix);
  console.log(result);
