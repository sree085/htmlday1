console.log("Welcome to JS");

// declaring variables
a=2;

// act as a global scope
var a=3;
{
    var a=233;
}
console.log(a)


let g=2;
// let g=3;
{
    let g=4;
    console.log(g)
}
console.log(typeof(g))


b=true;
console.log("Data type of b is "+typeof(b))

c="hello";
console.log("Datatype of c is "+typeof(c))

// javascript Objects
let person={
    name:'maya',
    age:22,
    loc:'tvm'
}
console.log(person.name)

let arr=['heera','jai',10];
console.log(arr[2])

console.log(arr.length)

let arr_obj=[{age:23,loc:'tvm'},{age:43,loc:'kochi'}];
console.log(arr_obj[1].loc)


function add(a,b) {
    var sum=a+b;
    return sum;
}
console.log(add(20,30))

let s=1;
let r=++s;
console.log(s)
console.log(r)

a1=23;
a2='23';
if (a1>a2){
    console.log("a1 is greater")
}
else if(a1==a2){
    console.log("a1 equals a2 and value is "+a1)
}
else{
    console.log("a2 is greater")
}

var arra=[10,20,30,40]
for (let i = 0; i < arra.length; i++) {
  console.log(arra[i]);

}

for (const i in arra)
{
    console.log
}

for(const i of arra){
    console.log(i)
}