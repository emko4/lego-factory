import type { FC } from 'react';

import type { Equipment as EquipmentType } from '../store/types';
import { getBrickName, getEquipmentName, getEquipmentStateName } from '../service';

import './Equipment.css';

interface Props {
    number: number;
    equipment: EquipmentType;
}

export const Equipment: FC<Props> = ({ number, equipment}) => {
    const { state, brickType } = equipment;

    return (
        <div className="equipment">
            <div className="number">{getEquipmentName(number)}</div>
            <div className="state">
                <div className={`type type_${state}`} />{getEquipmentStateName(state)}
            </div>
            <div className="brick"><b>Brick type:</b> {getBrickName(brickType)}</div>
        </div>
    );
};