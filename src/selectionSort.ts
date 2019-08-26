import { vetorSelectionSort } from './service/array';

const startTime = Date.now();

let moves = 0;
let aux3;

for (let i = 0; i < vetorSelectionSort.length - 1; i += 1) {
    let min = i;
    for (let j = i + 1; j < vetorSelectionSort.length; j += 1) {
        if (vetorSelectionSort[j] < vetorSelectionSort[min]) {
            min = j;
        }
    }
    if (i !== min) {
        moves += 1;
        aux3 = vetorSelectionSort[i];
        vetorSelectionSort[i] = vetorSelectionSort[min];
        vetorSelectionSort[min] = aux3;
    }
}

const endTime = Date.now() - startTime;

const result = {
    name: 'selectionSort',
    moves,
    time: endTime * 100,
    amt: 2400,
};

export default result;
