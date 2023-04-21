//1 && 2

let arr1 = [];
let arr2 = [];

for (let i = 10; i < 21; i++) {
    arr1.push(i);
    arr2.push(i * i);
}
document.write(arr1.join(',') + '<hr>');
document.write(arr2.join(',') + '<hr>');

//3

for (let i = 1; i < 11; i++) {
    // document.write(i + ' * ' + '7' + " = " + i * 7 + '; ');
    document.write(`${i} * 7 = ${i * 7}; `)
};
document.write('<hr>');

//4

let sum = 0;
for (let i = 1; i < 16; i++) {
    sum += i;
}
document.write(sum + '<hr>')

//5

sum = 15;
for (let i = 16; i < 36; i++) {
    sum = sum * i;
}
document.write(sum + '<hr>');

//6

sum = 0;
for (let i = 1; i <= 500; i++) {
    sum += i;
}
sum /= 500;
document.write(sum + '<hr>')

//7

arrPaired = [];
for (i = 30; i <= 80; i++) {
    if (i % 2 == 0) {
        arrPaired.push(i);
    }
}
document.write(arrPaired + '<hr>');

//8 

let arr3 = [];
for (i = 100; i <= 200; i++) {
    if (i % 3 == 0) {
        arr3.push(i);
    }
}
document.write(arr3 + '<hr>');

//9

let nat = 90,
    dividers = [],
    pairedDividers = [],
    dividersSum = 0;
for (i = 1; i <= nat; i++) {
    if (nat % i == 0) {
        dividers.push(i);
    }
}
for (j = 0; j < dividers.length; j++) {
    if (dividers[j] % 2 == 0) {
        pairedDividers.push(dividers[j]);
    }
}
for (k = 0; k < pairedDividers.length; k++) {
    dividersSum += pairedDividers[k];
}
document.write(`Натуральне число: ${nat};<br>Дільники: ${dividers};<br>Кількість парних дільників: ${pairedDividers.length};<br>Сума парних дільників: ${dividersSum}<hr><br>`);

//10
let arrMultiplie = [];
document.write(`<table style="border:1px solid black">`)
for (i = 1; i < 11; i++) {
    arrMultiplie.push(i);
}

for (j = 0; j < arrMultiplie.length; j++) {
    document.write(`<tr><td style="border:1px solid black; text-align: center">${arrMultiplie[j]}</td>`);
    for (k = 2; k < 11; k++) {
        document.write(`<td style="border:1px solid black; text-align: center">${arrMultiplie[j] * k}</td>`)
    }
    document.write(`</tr>`);
}
document.write(`</table>`)