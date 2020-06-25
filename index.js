function updateObjectWithKeyAndValue(object, key, value) {

  return Object.assign({}, object, { [key]: value })
}

var newObj = {
  prop2: 2
}
updateObjectWithKeyAndValue(newObj, prop2, '2')

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  var obj = {
    prop2: 1
  }
  obj.prop2 = [2];
}
