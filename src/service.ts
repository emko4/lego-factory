import { EquipmentState, Brick } from './types';

export const getEquipmentName = (number: number): string => {
    return `Equipment #${number + 1}`;
}

export const getEquipmentStateName = (equipmentState: EquipmentState): string => {
    switch (equipmentState) {
        case 'STANDING':
            return 'Standing';
        case 'STARTING_UP':
            return 'Starting up';
        case 'RUNNING':
            return 'Running';
        case 'WINDING_DOWN':
            return 'Winding down';
        default:
            return 'Unknown state';
    }
}

export const getBrickName = (brickType: Brick): string => {
    switch (brickType) {
        case 'BRICK':
            return 'Brick';
        case 'PLATE':
            return 'Plate';
        case 'TILE':
            return 'Tile';
        case 'TIRE':
            return 'Car tyre';
        default:
            return 'Unknown brick type';
    }
}