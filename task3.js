let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
}

let sum = 0;
for (let employee in salaries){
    sum += salaries[employee];
}

console.log(sum);