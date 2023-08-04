import type { FC, ChangeEvent } from 'react';
import { useState } from 'react';

import type{ Brick } from '../types';
import { useStore } from '../store/Store';
import { getBrickName, getEquipmentName } from '../service';
import { BRICK_TYPE } from '../constants';

import './Application.css';

export const Application: FC = () => {
    const { equipments, setBrickType } = useStore();
    const [selectedEquipment, setSelectedEquipment] = useState(0);
    const [selectedBrick, setSelectedBrick] = useState<Brick>(equipments[0].brickType);

    const handleOnChangeEquipment = (event: ChangeEvent<HTMLSelectElement>) => {
        const equipmentId = Number.parseInt(event.target.value, 10);

        setSelectedEquipment(equipmentId);
        setSelectedBrick(equipments[equipmentId].brickType);
    }

    const handleOnChangeBrickType = (event: ChangeEvent<HTMLSelectElement>) => {
        const brick = event.target.value as Brick;

        setSelectedBrick(brick)
        setBrickType(selectedEquipment, brick);
    }

    const equipment = equipments[selectedEquipment];

    return (
        <div className="application">
            <h1 className="title">Application</h1>
            <div className="form">
                <h2>Select equipment</h2>
                <select
                    className="selectEquipment"
                    value={selectedEquipment}
                    onChange={handleOnChangeEquipment}
                >
                    {equipments.map((equipment, index) => (
                        <option key={index} value={index}>{getEquipmentName(index)}</option>
                    ))}
                </select>

                <h3>Change brick type</h3>
                <select
                    className="selectBrickType"
                    value={selectedBrick}
                    onChange={handleOnChangeBrickType}
                >
                    {BRICK_TYPE.map((brickType, index) => (
                        <option key={index} value={brickType}>{getBrickName(brickType)}</option>
                    ))}
                </select>

                <button
                    className="button"
                    disabled={equipment.state !== 'STANDING'}
                >
                    START
                </button>
                <button
                    className="button"
                    disabled={equipment.state !== 'RUNNING'}
                >
                    STOP
                </button>
            </div>
        </div>
    );
};