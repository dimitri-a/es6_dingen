var b = (x) => {
    return x * 2
}


//https://www.sitepoint.com/es6-arrow-functions-new-fat-concise-syntax-javascript/

var multiply = (x, y) => {
    return x * y
};


//var f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;

//console.log('testing=f()', f())

console.log('testing=b(4)', b(4))
console.log('testing ', multiply(4, 2))


var materials = [
    "Hydrogen",
    "Helium",
    "Lithium",
    "Beryllium"
];

var le = materials.filter(mat => mat.length > 7);
console.log('testing=le', le)


function Person() {
    // The Person() constructor defines `this` as an instance of itself.
    this.age = 10;
    //var that = this;

    this.growUp= () => this.age++
}

var p = new Person();
p.growUp();

console.log('testing=p.age', p.age)

// var obj={
//     age:1,
//     foo:function(){
//         console.log(this.age++)
//
//     }
// }
//
// //obj.foo()
// console.log('testing age', obj.foo())
