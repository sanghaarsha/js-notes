// 0-59  : F
// 60-60 : D
// 70-79 : C
// 80-89 : B
// 90-100: A

const marks = [80, 80, 50, 90, 10];

function calculateGrade(marks) {
    let totalSum = 0;
    let count = 0;
    for (index of marks) {
        totalSum = index + totalSum;
        count++;
    }
    let averageMarks = totalSum / count;

    if (averageMarks <= 59)
        return ['F',averageMarks];
    else if (averageMarks <= 69)
        return ['D',averageMarks];
    else if (averageMarks <= 79)
        return ['C',averageMarks];
    else if (averageMarks <= 89)
        return ['B',averageMarks];
    else if (averageMarks <= 100)
        return ['A',averageMarks];
    else
        return 'error'
}

console.log(calculateGrade(marks));