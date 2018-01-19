setTimeout(() => {
    console.log("1")
}, 500);

console.log("2");

let a = setTimeout(() => {
   console.log("3")
}, 1000);

// console.log(a);

setTimeout(() => {
    setTimeout(() => {
        console.log("4")
    }, 900);
}, 400);
