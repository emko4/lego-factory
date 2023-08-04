import React from 'react';

import { useResetStore } from './store/Store';
import { Equipments } from './components/Equipments';
import { Application } from './components/Application';
import { History } from './components/History';
import { generateFactory } from './store/generator'

import './LegoFactory.css';

export const LegoFactory = () => {
    const { setFactory } = useResetStore();
    const handleOnGenerate = () => {
        const factory = generateFactory();

        setFactory(factory);
    }

    return (
        <div className="lego-factory">
            <div className="web-view">
                <div className="equipments-wrapper"><Equipments /></div>
                <div className="history-wrapper"><History /></div>
            </div>
            <div className="app-view">
                <Application />
                <button
                    className="generate"
                    onClick={handleOnGenerate}
                >
                    Generate factory
                </button>
            </div>
        </div>
  );
}
