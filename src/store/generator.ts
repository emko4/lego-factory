import type { Equipment } from "./types";
import { BRICK_TYPE } from '../constants';

// min and max included
const randomNumber = (min: number, max: number): number =>  {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export const generateFactory = (): Equipment[] => {
    const countOfEquipments = randomNumber(4, 10);

    return Array(countOfEquipments).fill(null).map(() => {
        return {
            state: Math.random() < 0.5 ? 'STANDING' : 'RUNNING',
            brickType: BRICK_TYPE[randomNumber(0, BRICK_TYPE.length - 1)],
            history: [],
        };
    });
};