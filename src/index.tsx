import React from 'react';
import ReactDOM from 'react-dom/client';

import { StoreProvider } from './store/Store';
import { LegoFactory } from './LegoFactory';

import './index.css';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <StoreProvider>
            <LegoFactory />
        </StoreProvider>
    </React.StrictMode>
);