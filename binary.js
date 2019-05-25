// Бинарный поиск
let array = [1,192,163,99,24,25,65,777,1,83, 12];

function binarySearch(arr, value){
    let high = arr.length - 1; // Чтобы найти последний индекс массива
    let low = 0;
    let mid = 0;
    
    while (low <= high){
        mid = Math.floor((high + low) / 2); // Находим среднее значения индекса
        if (arr[mid] === value) {
            return arr[mid];
        }
    }
}
console.log(array);

