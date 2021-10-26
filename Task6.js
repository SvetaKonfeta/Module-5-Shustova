let arr = [10, 23, 47, 96];
for(let i = 0; i < arr.length; i++) {
    console.log(arr.every(elem => elem === arr[i]));
}