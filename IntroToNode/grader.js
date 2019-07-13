function grader(arr) {
    var sum = 0;
    for(var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum/arr.length;
}

score1 = [1,2,3,4,5,6,7,8,9,10];
score2 = [10,20,30,40,50];

console.log(grader(score1));
console.log(grader(score2));