let x = true;
switch (typeof x) {
    case 'number':
        alert(x + ' - Число');
        break;
    case 'string':
        alert(x + ' - Строка');
        break;
    case 'boolean':
        alert(x + ' - Логический тип');
        break;
    default:
        alert(x + ' - Тип x не определен');
}