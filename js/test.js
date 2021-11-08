// Simple JavaScript log statement
// function printHello() {
//   return "Hello there!";
// }


printHello=() => "Hello there!"
console.log(printHello())
// Original addition function
addition=(a, b) => a + b;
console.log(addition(3,4))

doubleAddition=(c, d) => addition(c, d) * 2;
 console.log(doubleAddition(33,25))

 let friends = ["Sarah", "Greg", "Cindy", "Jeff"];
 function listloop(lit){
   for (var i=0 ;i < lit.length;i++){console.log(lit[i]);}
 }
 listloop(friends)

 let vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];
 function veg(list){
   for (i=0; i<list.length ;i++){
     console.log("i love"+list[i])
   }
 }

 veg(vegetables)