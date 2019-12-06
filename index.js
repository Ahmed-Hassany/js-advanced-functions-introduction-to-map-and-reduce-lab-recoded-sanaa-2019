// Your code here
function mapToNegativize(sourceArray){
  return sourceArray.map(function(item){
    return item*(-1)
  })
}

function mapToNoChange(sourceArray){
  return sourceArray.map(function(item){
    return item
  })
}

function mapToDouble(sourceArray){
  return sourceArray.map(function(item){
    return item+item
  })
}

function mapToSquare(sourceArray){
  return sourceArray.map(function(item){
    return item*item
}

function reduceToTotal(sourceArray, startingPoint=0){
  return sourceArray.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
},startingPoint)
}