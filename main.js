const arr = [1,2,3,4,5,6,7,8,9,10];

function chunk(arr, chunkSize) {

    if (chunkSize === 0) {
        return `This size of chunks is not allowable!`;
    }
    
    if (chunkSize === 1) {
        return arr;
    }
    
    let finalArray = [];
    for (i = 0; i < arr.length; i += chunkSize) {
        finalArray.push(arr.slice(i, i + chunkSize));
    }

    return finalArray;
}

const result_3 = chunk(arr, 3); // 3 - размер каждого кусочка
console.log(result_3); // [[1,2,3], [4,5,6], [7,8,9], [10]]

const result_5 = chunk(arr, 5); // 5 - размер каждого кусочка
console.log(result_5); // [[1,2,3,4,5], [6,7,8,9,10]]

const result_1 = chunk(arr, 1); // 1 - размер каждого кусочка
console.log(result_1); // [1,2,3,4,5,6,7,8,9,10] - то есть исходный массив

const result_0 = chunk(arr, 0); // 0 - размер каждого кусочка
console.log(result_0); // написать пользователю в консоль что он не прав