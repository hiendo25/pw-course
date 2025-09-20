1.
function multiply(a, b) {
    const result = a * b;
    return result;
}
console.log(multiply(10, 10), multiply(5, 6));
2.
function findMin(a, b, c) {
    // if (a < b && a < c) return a;
    // if (b < c && b < a) return b;
    // if (c < a && c < b) return c;
    let min = a;
    if (b < min) min = b;
    if (c < min) min = c;
    return min;
}
console.log(findMin(9, 20, 1), findMin(1, 6, 8));
3.
function getTopStudents(students, threshold) {
    const result = [];
    for (i = 0; i < students.length; i++) {
        if (students[i].score >= threshold)
            result.push(students[i].name);
    }
    return result;
}
const students = [
    { name: "Hiền", score: 10 },
    { name: "Huy", score: 9.5 },
    { name: "Duy", score: 6 },
    { name: "Đạt", score: 9 }
]
console.log(getTopStudents(students, 8));
4.
function calculateInterest(principal, rate, years) {
    const total = principal + principal * rate * years/100;
    return total;
}
console.log(calculateInterest(10_000_000, 5, 2));