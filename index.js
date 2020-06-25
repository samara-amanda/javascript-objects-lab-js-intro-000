function updateObjectWithKeyAndValue(object, key, value) {

  return Object.assign({}, object, { [key]: value })
}

var newObj = {
  prop2: 2
}
updateObjectWithKeyAndValue(newObj, prop2, '2')
