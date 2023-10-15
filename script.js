console.log("Java Script");

//var -Var is a variable which is having local,global and block scope that means can be used outside,inside or anywhere in an program
// var a=10;
// if(a!=0){
//     console.log(a);
// }

//let-it is a block scope variable that can be used only inside the block of elements here we can reassign a value but we cant able to redeclare

// let a=89;
// let a=90;  //Cannot redeclare block-scoped variable 'a'

// let a=90;
// a=89; it is possible because we are only reassigning the value not redefining it

// console.log(a);  //89 takes the last given value

//Const-It is also block scope variable we cant able to redeclare or define it 

// const a=90;
// const a=8;   Cannot redeclare block-scoped variable 'a'.ts(2451)

// Spread operator(...)-It will converts the given array into individual string in an array
//It is mainly used for expanding arrays
//Applicable for both strings and array

// let a=["guvi","kol"];
// console.log(...a);  o/p:guvi gol


//Application :Splits into CharacterData

// var p="demo";           

// var res=[...p];
// console.log(res);  o/p:d e m o
 
//Used to merge array
// let a=[9,8];
// let b=[3,3];
// var res= [...a,...b];
// console.log(res);  o/p:  [9, 8, 3, 3]

// Destructing the array - unpacking the array element into a bunch of variables

// let array=["aa","bb","cc","dd"];
// let[a,b,c,d]=array;  //array destructing
// console.log(c);

//Destructing the Objects

// let obj={
//     name:"Pavithra",
//     quali:"mba",
// }

// var{name,quali}=obj;
// console.log(quali);   o/p:mba


//Template Literals -Helps us to concatenate the value inside the  console

//  var a=22;
//  var b=77;
// console.log(`The sum of 
// a and b is 
// ${a+b}`);   o/p:99
 

function add(a,b){
    return a+b;
}
console.log(add(2,5));

