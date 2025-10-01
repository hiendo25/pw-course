const myName = function (name){
    return `Hello` + `${name}`;
}
console.log(myName(" Hien ")); 


const calculateTotal = function (price, quantity, discount){
    return price * quantity - discount;
}
console.log("Gía trị là", calculateTotal(20,50,30));
