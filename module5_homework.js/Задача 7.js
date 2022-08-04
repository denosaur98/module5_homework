let arr = [1, 2, 3, 4, 2, 1, 5, 0];
let chet = 0, neChet = 0;
for (let i = 0; i < arr.length; i++) {
if ((arr[i] % 2) === 0) {
    chet++;}
}
for (let i = 0; i < arr.length; i++) {
if (arr[i] % 2)
  neChet++; 
}
let zero = arr.filter(function(f) { return f == 0 })
console.log(chet + ' четных', neChet + ' нечетных')
console.log(zero)