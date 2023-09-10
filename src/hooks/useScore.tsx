import { useContext } from 'react';
import { ScoreContext } from '../context/scoreContext';

export default function UseScore() {
    return useContext(ScoreContext)
}