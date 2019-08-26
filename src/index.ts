import express from 'express';
import cors from 'cors';

import bubbleSort from './bubbleSort';
import insertionSort from './insertionSort';
import selectionSort from './selectionSort';
import quickSort from './quickSort';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    const response = [{ ...bubbleSort }, { ...insertionSort }, { ...selectionSort }, { ...quickSort }];

    res.json({
        response,
    });
});

app.listen(7878, () => {
    console.log('server online on port 7878!');
});
