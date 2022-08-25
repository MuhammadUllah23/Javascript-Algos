// console.log()

function swap(array, i, j) {
  
 [array[i], array[j]] = [array[j], array[i]]

}
// -------------------------------------------------------------

function frequencyCounter(str1, str2){
  // True or false if the same type and number of characters are in each string.
  
  if(str1.length !== str2.length) {
      return false
  }
  
  let freq1 = {}
  let freq2 = {}

  for (let val of str1) {
      freq1[val] = (freq1[val] || 0) + 1
  }
  
  for (let val of str2) {
      freq2[val] = (freq2[val] || 0) + 1
  }
  
  for (let key in freq1){
      if(!freq1[key] || freq1[key] !== freq2[key]) {
          return false
      }
  }
  return true
}

// practice
function practiceFrequency(str1, str2){
  if (str1.length !== str2.length) {
    return false
  }

  let freq1 = {}
  let freq2 = {}

  for (let val of str1) {
    freq1[val] = (freq1[val] || 0) + 1
  }
  for (let val of str2) {
    freq2[val] = (freq2[val] || 0) + 1
  }

  for (let key in freq1) {
    if (!freq2[key] || freq1[key] !== freq2[key]) {
      return false
    }
  }

  return true
}

//console.log(practiceFrequency("applesauce", "saucapple"))

// -------------------------------------------------------------

function multiplePointers(arr) {
// A pointer to the left and a pointer to the right.             
// Adding those two pointers to see if they will equal 0.
  
  let left = 0
  let right = arr.length - 1

  while(left < right){
    let sum = arr[left] + arr[right]
    if (sum === 0) {
      return [arr[left], arr[right]]
    }
  if (sum > 0) {
    right--
  } else {
    left++
  }
  }
}

function practiceMultiplePointers(arr, val) {
  let right = arr.length - 1
  let left = 0

  while (left < right) {
    let sum = arr[left] + arr[right]

    if (sum === val) {
      return [arr[left], arr[right]]
    } else if (sum > val) {
      right--
    } else if (sum < val) {
      left++
    }
  }
}
// -------------------------------------------------------------

function countUniqueValues(arr) {
  // Returns how many unique value are in an array of integers or strings.

  let i = 0
  let j = 1

  if(arr.length === 0) {
    return i
  }
  
  while(j < arr.length){
    if(arr[i] === arr[j]) {
      j++
    } else if(arr[i] !== arr[j]) {
      i++
      arr[i] = arr[j]
      j++
    }
  }
  return i + 1
}

function practiceCountUniqueValues(arr) {
  let i = 0
  let j = 1

  while (j < arr.length) {
    if(arr[i] === arr[j]) {
      j++
    } else if(arr[i] !== arr[j]) {
      i++
      arr[i] = arr[j]
      j++
    }
  }
  return i + 1
}


// -------------------------------------------------------------

// Sliding Window Pattern

function maxSubarraySum(arr, num) {
  // num is the window range, and slides by 1 until reach end of     array.
  let maxSum = 0
  let tempSum

  if(arr.length < num) return null

  //find initial sum of first num elements
  for (i = 0; i < num; i++) {
    tempSum += arr[i]
  }

 
 //iterate the array once and increment the right edge
  for (i = num; i < arr.length; i++){
    tempSum = tempSum - arr[i - num] + arr[i];
    //compare if sum is more than max, if yes then replace max         with new sum value
    maxSum = Math.max(tempSum, maxSum)
  }
  return maxSum
}

// -------------------------------------------------------------

// Substring search

function naiveSearch(long, short) {
  // loop over the longer string.
  // Loop over the shorter string.
  // If the characters don't match, break out of the inner loop.
  // If the characters do match, keep going.
  // If you can complete the inner loop and find match, increment the count of          matches.
  // Return the count.
  let count = 0
  
  for (let i = 0; i < long.length; i++) {
    for (j = 0; j < short.length; j++) {
      if (long[i + j] !== short[j]) break;
      if (j === short.length -1) count++;
    }
  }
  return count
}
// console.log(naiveSearch("lorlolie loled", "lol"))

