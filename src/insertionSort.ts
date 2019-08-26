import { vetorInsertionSort } from './service/array';

const startTime = Date.now();

let moves = 0;
let aux2;
let temp;

for (let i = 1; i < vetorInsertionSort.length; i += 1) {
    aux2 = vetorInsertionSort[i];
    temp = i - 1;
    while (temp >= 0 && aux2 < vetorInsertionSort[temp]) {
        moves += 1;
        vetorInsertionSort[temp + 1] = vetorInsertionSort[temp];
        temp -= 1;
    }

    vetorInsertionSort[temp + 1] = aux2;
}

const endTime = Date.now() - startTime;

const result = {
    name: 'insertionSort',
    moves: moves / 100,
    time: endTime * 100,
    amt: 2400,
};

export default result;
