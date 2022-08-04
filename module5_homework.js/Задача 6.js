let arr = [1, 2, 3, 3, 1];
			
for (let i = 0; i < arr.length; i++) {
for (let x = 0; x < arr.length; x++) {
	if (arr[i] == arr[x]) {
console.log(`${arr[i]} is equal to ${arr[x]}: true`)
  } else { 
console.log(`${arr[i]} is equal to ${arr[x]}: false`)
		}
	}
}