1.
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2021
}
console.log("1. Năm sản xuất của xe là", car["year"]);
2.
const person = {
    name: "Đỗ Thanh Hiền",
    address: {
        street: "Quốc Lộ 13",
        city: "Hồ Chí Minh",
        country: "Việt Nam"
    }
}
console.log("2. Người dùng này ở đường", person["address"]["street"]);
3.
const student = {
    name: "Đỗ Thanh Hiền",
    grades: {
        math: 8,
        english: 9
    }
}
console.log("3. Điểm toán của người dùng này là ", student["grades"]["math"], "điểm");
4.
const settings = {
    volume: 70,
    brightness: 90,
}
settings["volume"] = 100;
console.log("4.", settings);
5.
const bike = {
}
bike["color"] = "red";
// console.log("5.",bike);
6.
const employee = {
    age: 25,
    name: "Đỗ Thanh Hiền"
}
delete employee["age"];
// console.log("6.",employee);
7.
const school = {
    classA: ["An", "Bình", "Châu"],
    classB: ["Đào", "Hương", "Giang"]
}
// console.log("7.",school);