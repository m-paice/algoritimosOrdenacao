import { vetorBubbleSort } from './service/array';

const startTime = Date.now();

let moves = 0;
let aux1;

for (let i = 0; i < vetorBubbleSort.length; i += 1) {
    for (let j = i + 1; j < vetorBubbleSort.length; j += 1) {
        if (vetorBubbleSort[j] > vetorBubbleSort[j + 1]) {
            moves += 1;
            aux1 = vetorBubbleSort[j];
            vetorBubbleSort[j] = vetorBubbleSort[j + 1];
            vetorBubbleSort[j + 1] = aux1;
        }
    }
}

const endTime = Date.now() - startTime;

const result = {
    name: 'bubbleSort',
    moves: moves / 100,
    time: endTime * 100,
    amt: 2400,
};

export default result;
