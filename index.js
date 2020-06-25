function updateObjectWithKeyAndValue(object, key, value) {

  return Object.assign({}, object, { [key]: value })
}

var newObj = {
  prop2: 2
}
updateObjectWithKeyAndValue(newObj, prop2, '2')

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  obj.prop = [1, 2]
}
