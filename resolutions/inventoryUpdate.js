// DESCRIPTION

/* 
Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current 
existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory 
array. The returned inventory array should be in alphabetical order by item.
*/

// v1

const updateInventory1 = (arr1, arr2) => {
  let newArr = [].concat(arr1);
  // looping through elements in second array
  arr2.forEach((elem) => {
    let isFound = false;
    // checking whether there is already an item like that in first array
    newArr.forEach((arr) => {
      if (arr.includes(elem[1])) {
        // when item is found it sums the quantities
        isFound = true;
        arr[0] = arr[0] + elem[0];
      }
    });
    // item not found, adding it to first array
    if (!isFound) {
      newArr.push(elem);
    }
  });
  // sorting
  newArr = newArr
    .map((elem) => elem.reverse())
    .sort()
    .map((elem) => elem.reverse());

  return newArr;
};

// v2

const updateInventory2 = (arr1, arr2) => {
  const concatArr = arr1
    .concat(arr2)
    .map((arr) => arr.reverse())
    .sort()
    .map((arr) => arr.reverse());
  let resArr = [];
  let lastItem = "";

  concatArr.forEach((arr) => {
    if (arr[1] === lastItem) {
      resArr[resArr.length - 1][0] = resArr[resArr.length - 1][0] + arr[0];
    } else {
      lastItem = arr[1];
      resArr.push(arr);
    }
  });
  
  return resArr;
};

// Example

var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"],
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"],
];

console.log(updateInventory1(curInv, newInv));
