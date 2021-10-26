let a = +prompt('Введите значение')
console.log(typeof a)
if (!a || isNaN(a)) {
    console.log('Упс, кажется, вы ошиблись')
}else if (a % 2 === 0) {
    console.log('Чётное число')
}else {
    console.log('Нечётное число')
}