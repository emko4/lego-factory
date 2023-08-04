import type { FC } from 'react';
import moment from 'moment';

import type { HistoryRecord as HistoryRecordType, ActionType } from '../store/types';
import type { EquipmentState, Brick } from '../types';

import './HistoryRecord.css';

interface Props {
    record: HistoryRecordType;
    index: number;
}

const getActionText = (action: ActionType): string => {
    switch (action) {
        case 'SET_EQUIPMENT_STATE':
            return 'State change';
        case 'SET_BRICK_TYPE':
            return 'Brick change';
        default:
            return 'Unknown action'
    }
}

const getValueText = (value: EquipmentState | Brick): string => {
    switch (value) {
        case 'STANDING':
            return 'Standing';
        case 'STARTING_UP':
            return 'Starting...';
        case 'RUNNING':
            return 'Run';
        case 'WINDING_DOWN':
            return 'Stopping...';
        case 'PLATE':
            return 'Plate';
        case 'BRICK':
            return 'Brick';
        case 'TILE':
            return 'Tile';
        case 'TIRE':
            return 'Car tire';
        default:
            return 'Unknown value'
    }
}


export const HistoryRecord: FC<Props> = ({ record, index }) => {
    const { datetime, action, data} = record;

    return (
        <div className="record">
            <div>{index}</div>
            <div>{moment(datetime).format('YYYY-MM-DD HH:mm:ss')}</div>
            <div>{getActionText(action)}</div>
            <div>{getValueText(data)}</div>
        </div>
    );
};