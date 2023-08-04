import type { Action } from './types';
import type { EquipmentState, Brick } from '../types';

export const setEquipmentState = (id: number, equipmentState: EquipmentState): Action => ({
    type: 'SET_EQUIPMENT_STATE',
    id,
    data: equipmentState,
})

export const setBrickType = (id: number, brick: Brick): Action => ({
    type: 'SET_BRICK_TYPE',
    id,
    data: brick,
})