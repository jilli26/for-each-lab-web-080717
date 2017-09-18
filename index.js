function iterativeLog(array) {
  array.forEach(function(element, index) {
    console.log (`${index}: ${element}`)
  })
}


function iterate(callback) {
  const array = ['shoe', 'umbrella', 'hat', 'shirt']

  array.forEach(callback)
  return array
}



function doToArray(array, callback) {
  array.forEach(callback)
  return array
}
