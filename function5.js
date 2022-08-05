/// declare function

function getAverage(assignment1, assignment2, assignment3) {
    const total = assignment1 + assignment2 + assignment3;
    const average = total / 3;
    return average;
}

const assignment1mark = 55;
const assignment2mark = 60;
const assignment3mark = 60;

var averageMark = getAverage(assignment1mark, assignment2mark, assignment3mark);
console.log('Assignment Mark is = ', averageMark);


//// declare function2

function getResult(num1, num2) {
    const add = num1 + num2;
    return add;
}

const r1 = getResult(12, 13);
const r2 = getResult(23, 34);

const finalresult = getResult(r1, r2);
console.log('Final result is = ', finalresult);