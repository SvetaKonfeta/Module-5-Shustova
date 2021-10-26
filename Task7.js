let arr = [10, 23, 47,'!', 96, 54, 2];
console.log(arr.filter(elem => elem %
    2 === 0).length);
console.log(arr.filter(elem => elem %
    2-1 === 0).length);