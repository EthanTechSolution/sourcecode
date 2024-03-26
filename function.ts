// function addNum(x1:number,x2:number):void{
//     console.log(x1+x2);
    
// }
// addNum(10,20);

// function addNum(x1:number,x2:number):number{
//     return x1+x2;
// }
// var x=addNum(10,50);
// console.log(x);


function addNum(x1:string,x2:number):string{
    return x1+x2;
}
var x:string=addNum("ethan",20);//return type of x is optional if i dont give it automatically understand.
console.log(x);

// function test():void{
//     console.log("hello world");
// }
// test();

// function test(x1:string,x2:string){
//     return x1+``+x2;
// }
// var val:string=test('mike','thyson');
// console.log(val);

//===========Optional parameter in function argument===================

// function test(x1:number,x2?:number):void{
//     console.log(x1);
//     console.log(x2); 
// }
// test(10);//without optional argumrnt
// test(10,50);//with both argument

//================Default parameter====================

//if we pass the x2 value then it takes that value if we dont pass the x2 value then it takes the default value as parameter
//  function test(x1:number,x2:number=100):void{
//     console.log(x1);
//     console.log(x2);
    
//  }
// test(10);//here the x1=10 and x2=100 is taken default value
// test(10,40);//here the x1=10 and x2=40

//=======Back Tick advantage=======================
function test(name:string,city:string):void{
    console.log(`{name}{city}`);
    
}
test("mike","chennai")

