'use strict'
// Easy - Live Code Batch 33 Phase 1 Week 1 - Array Manipulation
// Andreas Sosilo - Hacktiv8 Batch 34 - Humble Fox

function arrayManipulation (n, arr) {
  let result = []
  // Create 0s array
  for (let i = 0; i < n; i++) {
    result.push(0)
  }
  // Add k to the array operation
  for (let i = 0; i < arr.length; i++) {
    let a = arr[i][0] - 1
    let b = arr[i][1] - 1
    let k = arr[i][2]
    for (a; a <= b; a++) {
      result[a] += k
    }
  }
  // Find the maximum value in the array
  return Math.max(...result)
}

// TEST CASES
console.log(arrayManipulation(10, [
  [2, 6, 8],
  [3, 5, 7],
  [1, 8, 1],
  [5, 9, 15]
])) // 31

console.log(arrayManipulation(10, [
  [1, 5, 3],
  [4, 8, 7],
  [6, 9, 1]]
)) // 10

console.log(arrayManipulation(5, [
  [1, 2, 100],
  [2, 5, 100],
  [3, 4, 100]]
)) // 200

console.log(arrayManipulation(40, [
  [29, 40, 787],
  [9, 26, 219],
  [21, 31, 214],
  [8, 22, 719],
  [15, 23, 102],
  [11, 24, 83],
  [14, 22, 321],
  [5, 22, 300],
  [11, 30, 832],
  [5, 25, 29],
  [16, 24, 577],
  [3, 10, 905],
  [15, 22, 335],
  [29, 35, 254],
  [9, 20, 20],
  [33, 34, 351],
  [30, 38, 564],
  [11, 31, 969],
  [3, 32, 11],
  [29, 35, 267],
  [4, 24, 531],
  [1, 38, 892],
  [12, 18, 825],
  [25, 32, 99],
  [3, 39, 107],
  [12, 37, 131],
  [3, 26, 640],
  [8, 39, 483],
  [8, 11, 194],
  [12, 37, 502]
])) // 8628
