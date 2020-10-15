// Your code here
function mapToNegativize(array){
    let newArray = array.map( num => num* -1)
    return newArray
}

function mapToNoChange(array){
    let newArray = array.map(obj => obj)
    return newArray
}

function mapToDouble(array){
    let newArray = array.map( num => num* 2)
    return newArray
}

function mapToSquare(array){
    let newArray = array.map( num => num* num)
    return newArray
}

// function reduceToTotal(array, value){
//     let newArray = array.reduce((prev, next) => prev + next, value)
//     return newArray
// }

function reduceToTotal(src, startingPoint=0) {
    let total = startingPoint
    for (let i = 0; i < src.length; i++ ) {
      total = total + src[i]
    }
    return total
  }
  
  function reduceToAllTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (!src[i]) return false
    }
    return true
  }
  
  function reduceToAnyTrue(src) {
    for (let i = 0; i < src.length; i++ ) {
      if (src[i]) return true
    }
    return false
  }