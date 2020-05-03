const removeDuplicates = (arr) => {
  let last = 0
  for (let i = 0, len = arr.length; i < len; i++) {
    while (arr[i] === arr[last]) {
      i++
    }
    arr[++last] = arr[i]
  }
  arr.splice(last, arr.length - last)
}
