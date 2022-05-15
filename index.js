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
    }}
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


console.log(binarySearch([1,2,3,4,5], 5))