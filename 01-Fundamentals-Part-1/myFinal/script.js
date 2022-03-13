// calculating the BMI of const values

const markMass = 78;
const johnMass = 92;
const markHeight = 1.69;
const johnHeight = 1.95;


markBMI = markMass / markHeight ** 2;
johnBMI = johnMass / johnHeight ** 2;

markHeigherBMI = markBMI > johnBMI;
// console.log(markBMI, johnBMI);
// console.log(markHeigherBMI);

if (markBMI > johnBMI) {
    console.log(`Mark's BMI(${markBMI.toFixed(1)}) is higher than John's BMI(${johnBMI.toFixed(1)})!`);
} else {
    console.log(`John's BMI(${johnBMI.toFixed(1)}) is higher than Mark's BMI!(${markBMI.toFixed(1)})`);
}