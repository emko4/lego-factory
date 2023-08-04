import type { EquipmentState, Brick } from '../types';

type ActionType = 'SET_EQUIPMENT_STATE' | 'SET_BRICK_TYPE';

export type Action = {
    type: 'SET_EQUIPMENT_STATE';
    payload: EquipmentState;
} | {
    type: 'SET_BRICK_TYPE';
    payload: Brick;
}

export type HistoryRecord = {
    datetime: string;
    action: ActionType;
}

export type Equipment = {
    state: EquipmentState;
    brickType: Brick;
    history: HistoryRecord[];
}

export type State = {
    equipments: Equipment[];
}

export type ContextValue = {
    state: State;
    setEquipmentState: (id: number, equipmentState: EquipmentState) => void;
    setBrickType: (id: number, brick: Brick) => void;
}