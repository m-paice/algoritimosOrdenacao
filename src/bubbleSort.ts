import { vetorBubbleSort } from './service/array';

const startTime = Date.now();

let moves = 0;
let aux1;

for (let i = 0; i < vetorBubbleSort.length; i += 1) {
    for (let j = i + 1; j < vetorBubbleSort.length; j += 1) {
        if (vetorBubbleSort[i] > vetorBubbleSort[j]) {
            moves += 1;
            aux1 = vetorBubbleSort[i];
            vetorBubbleSort[i] = vetorBubbleSort[j];
            vetorBubbleSort[j] = aux1;
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
