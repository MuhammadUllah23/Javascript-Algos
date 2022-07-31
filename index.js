// console.log()

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

console.log(practiceFrequency("applesauce", "saucapple"))

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

function palindrome(s) {
//     make a copy of s and use the replace method with regex to get remove non-alphanumerical characters
    let copyS = s.replace(/[^a-z0-9]/gi, '').toLowerCase()
    return copyS
};