// -------------------------------------------------------------

function linearSearch(arr, val) {

  for(let i = 0; i < arr.length; i++) {
    if (val === arr[i]) {
      return i
    }
  }
  return -1
}

// -------------------------------------------------------------
 
function binarySearch(arr, val){
  let left = 0
  let right = arr.length - 1
  let middle = Math.round((left + right)/2)
  while (arr[middle] !== val && left <= right) {
    if(val > arr[middle]) {
      left = middle + 1
      middle = Math.round((left + right)/2)
    } else if(val < arr[middle]) {
      right = middle - 1
      middle = Math.round((left + right)/2)
    } 
  }

  return arr[middle] === val ? middle : -1
}
// console.log(binarySearch([1,2,3,4,5], 5))
// -------------------------------------------------------------



// Bubble Sort
// The largest value bubbles to the top.

function bubbleSort(arr) {
  let noSwaps
  for(let i = arr.length - 1; i > 0; i--) {
    noSwaps = true;
    for(let j = 0; j < i; j++){
      // console.log(arr, arr[j], arr[j+1])
      if (arr[j] > arr[j+1]) {
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
        noSwaps = false
      }
    }
    if(noSwaps) break;
  }
  return arr
}

// -------------------------------------------------------------

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) 
    {
      let lowest = i;
      for(let j = i+1; j < arr.length; j++) 
      {
        if (arr[lowest] > arr[j]) 
        {
          lowest = j
        }
      }
      if(i !== lowest )
      {
        let temp = arr[i]
        arr[i] = arr[lowest]
        arr[lowest] = temp
      }
      
    }
    return arr
  }

function practiceSelectionSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    let lowest = i
    for (let j = i+1; j < arr.length; j++) {
      if(arr[lowest] > arr[j]) {
        lowest = j
      }
    }
    if ( i !== lowest) {
      let temp = arr[i]
      arr[i] = arr[lowest]
      arr[lowest] = temp
    }
  }
  return arr
}
// console.log(practiceSelectionSort([1,5,4,6,9,2,8,5]))
// -------------------------------------------------------------

function insertionSort(arr)
  {
    for(i = 1; i < arr.length; i++)
      {
        let currentVal = arr[i]
        for(let j = i-1; j >= 0 && arr[j] > currentVal; j--)
          {
            [arr[j], arr[j+1]] = [currentVal, arr[j]]
          }
      }
    return arr
  }

function practiceInsertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i]
    let j
    for (j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j]
    }
   
    arr[j + 1] = currentVal
  }
  return arr
}
// console.log(practiceInsertionSort([3,5,4,1,2]))
// -------------------------------------------------------------

function mergeArrays(arr1, arr2) {
  // 1) Create an empty array and look at the smallest values in each input array.
  // 2) While there are still values we have not looked at...
    // 2.1) If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array. Vice versa if the value in the second array is smaller.
    // 2.2) Once we exhaust one array, push in all remaining values from the other array.

  let result = []
  let i = 0;
  let j = 0;
  while(i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      result.push(arr1[i]);
      i++
    } else {
      result.push(arr2[j])
      j++
    }
  }
  while(i < arr1.length) {
    result.push(arr1[i]) 
    i++
  }
  while(j < arr2.length) {
    result.push(arr2[j])
    j++
  }
  return result
}


// console.log(practiceMergeArrays([5, 6, 7, 8], [1, 2, 3, 4]))

function mergeSort(array) {
  // 1) Break up the entire array into halves until you have arrays that are empty or have one element.
  // 2) Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array. 
  // 3) Once the array has been merged back together, return the merged (and sorted!) array.
  if (array.length <= 1) return array;
  let mid = Math.floor(array.length/2)
  let left = mergeSort(array.slice(0, mid))
  let right = mergeSort(array.slice(mid))

  return mergeArrays(left, right)
}
// console.log(mergeSort([ 7, 8, 1, 2, 6, 3, 2, 4]))

