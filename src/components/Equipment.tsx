import type { FC } from 'react';

import type { Equipment as EquipmentType } from '../store/types';
import { getBrickName, getEquipmentName, getEquipmentStateName } from '../service';

import './Equipment.css';

interface Props {
    number: number;
    equipment: EquipmentType;
    selected: boolean;
}

export const Equipment: FC<Props> = ({ number, equipment, selected}) => {
    const { state, brickType } = equipment;

    return (
        <div className={`equipment${selected ? ' selected' : ''}`}>
            <div className="number">{getEquipmentName(number)}</div>
            <div className={`state state_${state}`}>
                <div className="type" />{getEquipmentStateName(state)}
            </div>
            <div className="brick"><b>Brick type:</b> {getBrickName(brickType)}</div>
        </div>
    );
};