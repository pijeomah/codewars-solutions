// Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.

// //

//My Solution
function mergeArrays(a, b) {
    const merged = a.concat(b)
    let sortMerged = merged.sort((a,b) => a -b)
    let uniqueSorted = new Set(sortMerged)
    const uniqueArr = [...uniqueSorted]
    return uniqueArr
  }
  