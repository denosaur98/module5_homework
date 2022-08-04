let myMap = new Map ();
myMap.set (1, 'znach1');
myMap.set (true, 'znach2');
myMap.set ('string', 'znach3');
for (let name of myMap.keys()) {
  console.log(`${name} - ${myMap.get(name)}`);}