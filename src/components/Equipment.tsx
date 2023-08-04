import type { FC } from 'react';

import { Equipment as EquipmentType } from '../store/types';

import './Equipment.css';
import { getBrickName, getEquipmentStateName } from '../service';

interface Props {
    equipment: EquipmentType;
}

export const Equipment: FC<Props> = ({ equipment}) => {
    const { state, brickType } = equipment;

    return (
        <div className="equipment">
            <div className="state">
                <div className={`type type_${state}`} />{getEquipmentStateName(state)}
            </div>
            <div className="brick"><b>Brick type:</b> {getBrickName(brickType)}</div>
        </div>
    );
};