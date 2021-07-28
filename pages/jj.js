const arrays = {
    array1: ['ss'],
    array2: ['mi'],
    array3: ['ds']
  }
  
  const optionsForDropdown = Object.keys(arrays) // ["array1", "array2",...]
  
  function returnSelectedArray(selectedKey) {
    return arrays[selectedKey]
  }
  const key = "array1"
//returnSelectedArray(key);
console.log(key);