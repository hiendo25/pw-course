// trim (): cat space o dau hoac cuoi chuoi

let className = "K18 PlayWright";
console.log(className);
console.log(className.trim());

console.log(className.trim().toLowerCase());
console.log(className.trim().toUpperCase());

// includes(): Kiem tra chuoi co chuoi con nao hay khong, gia tri tra ve la boolean (true or false)

console.log(className.toLowerCase().includes("k18"));

//replace(): thay the, neu khong tim thay chuoi thi khong ghi de
console.log(className.replace("K58","K19"));

//split(): chia chuoi thanh manh, tính từ dấu @ đến dấu @ tiếp theo
let emails = "hiendo@gmail.com, dohien@gmail.com, datdo@gmail.com";
const arrEmails = emails.split("@");
console.log(arrEmails)

//substring(): 
console.log(className.substring(0,3)); //start-End ( End = index muốn lấy +1)
console.log(className.substring(5)); // lấy từ vị trí thứ 5 và in hết đằng sau

//indexOf(): tìm index của chuỗi( vd chữ P), ttuyen vao chuoi khogn co trong string thi tra ra -1
console.log(className.indexOf("rrrr"));






let myName = "     do thAnh Hien";
console.log(myName.trim().toUpperCase());
console.log(myName.indexOf("Hien"));
console.log(myName.trim().replace("do thAnh", "Do Thanh"));
console.log(myName.trim().split(" "));