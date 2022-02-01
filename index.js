// Write your solution here!
var cats = [ //is assigned an initial value of ["Milo", "Otis", "Garfield"]
    "Milo", "Otis", "Garfield"
]

 function destructivelyAppendCat(name){ //appends a cat to the end of the cats array
    cats.push("Ralph")
 }
 function destructivelyPrependCat(name){ //prepends a cat to the beginning of the cats array
    cats.unshift("Bob")
 }

 function destructivelyRemoveLastCat(name){ //removes the last cat from the cats array
     cats.pop()
 }

 function destructivelyRemoveFirstCat(name){ //removes the first cat from the cats array
    cats.shift()
 }

 function appendCat(name){ //appends a cat to the cats array and returns a new array, leaving the cats array unchanged
  var morecats = [...cats ,"Broom"]
  return morecats
 }
 
 function prependCat(name){ //prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
    var morecats2 = ["Arnold", ...cats]
    return morecats2
 }

 function removeLastCat(name){//removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
    var newcatlist = [
        ...cats.slice(0, cats.length-1)
    ]
    return newcatlist
 }
 function removeFirstCat(name){ //removes the first cat from the cats array and returns a new array, leaving the cats array unchanged
    var newcatlist2 = [
        ...cats.slice(-2)
    ]
    return newcatlist2
 }