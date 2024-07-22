// FN27 4-oy 4-dars vazifa

// For ga oid masalalar


// 1-savol

// let sum = 0;

// for (let i = 10; i <= 100; i++) {
//     if (i % 2 == 1) {
//         sum += i
//     }
// }

// console.log(sum);

// 2-savol

// let num = +prompt("Iltimos son kiriting");
// let sum = 1;

// if (num === 0) {
//     sum += 1;
// }else{
//     for (let i = 1; i <= num; i++) {
//         sum *= i
//     }
// }

// console.log(`${num} kiritgan soningizni faktoriyali ${sum}`);



// 3-savol

// for (let num = 2; num <= 50; num++) {
//     let sum = true; 

//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             sum = false;
//             break;
//         }
//     }

//     if (!sum) {
//         console.log(num); 
//     }
// }


// 4-savol

// let sum = 0;

// for (let i = 1; i <= 20; i++) {
//     sum += i * i
// }

// console.log(sum);

// 

// 5-savol



// 6-savol


// for (let num = 2; num <= 30; num++) {
//     let sum = true; 

//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             sum = false;
//             break;
//         }
//     }

//     if (!sum) {
//         console.log(num); 
//     }
// }


// 7-savol

// let num = prompt("raqam kiriting");
// let sum = "";

// for (let i = num.length - 1; i >= 0; i--) {
//     sum += num[i]
// }

// console.log(`( ${num} ) kiritgan soningizdi teskarisi ${sum}`);





// 8-savol

// let kvadratlari = 0;

// for (let i = 1; i <= 10; i++) {
//     if (i % 2 ===0) {

//         kvadratlari += i * i
//     }

// }

// let sum = 0;

// for (let i = 1; i <= 10; i++) {
//     if (i % 2 !== 0) {
//         sum += i * i * i;
//     }
// }


// let natija = kvadratlari - sum;

// console.log("Juft sonlarning kvadratlari yig'indisi: " + sum);
// console.log("Toq sonlarning kubiklari yig'indisi: " + kvadratlari);
// console.log("Ular orasidagi farq: " + natija);




// 9-savol

// for (let i = 1; i <= 50; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(i);
//     }

// }

// 10-savol

// let sum = 0;

// for (let i = 1; i <= 100; i++) {
//     sum += i

// }
// let yuz = 100;

// let natija = sum / yuz;


// console.log("1 dan 100 gacha bo'lgan sonlarning o'rtacha qiymati: " + natija);


// 11-savol

// let son = prompt("Iltimos son kiriting")

// let uzunligi = son.length

// console.log(`kiritgan sonizdi uzunligi ${uzunligi}`);


// 12-savol

// let num = prompt("Musbat sonni kiriting:");

// let sum = Number(num);

// if (sum > 0) {
//     let num2 = "";
//     for (let i = -sum; i < 0; i++) {
//         num2 += i + " ";
//     }
//     console.log("Barcha manfiy sonlarning qatori: " + num2);
// } else {
//     console.log("Iltimos, musbat son kiriting.");
// }


// 13-savol

// let num1 = prompt("Fibonachchi qatorining uzunligini kiriting:");

// let n = Number(num1);

// let arr = [];
// let a = 0, b = 1;
// for (let i = 0; a <= n; i++) {
//     arr.push(a);
//     let temp = a;
//     a = b;
//     b = temp + b;
// }

// console.log("Fibonachchi qatori: " + arr.join(", "));


// 14-savol

// let sum = 0;

// for (let i = 1; i <= 200; i++) {
//     if (i % 2 === 0) {
//         sum += i
//     }

// }

// console.log(sum);



// 15-savol

// let sum = 0;
// let arr = [];

// for (let i = 1; i < 20; i++) {
//     let num1 = i + 1;
//     let pairSum = i + num1;
//     sum += pairSum;
//     arr.push(`(${i} + ${num1})`);
// }

// console.log("Juftliklarning yig'indisi: " + arr.join(", "));
// console.log("Yig'indi: " + sum);

// Break/continue ga oid masalalar.

// 1-savol

// for (let i = 1; i <= 10; i++) {
//     if (i == 5) {
//         break;
//     }

//     console.log(i);
// }


// 2-savol

// for (let i = 1; i <= 10; i++) {
//     if (i == 3 || i == 7) {
//         continue;
//     }
//     console.log(i);

// }

// 3-savol

// for (;;) {
//     let num1 = prompt("Sonni kiriting:");

//     let number = Number(num1);

//     if (number === 7) {
//         console.log("Topildi!");
//         break; 
//     }

//     console.log("Son 7 emas. Qayta urinib ko'ring.");
// }


// 4-savol

// for (let i = 1; i <= 10; i+=2) {
//     console.log(i);

// }


// 5-savol

// for (let i = 1; i <= 100; i++) {
//     if (i === 50) {
//         break;
//     }
//     console.log(i);
// }
















































































