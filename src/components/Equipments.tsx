import type { FC } from 'react';

import { Equipment } from './Equipment';
import { useStore } from '../store/Store';

import './Equipments.css';

export const Equipments: FC = () => {
    const { selectedEquipment, equipments} = useStore();

    return (
        <div className="equipments">
            {equipments.map((equipment, index) => (
                <Equipment
                    key={index}
                    number={index}
                    equipment={equipment}
                    selected={index === selectedEquipment}
                />
            ))}
        </div>
    );
};