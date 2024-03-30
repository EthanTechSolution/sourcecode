//ethan
//changes in the organisation
// var addVal=(x1:number,x2:number):number=>{
//     return x1+x2;
// }
// //if we use curly braces then return keyword is mandatory.if we dont use curly braces then retrun keyword id not used
// var result:number=addVal(12,20);
// console.log(result);
// var addVal=(x1:number,x2:number):number =>x1+x2;
// var result=addVal(10,20);
// console.log(result);
// var test =():void =>{
//     console.log("hello");  
// };
// test();
// var test=(n:number):number =>{
//     return n;
// };
// var val=test(10);
// console.log(val);
//multiplication of two number
// var multiply=(x1:number,x2:number):number=>{
//     return x1*x2;
// };
// console.log(multiply(10,20));
//create an array to store 3 value print that value using for loop
var result = function (n) {
    for (var i = 0; i < n.length; i++) {
        console.log(n[i]);
    }
};
var arr = [10, 20, 30];
result(arr);
