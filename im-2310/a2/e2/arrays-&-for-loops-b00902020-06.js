var fruit1 = "banana";
var fruit2 = "pineapple";
var fruit3 = "apple";
var fruit4 = "peach";
var fruit5 = "orange";

var fruitArray = ["banana", "pineapple", "apple", "peach", "orange"];

var mixedArray = [42, "pineapple", true, [3, 6, "nine"], "orange"];

console.log(fruitArray);

for(let fruit of fruitArray){
   console.log(fruit);
   //console.log("hi");
   if(fruit === "banana"){
    console.log("i'm a banana")
    } else {
        console.log(fruit);
    }
}