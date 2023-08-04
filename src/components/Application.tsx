import type { FC, ChangeEvent } from 'react';

import type { Brick } from '../types';
import { useStore } from '../store/Store';
import { getBrickName, getEquipmentName } from '../service';
import { BRICK_TYPE, STARTING_TIME, STOPPING_TIME } from '../constants';

import './Application.css';

export const Application: FC = () => {
    const { selectedEquipment, equipments, setSelectedEquipment, setEquipmentState, setBrickType } = useStore();

    const handleOnChangeEquipment = (event: ChangeEvent<HTMLSelectElement>) => {
        const equipmentId = Number.parseInt(event.target.value, 10);

        setSelectedEquipment(equipmentId);
    }

    const handleOnChangeBrickType = (event: ChangeEvent<HTMLSelectElement>) => {
        const brick = event.target.value as Brick;

        setBrickType(selectedEquipment, brick);
    }

    const handleOnStart = () => {
        setEquipmentState(selectedEquipment, 'STARTING_UP');
        setTimeout(() => {
            setEquipmentState(selectedEquipment, 'RUNNING');
        }, STARTING_TIME);
    };

    const handleOnStop = () => {
        setEquipmentState(selectedEquipment, 'WINDING_DOWN');
        setTimeout(() => {
            setEquipmentState(selectedEquipment, 'STANDING');
        }, STOPPING_TIME);
    };

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
                    {equipments.map((e, index) => (
                        <option key={index} value={index}>{getEquipmentName(index)}</option>
                    ))}
                </select>

                <h3>Change brick type</h3>
                <select
                    className="selectBrickType"
                    value={equipment.brickType}
                    onChange={handleOnChangeBrickType}
                    disabled={equipment.state !== 'STANDING'}
                >
                    {BRICK_TYPE.map((brickType, index) => (
                        <option key={index} value={brickType}>{getBrickName(brickType)}</option>
                    ))}
                </select>

                <button
                    className="button"
                    onClick={handleOnStart}
                    disabled={equipment.state !== 'STANDING'}
                >
                    START
                </button>
                <button
                    className="button"
                    onClick={handleOnStop}
                    disabled={equipment.state !== 'RUNNING'}
                >
                    STOP
                </button>
            </div>
        </div>
    );
};