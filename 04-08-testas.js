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
let masyvas = [];
let ilgis = (Math.floor(Math.random() * (30 - 20 + 1)) + 20)
console.log(ilgis);
for (let i = 0; i < ilgis; i++) {
    let skaiciai = (Math.floor(Math.random() * (30 - 10 + 1)) + 10)
    masyvas.push(skaiciai);
    
}
console.log(masyvas)
let big = 0;
for (let i = 0; i < masyvas.length; i++) {
    if (big < masyvas[i] ) {
        big = masyvas[i];
    }
}
console.log(big);
console.log('-----------------------');




console.log('uzd 7');
//7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)
    let masyvasRaides = [];
    let raides = 'ABCD' 
    for (let i = 1; i <= 100; i++) {
        let atsitiktines = raides[Math.floor(Math.random() * raides.length)]
        masyvasRaides.push(atsitiktines)
    }
    console.log('raidziu masyve:', masyvasRaides.length);
    console.log(masyvasRaides);

    let kiekis = masyvasRaides;
    let suskaiciotaAtskirai = {A: 0, B: 0, C: 0, D: 0};

    for (let elem of kiekis) {
	    suskaiciotaAtskirai[elem]++;
    }

    console.log(suskaiciotaAtskirai);
  

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
console.log(pirminisSkaicius(8));


console.log('uzd 10');
const numeris = [1, 1, 1, 2, 2, 2, 3, 3, 3, 3];
function telefonoNumeris(n) {
    return `(${n[0]}${n[1]}${n[2]}) ${n[3]}${n[4]}${n[5]}-${n[6]}${n[7]}${n[8]}${n[9]}`
}
const pakeistas = telefonoNumeris(numeris);
console.log(pakeistas);

