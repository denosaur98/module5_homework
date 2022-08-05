let arr = [0, 1, 2, 3, 3, 1, 4, 5];
let chetn = 0;
let neChetn = 0;		
for (let i = 0; i < arr.length; i++) {{
	if (arr[i] % 2 === 0) { 
      chetn++;

  } else { 
    neChetn++;

		}
	}
}
let zero = arr.filter(function(f) { return f == 0 })
console.log(chetn + " четных", neChetn + " нечетных")
console.log(zero)