// Бинарный поиск
let array = [1,192,163,99,24,25,65,777,1,83, 12];
//Выведем наш не сортированный массив
console.log(array);
// arr - наш массив элементов, value искомое число
function binarySearch(arr, value) {
    let high = arr.length - 1;
    let low = 0;
    let mid = 0;
    
    while (low <= high){
        mid = Math.floor((high + low) / 2); // Находим среднее значения индекса
        // Если искомое значение имеет индекс = середине(mid), то выводим значение середины(mid)
        if (arr[mid] === value) {
            return arr[mid];
        } else if (value > arr[mid]) {
            // Если искомое значение выше середины(mid), то началом(low) становится mid + 1, тем самым лишняя
            // половина убирается, то есть удаляются все цифры до середины(low)
            low = mid + 1;
        } else {
            // Если ниже, то удаляются все цифры от середины
            high = mid - 1;
        }
    }
    // Если не найдет значение, то выведет "Нет такого числа"
    return "Нет такого числа :(";
}
// Сортируем наш массив чисел, так как бинарный поиск только для сорт массива работает
let sortedArray = array.sort(
    function (a,b) {
        return a-b;
    }
);
// Выполним нашу функцию (тест)
let foundNumber = binarySearch(sortedArray, 777);
// Выведем наш сортированный массив
console.log(sortedArray);
// И результат поиска
console.log(foundNumber);

