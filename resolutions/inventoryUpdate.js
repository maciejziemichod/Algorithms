// DESCRIPTION

/* 
Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current 
existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory 
array. The returned inventory array should be in alphabetical order by item.
*/

const updateInventory = (arr1, arr2) => {
  // looping through elements in second array
  arr2.forEach((elem) => {
    let isFound = false;
    // checking whether there is already an item like that in first array
    arr1.forEach((arr) => {
      if (arr.includes(elem[1])) {
        // when item is found it sums the quantities
        isFound = true;
        arr[0] = arr[0] + elem[0];
      }
    });
    // item not found, adding it to first array
    if (!isFound) {
      arr1.push(elem);
    }
  });
  // sorting
  arr1 = arr1
    .map((elem) => elem.reverse())
    .sort()
    .map((elem) => elem.reverse());

  return arr1;
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

console.log(updateInventory(curInv, newInv));
