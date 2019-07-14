/** ***************************
  [Description]
  Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

  Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2.  Elements that don't appear in arr2 should be placed at the end of arr1 in ascending order.

  [Input]
  arr1 = [2,3,1,3,2,4,6,7,9,2,19]
  arr2 = [2,1,4,3,9,6]
  [Output]
  [2,2,2,1,4,3,3,9,6,7,19]
*************************** */

/**
 * @param {number} n
 * @return {string[]}
 */

function relativeSortArray(arr1, arr2) {
  if (!arr2.length) {
    return arr1.sort();
  }

  const arr1Copy = [].concat(arr1);
  let result = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const target of arr2) {
    for (let i = 0; i < arr1Copy.length; i++) {
      if (arr1Copy[i] === target) {
        result.push(arr1Copy[i]);
        arr1Copy.splice(i, 1);
        i--;
      }
    }
  }

  result = result.concat(arr1Copy.sort((num1, num2) => (num1 < num2 ? -1 : 1)));

  return result;
}

function main() {
  console.log(relativeSortArray(
    [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19],
    [2, 1, 4, 3, 9, 6],
  ));
}

main();
