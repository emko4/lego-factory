import type { FC } from 'react';

import { Equipment } from './Equipment';
import { useStore } from '../store/Store';

import './Equipments.css';

export const Equipments: FC = () => {
    const { equipments} = useStore();

    return (
        <div className="equipments">
            {equipments.map((equipment, index) => {
                return <Equipment key={index} number={index} equipment={equipment} />
            })}
        </div>
    );
};