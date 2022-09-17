//takes an array & returns lowest & highest numbers respectively
function minMax(arr){
    return [Math.min(...arr), Math.max(...arr)]; 
  }

console.log(minMax([1,2,3,4,5])) // => [1, 5]
console.log(minMax([101,32,453,4,567])) // => [ 4, 567 ]
console.log(minMax([10,02,13,14,15])) // => [ 2, 15 ] 