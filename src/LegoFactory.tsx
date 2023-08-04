import React from 'react';
import { StoreProvider } from './store/Store';
import { Equipments } from './components/Equipments';

import './LegoFactory.css';

export const LegoFactory = () => {
  return (
      <StoreProvider>
        <div className="lego-factory">
          <div className="web-view">
              <div className="equipments-wrapper"><Equipments /></div>
              <div className="history-wrapper"></div>
          </div>
          <div className="app-view"></div>
        </div>
      </StoreProvider>
  );
}
