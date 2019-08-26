import { vetorQuickSort } from './service/array';

const startTime = Date.now();

let moves = 0;
let aux;

const partition = (items: number[], left: number, right: number) => {
    const pivot = items[Math.floor((right + left) / 2)];
    let i = left;
    let j = right;
    while (i <= j) {
        while (items[i] < pivot) {
            i += 1;
        }
        while (items[j] > pivot) {
            j -= 1;
        }
        if (i <= j) {
            moves += 1;
            aux = items[i];
            items[i] = items[j];
            items[j] = aux;
            i += 1;
            j -= 1;
        }
    }
    return i;
};

const quickSort = (items: number[], left: number, right: number) => {
    let index;
    if (items.length > 1) {
        index = partition(items, left, right);
        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }
        if (index < right) {
            quickSort(items, index, right);
        }
    }
    return items;
};

quickSort(vetorQuickSort, 0, vetorQuickSort.length - 1);

const endTime = Date.now() - startTime;

const result = {
    name: 'quickSort',
    moves,
    time: endTime * 100,
    amt: 2400,
};

export default result;
