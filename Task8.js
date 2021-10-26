let friend = new Map ([
    ['Kate', 'black'],
    ['Peter', 'blue'],
    ['Elena', 'orange']
]);
for (let [key, value] of friend) {
    console.log(`Ключ - ${key}, значение - ${value}`);
}