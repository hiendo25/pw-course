const myName = (name) => {
    return "Hello" + name;
}
console.log(myName(" Hien "));


const calculateTotal = (price, quantity, discount) => {
    return price * quantity - discount;
}
console.log("Gía trị là", calculateTotal(2_000, 50_000, 30_000_000));