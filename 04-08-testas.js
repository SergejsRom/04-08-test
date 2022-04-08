console.log('uzd 1');
const result = palyginti(4, 4)
function palyginti(a, b) {
    if (a > b) { 
        return 'pirmas didesnis.'   
    }if (a < b) {
        return 'antras didesnis'
    }if (a === b) {
        return 'lygus'
    }}
console.log(result);

console.log('uzd 2');
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log('uzd 3');
for (let i = 0; i <= 10; i+=2) {
    console.log(i);
}

console.log('uzd 4');
for (let i = 0; i <5; i++) {
    let result = 0;
    result = (Math.floor(Math.random() * (10 - 1 + 1)) + 1) ;
    console.log(result)
}

console.log('uzd 5');
let skaicius;
while (skaicius !==5) {
    skaicius = (Math.floor(Math.random() * (10 - 1 + 1)) + 1);
  console.log(skaicius) 
}

console.log('uzd 6');
console.log('-------------- ');
console.log('uzd 7');
console.log('-------------- ');
console.log('uzd 8');
console.log('-------------- ');

console.log('uzd 9');

function pirminisSkaicius(a) {
    if (typeof a !== 'number')
        return 'not a number'
    if (a === 2)
        return 'pirminis'
    for (let i = 2; i < a; i++) {
        if (a % i === 0) {
            return 'nepirminis'
    }else{
        return 'pirminis'
    }        
    }
}
console.log(pirminisSkaicius(5));


console.log('uzd 10');
const numeris = [1, 1, 1, 2, 2, 2, 3, 3, 3, 3];
function telefonoNumeris(n) {
    return `(${n[0]}${n[1]}${n[2]}) ${n[3]}${n[4]}${n[5]}-${n[6]}${n[7]}${n[8]}${n[9]}`
}
const pakeistas = telefonoNumeris(numeris);
console.log(pakeistas);






