//ethan
// function test(n:number[]):void{
//     for(var x:number=0; x<n.length; x++){
//         console.log(n[x]);  
//     }
// }
// var x1:number[]=[10,20,30];
// test(x1);
//=========Rest Parameter=============
// function test(...n:any[]):void{
//     for(var x:number=0;x<n.length;x++){
//         console.log(n[x]); 
//     }
// }
// test(10,20,"mike")
// function test(i:string,...n:number[]):void{ 
//     for(var x:number=0; x<n.length;x++){
//         console.log(n[x]);      
//     }
//     console.log(i);
// }
// test("mike",10,20,30);
//======Back Tick advantage=======================
function test(name, city) {
    console.log("".concat(name).concat(city));
}
test('mike', 'chennai');
