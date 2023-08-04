import type { EquipmentState, Brick } from '../types';

export type ActionType = 'SET_SELECTED_EQUIPMENT' | 'SET_EQUIPMENT_STATE' | 'SET_BRICK_TYPE';

export type Action = {
    type: 'SET_EQUIPMENT_STATE';
    id: number;
    data: EquipmentState;
} | {
    type: 'SET_BRICK_TYPE';
    id: number;
    data: Brick;
} | {
    type: 'SET_SELECTED_EQUIPMENT';
    id: number;
}

export type HistoryRecord = {
    datetime: Date;
    action: 'SET_EQUIPMENT_STATE';
    data: EquipmentState;
} | {
    datetime: Date;
    action: 'SET_BRICK_TYPE';
    data: Brick;
}

export type Equipment = {
    state: EquipmentState;
    brickType: Brick;
    history: HistoryRecord[];
}

export type State = {
    selectedEquipment: number;
    equipments: Equipment[];
}

export type ContextValue = {
    state: State;
    setSelectedEquipment: (id: number) => void;
    setEquipmentState: (id: number, equipmentState: EquipmentState) => void;
    setBrickType: (id: number, brick: Brick) => void;
}