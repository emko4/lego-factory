import type { FC } from 'react';

import { HistoryRecord } from './HistoryRecord';
import { useStore } from '../store/Store';
import { getEquipmentName } from '../service';

import './History.css';

export const History: FC = () => {
    const { selectedEquipment, equipments} = useStore();

    const historyRecords = equipments[selectedEquipment].history || [];

    return (
        <div className="history">
            <h1>History of {getEquipmentName(selectedEquipment)}</h1>
            <div className="table">
                <div className="header">
                    <div className="index">#</div>
                    <div>Datetime</div>
                    <div>Action</div>
                    <div>Value</div>
                </div>
                {historyRecords.map((record, index) => (
                    <HistoryRecord
                        key={index}
                        record={record}
                        index={historyRecords.length - index}
                    />
                ))}
            </div>
        </div>
    );
};