// -------------------------------------------------------------

function practiceMergeArrays(array1, array2) {
  let result = []
  let i =0
  let j = 0

 while (i < array1.length && j < array2.length) {
    if(array1[i]< array2[j]) {
      result.push(array1[i])
      i++
    } else {
      result.push(array2[j])
      j++
    }
  }

  while(i < array1.length){
    result.push(array1[i])
    i++
  }
  while(j < array2.length){
    result.push(array2[j])
    j++
  }

  return result
  
}

function practiceMergeSort(array) {
  if (array.length <= 1) return array;
  let mid = Math.floor(array.length/2)
  let left = practiceMergeSort(array.slice(0, mid))

  let right = practiceMergeSort(array.slice(mid))

  return practiceMergeArrays(left, right)
}
console.log(practiceMergeSort([ 7, 8, 1, 2, 6, 3, 2, 4]))

// -------------------------------------------------------------

// Pseudocode
// Accept 3 arguments. An array, starting index with the default of 0, and ending index with the default of array.length - 1.
// Grab the pivot from the start of the array.
// Store the current pivot index in a variable to keep track of where pivot should end up.
// Loop through array from start until end.
  // If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index.
// Swap the starting element (i.e. the pivot) with the pivot index.
// Return the pivot helper.

function pivotHelper(array, start=0, end) {
  let pivot = array[start];
  let swapIdx = start;
  for (let i = start+1; i <= end; i++){
    if (pivot > array[i]) {
      swapIdx++;
      swap(array, swapIdx, i)
      
    }
  }
  swap(array, start, swapIdx)
  return swapIdx
}

// Pseudocode
// Call the pivot on the array.
// When the helper returns to you the updated pivot index, recursively call the pivotHelper on the subarray to the left of the index, and the subarray with to the right of the index.
// Your base case occurs when you consider a subarray with less than 2 elements.

function quickSort(array, left=0, right=array.length-1) {
  if(left < right) {
    let pivotIndex = pivotHelper(array, left, right)

    // left
    quickSort(array, left, pivotIndex - 1)

    // right
    quickSort(array, pivotIndex + 1, right)
  }

  return array
}

// console.log(quickSort([3, 2, 5, 9, 7, 4]))
// -------------------------------------------------------------
function practicePivotHelper(array, start=0, end) {
  let pivot = array[start]
  let swapIdx = start

  for(let i = start+1; i <= end; i++) {
    if(pivot > array[i]) {
      swapIdx++
      swap(array, swapIdx, i)
    }
  }

  swap(array, start, swapIdx)

  return swapIdx
}

function practiceQuickSort(array, left=0, right=array.length-1) {

}

console.log(practiceQuickSort([3, 2, 5, 9, 7, 4]))
// -------------------------------------------------------------

// RADIX SORTER HELPERS

function getDigit(num, i) {
  // returns digit in num at the given place value
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  // returns the number of digits in num
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  // Given an array of numbers, returns the number of digits in the largest number in the list
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

// -------------------------------------------------------------

// RADIX SORT
// Pseudocode
// Define a function that accepts a list of numbers.
// Figure out how many digits the largest number has.
// Loop from k=0 up to the largest numbers of digits.
// For each iteration create buckets for each digit (0-9) and place each number in the corresponding bucket based on its kth digit.
// Replace our existing array with values in our buckets, starting with 0 and going up to 9.
// Return list.

function radixSort(numbers) {
  let maxDigits = mostDigits(numbers)

  for(let k = 0; k < maxDigits; k++ ) {
    let digitBuckets = Array.from({length: 10}, () => [])
    for (let i = 0; i < numbers.length; i++) {
      let digit = getDigit(numbers[i], k)
      digitBuckets[digit].push(numbers[i])
    }
    numbers = [].concat(...digitBuckets)
  }
  return numbers
}
// console.log(radixSort([23,567,89,12234324,90]))

// -------------------------------------------------------------

